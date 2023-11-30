/**
 * Initializes the Carthagos Slider.
 * @param {string} id - The ID of the slider element.
 * @param {Object} options - The options for the slider.
 * @param {boolean} options.stopOnHover - Whether to stop the slider on hover (default: false).
 * @example
 * // Initialize the Carthagos Slider with ID "mySlider"
 * initCarthagosSlider("mySlider", { stopOnHover: true });
 */
export const initCarthagosSlider = (id, options = {}) => {
  const { stopOnHover = false } = options;
  const swiper = document.getElementById(id);
  const swiperWrapper = swiper.querySelector(".slider-wrapper");
  const swiperSlide = swiperWrapper.getElementsByClassName("slider-slide");

  const space = parseFloat(swiper.getAttribute("data-space"));
  const prefix = swiper.getAttribute("data-prefix") || "px";
  const speed = parseFloat(swiper.getAttribute("data-speed"));

  const spaceBetween = { value: space, prefix: prefix };
  //for resize
  const clonedWrapper = swiperWrapper.cloneNode(true);

  const init = (swiperWrapper) => {
    // get the wrppaer width + space between * slides
    const totalSlideWidth = spaceBetween.value * swiperSlide.length;
    const width = swiperWrapper.clientWidth + totalSlideWidth;

    console.log("widtg", width);
    // swiper width and check how many can fit inside
    let delta = Math.ceil(swiper.clientWidth / width) * 2;
    if (delta < 1) {
      delta = 1;
    }
    let swipersLength = swiperSlide.length;
    // duplicate
    for (let i = 0; i < delta; i++) {
      for (let j = 0; j < swipersLength; j++) {
        const elm = swiperSlide[j];
        const clone = elm.cloneNode(true); // Create a clone of the slide element
        swiperWrapper.appendChild(clone);
      }
    }

    //animate
    swiperWrapper.style.gap = `0 ${spaceBetween.value}${spaceBetween.prefix}`;
    // Set the width of the swiper wrapper to fit all duplicated slides
    swiperWrapper.style.width = `${width * delta}px`;

    // Animate the movement to the left
    const animationDuration = speed; // Adjust this value to control the animation speed
    const slideWidth = swiperSlide[0].offsetWidth + spaceBetween.value;

    // Apply CSS animation to the swiper wrapper
    swiperWrapper.style.animation = `${id} ${animationDuration}s linear infinite`;

    // Define keyframes for the animation
    const keyframes = `
        @keyframes ${id} {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${slideWidth}px);
          }
        }
        
      `;

    // Inject keyframes into a style element
    const styleElement = document.createElement("style");
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    if (stopOnHover) {
      swiperWrapper.addEventListener("mouseleave", () => {
        swiperWrapper.style.animationPlayState = "running";
      });

      swiperWrapper.addEventListener("mouseenter", () => {
        swiperWrapper.style.animationPlayState = "paused";
      });
    }
    // Reset the position when animation completes
    swiperWrapper.addEventListener("animationiteration", () => {
      swiperWrapper.appendChild(swiperWrapper.firstElementChild);
      swiperWrapper.style.transform = "translateX(0)";
    });
  };

  init(swiperWrapper);

  window.addEventListener("resize", init(clonedWrapper));
};
