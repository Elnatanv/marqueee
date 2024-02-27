/**
 * Initializes the Carthagos Slider.
 * @param {string} id - The ID of the slider element.
 * @param {Object} options - The options for the slider.
 * @param {boolean} options.stopOnHover - Whether to stop the slider on hover (default: false).
 * @example
 * // Initialize the Carthagos Slider with ID "mySlider"
 * initMarqueeeSlider("mySlider", { stopOnHover: true });
 */
const initMarqueeeSlider = (id, options = {}) => {
  const { stopOnHover = false } = options;
  const swiper = document.getElementById(id);
  const swiperWrapperInit = swiper.querySelector(".marquee-slider-wrapper");
  const swiperSlidesWrapper = swiperWrapperInit.getElementsByClassName(
    "marquee-slider-slides-wrapper"
  );
  const space = parseFloat(swiper.getAttribute("data-space")) || 10;
  const prefix = swiper.getAttribute("data-prefix") || "px";

  const initStyle = () => {
    swiper.style.overflow = "hidden";
    //animate
    const spaceBetween = { value: space, prefix: prefix };
    swiperSlidesWrapper[0].style.gap = `0 ${spaceBetween.value}${spaceBetween.prefix}`;
    swiperSlidesWrapper[0].style.margin = `0 ${spaceBetween.value / 2}${
      spaceBetween.prefix
    }`;
  };
  initStyle();
  const clonedWrapper = swiperWrapperInit.cloneNode(true);
  const init = (swiperWrapper) => {
    const speed = parseFloat(swiper.getAttribute("data-speed"));

    const width = swiperSlidesWrapper[0].offsetWidth;
    console.log(width, "width");
    // Define keyframes for the animation
    const keyframes = `
     @keyframes ${id} {
       0% {
         transform: translateX(0);
       }
       100% {
         transform: translateX(-${width + space}px);
       }
     }
     
   `;

    // swiper width and check how many can fit inside
    let delta = Math.ceil(swiper.clientWidth / width) * 2;
    if (delta < 1) {
      delta = 1;
    }
    let swipersLength = swiperSlidesWrapper.length;
    // duplicate
    for (let i = 0; i < delta; i++) {
      for (let j = 0; j < swipersLength; j++) {
        const elm = swiperSlidesWrapper[j];

        const clone = elm.cloneNode(true); // Create a clone of the slide element

        swiperWrapper.appendChild(clone);
      }
    }

    // Animate the movement to the left
    const animationDuration = speed; // Adjust this value to control the animation speed

    // Apply CSS animation to the swiper wrapper
    swiperWrapper.style.animation = `${id} ${animationDuration}s linear infinite`;

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
      swiperWrapper.style.transform = "translateX(0)";
    });
  };

  init(swiperWrapperInit);

  window.addEventListener("resize", init(clonedWrapper));
};
