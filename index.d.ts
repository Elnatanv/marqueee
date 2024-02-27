// index.d.ts

declare module "marqueeeSlider" {
  interface MarqueeeSliderOptions {
    stopOnHover?: boolean;
    // Add more options and their types as needed
  }

  interface MarqueeeSliderInstance {
    // Define any functions or properties you might expose from your library
    // Example:
    // someFunction(): void;
  }

  function initMarqueeeSlider(
    id: string,
    options?: MarqueeeSliderOptions
  ): MarqueeeSliderInstance;

  export = marqueeeSlider;
}
