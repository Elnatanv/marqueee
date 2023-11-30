// carthagosSlider.d.ts

declare module 'carthagosSlider' {
    interface CarthagosSliderOptions {
      stopOnHover?: boolean;
      // Add more options and their types as needed
    }
  
    interface CarthagosSliderInstance {
      // Define any functions or properties you might expose from your library
      // Example:
      // someFunction(): void;
    }
  
    function initCarthagosSlider(id: string, options?: CarthagosSliderOptions): CarthagosSliderInstance;
  
    export = initCarthagosSlider;
  }