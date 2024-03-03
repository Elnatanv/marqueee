export const initMarqueeeSlider = (id, options = {}) => {
  const swiper = document.getElementById(id);
  const swiperWrapperInit = swiper.querySelector(".marquee-slider-wrapper");
  const swiperSlidesWrapper = swiperWrapperInit.getElementsByClassName(
    "marquee-slider-slides-wrapper"
  );

  const getDirOp = (dir) => {
    if (dir === "right") return { sym: "+", axis: "X" };
    if (dir === "left") return { sym: "-", axis: "X" };
    if (dir === "up") return { sym: "-", axis: "Y" };
    if (dir === "down") return { sym: "+", axis: "Y" };
  };

  const { stopOnHover = false, allowPointEvent = true, dir = "left" } = options;

  if (!allowPointEvent) {
    swiper.style.pointerEvents = "none";
  }

  const speed = parseFloat(swiper.getAttribute("data-speed")) || 5;

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
    const height = swiperSlidesWrapper[0].offsetHeight;

    if (dir === "right") {
      swiperWrapper.style.left = `-${width + space}px`;
    }

    const keyframes = `
       @keyframes ${id} {
         0% {
           transform: translate${getDirOp(dir).axis}(0);
         }
         100% {
           transform: translate${getDirOp(dir).axis}(${getDirOp(dir).sym}${
      width + space
    }px);
         }
       }
       
     `;

    let delta = Math.ceil(swiper.offsetWidth / width);
    if (delta < 1) {
      delta = 1;
    }

    let swipersLength = swiperSlidesWrapper.length;

    for (let i = 1; i <= delta; i++) {
      for (let j = 0; j < swipersLength; j++) {
        const elm = swiperSlidesWrapper[j];

        const clone = elm.cloneNode(true);
        swiperWrapper.appendChild(clone);
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
      swiperWrapper.style.transform = `translate${getDirOp(dir).axis}(0)`;
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
