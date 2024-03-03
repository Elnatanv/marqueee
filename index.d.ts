// types.d.ts

interface MarqueeSliderOptions {
  stopOnHover?: boolean;
  allowPointEvent?: boolean;
}

declare function initMarqueeeSlider(
  id: string,
  options?: MarqueeSliderOptions
): void;
