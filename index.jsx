import { useEffect } from "react";
import { initMarqueeeSlider } from "MarqueeSlider";

const App = () => {
  useEffect(() => {
    initMarqueeeSlider("marqueee-slider", { stopOnHover: true });
  }, []);

  return (
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
  );
};

export default App;
