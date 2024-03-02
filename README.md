# Marquee Slider Library

Welcome to the Marquee Slider Library! This library allows you to easily create a beautiful marquee slider for your website. Below are instructions on how to implement and use the library.

## Demos:

[React.js](https://codesandbox.io/p/sandbox/marquee-react-demo-cgphsd)

## Installation

NPM install

```
npm i marqueee
```

and import:

```
const { initMarqueeeSlider } from 'marqueee'
```

---

using it as vanilla js:

You need to include the JavaScript file in your project (above `</body>`).

you can get the JS file [from here](https://raw.githubusercontent.com/Elnatanv/marqueee/main/marquee-slider.js)

```
<script src="marquee-slider.js"></script>
```

## Usage

### HTML Structure

First, you need to create the HTML structure for your marquee slider. Here's an example:

(If using in JSX - change class to className)

```
<div id="marquee-slider" data-speed="5" data-space="10">
    <div class="marquee-slider-wrapper">
        <div class="marquee-slider-slides-wrapper">
            <div class="marquee-slider-slide">Slide 1</div>
            <div class="marquee-slider-slide">Slide 2</div>
            <div class="marquee-slider-slide">Slide 3</div>
            <div class="marquee-slider-slide">Slide 4</div>
        </div>
    </div>
</div>
```

Important:

- The `id` attribute must be set for the top parent `div`.
- Two additional attributes are required: `data-speed` and `data-space`.
  - `data-speed`: Time taken for the animation to complete.
  - `data-space`: Space between slides.
- `marquee-slider-wrapper` and `marquee-slider-slides-wrapper` classes are mandatory.
- Each slide should have the class `marquee-slider-slide`.

In addition you need to add the style:

React :

```
import "marqueee/style.css"
```

HTML:

you can get the css file [from here](https://raw.githubusercontent.com/Elnatanv/marqueee/main/marquee-slider.js)

```
<link rel="stylesheet" href="./marquee-slider.css">
```

### JavaScript Initialization

Once you have set up the HTML structure, you can initialize the marquee slider using the `initMarqueeSlider` function. Here's an example:

React:

```
useEffect(()=>{
    initMarqueeSlider("marquee-slider", {stopOnHover:true, allowPointEvent:true})
},[])
```

Vanilla JS:

```
<script>
    initMarqueeSlider("marquee-slider", {stopOnHover:true, allowPointEvent:true});
</script>
```

The `initMarqueeSlider` function takes two arguments:

1. The `id` of the top parent div.
2. An options object:
   | Option | Default | Description |
   |-----------------|---------|------------------------------------------------------------------------|
   | stopOnHover | true | Allows/prevents the user to pause the marquee on mouse hover. |
   | allowPointEvent| true | Allows/prevents the user to have pointer events on marquee. Will overwrite stopOnHover option! |

That's it! You've successfully implemented the Marquee Slider Library on your website.
