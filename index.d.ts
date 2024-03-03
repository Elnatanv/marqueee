declare function initMarqueeeSlider(
  id: string,
  options?: MarqueeSliderOptions
): void;

interface MarqueeSliderOptions {
  stopOnHover?: boolean;
  allowPointEvent?: boolean;
}

export { initMarqueeeSlider, MarqueeSliderOptions };
