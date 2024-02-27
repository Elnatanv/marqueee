/**
 * Initializes the Carthagos Slider.
 * @param {string} id - The ID of the slider element.
 * @param {Object} options - The options for the slider.
 * @param {boolean} options.stopOnHover - Whether to stop the slider on hover (default: false).
 * @example
 * //JS:
 * // Will go inside a useEffect or componentDidMount
 * initMarqueeeSlider("mySlider", { stopOnHover: true });
 * - - - 
 * //HTML / JSX (change class to className if using React):
  <div id="marqueee-slider" data-speed="5" data-space="10">
    <div className="marquee-slider-wrapper">
      <div className="marquee-slider-slides-wrapper">
        <div className="marquee-slider-slide">slide 1</div>
        <div className="marquee-slider-slide">slide 2</div>
        <div className="marquee-slider-slide">slide 3</div>
        <div className="marquee-slider-slide">slide 4</div>
      </div>
    </div>
  </div>
 */
export const initMarqueeeSlider = (id, options = {}) => {
  const swiper = document.getElementById(id);
  const swiperWrapperInit = swiper.querySelector(".marquee-slider-wrapper");
  const swiperSlidesWrapper = swiperWrapperInit.getElementsByClassName(
    "marquee-slider-slides-wrapper"
  );

  const { stopOnHover = false, dir = "left", allowPointEvent = true } = options;

  if (dir === "right") {
    swiper.setAttribute("dir", "rtl");
  }
  if (dir === "left") {
    swiper.setAttribute("dir", "ltr");
  }

  if (!allowPointEvent) {
    swiper.style.pointerEvents = "none";
  }

  const speed = parseFloat(swiper.getAttribute("data-speed"));

  const space = parseFloat(swiper.getAttribute("data-space")) || 10;
  const prefix = swiper.getAttribute("data-prefix") || "px";
  const spaceBetween = { value: space, prefix: prefix };

  const initStyle = () => {
    swiper.style.overflow = "hidden";
    swiperSlidesWrapper[0].style.gap = `0 ${spaceBetween.value}${spaceBetween.prefix}`;
    swiperSlidesWrapper[0].style.margin = `0 ${spaceBetween.value / 2}${
      spaceBetween.prefix
    }`;
    swiperSlidesWrapper[0].style.minWidth = `${swiperSlidesWrapper[0].offsetWidth}px`;
  };

  const clonedWrapper = swiperWrapperInit.cloneNode(true);
  const init = (swiperWrapper) => {
    const width = swiperSlidesWrapper[0].offsetWidth;

    // Define keyframes for the animation
    const keyframes = `
         @keyframes ${id} {
           0% {
             transform: translateX(0);
           }
           100% {
             transform: translateX(${dir === "left" ? "-" : "+"}${
      width + space
    }px);
           }
         }
         
       `;

    // swiper width and check how many can fit inside
    let delta = Math.ceil(swiper.offsetWidth / width);
    if (delta < 1) {
      delta = 1;
    }

    let swipersLength = swiperSlidesWrapper.length;

    for (let i = 0; i <= delta; i++) {
      for (let j = 0; j < swipersLength; j++) {
        const elm = swiperSlidesWrapper[j];

        const clone = elm.cloneNode(true);
        if (dir === "left") {
          swiperWrapper.appendChild(clone);
        }
        if (dir === "right") {
          swiperWrapper.prepend(clone);
        }
      }
    }

    // Apply CSS animation to the swiper wrapper
    swiperWrapper.style.animation = `${id} ${speed}s linear infinite`;

    // Inject keyframes into a style element
    const styleElement = document.createElement("style");
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    // Reset the position when animation completes
    swiperWrapper.addEventListener("animationiteration", () => {
      swiperWrapper.style.transform = "translateX(0)";
    });

    //options handling
    if (stopOnHover) {
      swiperWrapper.addEventListener("mouseleave", () => {
        swiperWrapper.style.animationPlayState = "running";
      });

      swiperWrapper.addEventListener("mouseenter", () => {
        swiperWrapper.style.animationPlayState = "paused";
      });
    }
  };

  initStyle();
  init(swiperWrapperInit);

  window.addEventListener("resize", init(clonedWrapper));
};
