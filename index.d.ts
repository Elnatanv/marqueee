declare module "MarqueeSlider" {
  interface MarqueeSliderOptions {
    stopOnHover?: boolean;
    // Add more options and their types as needed
  }

  interface MarqueeSliderInstance {
    // Define any functions or properties you might expose from your library
    // Example:
    // someFunction(): void;
  }

  function initMarqueeSlider(
    id: string,
    options?: MarqueeSliderOptions
  ): MarqueeSliderInstance;

  export = initMarqueeSlider;
}
