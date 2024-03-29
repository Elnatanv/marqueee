# Marquee Slider Library

Welcome to the Marquee Slider Library! This library allows you to easily create a beautiful marquee slider for your website. Below are instructions on how to implement and use the library.

**Demos:**

[React.js](https://codesandbox.io/p/sandbox/marquee-react-demo-cgphsd)

[React.js - with types](https://codesandbox.io/p/sandbox/marqueee-demo-typescript-nw4rtg)

[Vanilla JS](https://codesandbox.io/p/sandbox/marqueee-demo-vanillajs-n889ty)

## Installation

### React.js:

NPM install

```
npm i marqueee
# or
yarn add marqueee
```

and import:

```
const { initMarqueeeSlider } from 'marqueee'
```

**Typescript:**

```
import { initMarqueeeSlider, MarqueeSliderOptions } from "marqueee";
```

---

### Vanilla js:

You need to include the JavaScript file in your project (above `</body>`).

you can get the JS file [from here](https://cdn.jsdelivr.net/npm/marqueee@latest/marquee-slider.min.js) ( < 2KB)

```
<script src="https://cdn.jsdelivr.net/npm/marqueee@latest/marquee-slider.min.js"></script>
```

## Usage

### HTML Structure

First, you need to create the HTML structure for your marquee slider. Here's an example:

**(If using in JSX - change class to className)**

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

**Important:**

- The `id` attribute must be set for the top parent `div`.
- Two additional attributes are required: `data-speed` and `data-space`.
  - `data-speed`: Time taken for the animation to complete.
  - `data-space`: Space between slides.
- `marquee-slider-wrapper` and `marquee-slider-slides-wrapper` classes are mandatory.
- Each slide must have the class `marquee-slider-slide`.

**How it works:**

- The marquee width will be defined by the parent div `(id="marquee-slider")`
- Each slide can take anything as child.
- Each slide can be styled how ever you want. you can change the width, height, bg color, etc..

---

**CSS import**

React :

```
import "marqueee/style.css"
```

HTML:

you can get the css file [from here](https://cdn.jsdelivr.net/npm/marqueee@latest/style.css)

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/marqueee@latest/style.css">
```

---

### JavaScript Initialization

Once you have set up the HTML structure, you can initialize the marquee slider using the `initMarqueeSlider` function. Here's an example:

### React:

```
useEffect(()=>{
    initMarqueeSlider("marquee-slider", {stopOnHover:true, allowPointEvent:true, dir:'left'})
},[])
```

**Typescript:**

```
useEffect(() => {
    const options: MarqueeSliderOptions = {
      stopOnHover: true,
      allowPointEvent: false,
    };
    initMarqueeeSlider("marquee-slider", options);
  }, []);
```

### Vanilla JS:

```
<script>
    initMarqueeSlider("marquee-slider", {stopOnHover:true, allowPointEvent:true, dir:'left'});
</script>
```

The `initMarqueeSlider` function takes two arguments:

1. The `id` of the top parent div.
2. An options object:
   | Option | Type | Default | Description |
   |-----------------|---------|---------|------------------------------------------------------------------------|
   | stopOnHover | Boolean | false | Allows/prevents the user to pause the marquee on mouse hover. |
   | allowPointEvent | Boolean | false | Allows/prevents the user to have pointer events on marquee. Will overwrite stopOnHover option! |
   | dir | String | 'left' | Marquee direction - left / right |

That's it! You've successfully implemented the Marquee Slider Library on your website.

## Todo

- [x] Add types support.
- [x] Add direction to the marquee. (In progress - supporting left and right only.)
- [x] Add styling instructions. (In progress)
- [ ] Add instruction - how to use with multiple marquees in the same page.
