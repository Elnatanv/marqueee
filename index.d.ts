interface MarqueeSliderOptions {
  stopOnHover?: boolean;
  allowPointEvent?: boolean;
}

declare const initMarqueeeSlider: (
  id: string,
  options?: MarqueeSliderOptions
) => void;

export { initMarqueeeSlider, MarqueeSliderOptions }; // Exporting the interface if needed
