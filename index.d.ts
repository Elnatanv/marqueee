interface MarqueeSliderOptions {
  stopOnHover?: boolean;
  allowPointEvent?: boolean;
  dir?: "right" | "left";
}

declare const initMarqueeeSlider: (
  id: string,
  options?: MarqueeSliderOptions
) => void;

export { initMarqueeeSlider, MarqueeSliderOptions }; // Exporting the interface if needed
