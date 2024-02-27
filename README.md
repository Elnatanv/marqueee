# Marquee Slider Library

Welcome to the Marquee Slider Library! This library allows you to easily create a beautiful marquee slider for your website. Below are instructions on how to implement and use the library.

## Installation

To use the Marquee Slider Library, you need to include the JavaScript file in your project. You can download it from [here](example.com/marquee-slider.js) and include it in your HTML file like this:

```
<script src="marquee-slider.js"></script>
```

## Usage

### HTML Structure

First, you need to create the HTML structure for your marquee slider. Here's an example:

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

- The `id` attribute must be set for the top parent `div`.
- Two additional attributes are required: `data-speed` and `data-space`.
  - `data-speed`: Time taken for the animation to complete.
  - `data-space`: Space between slides.
- `marquee-slider-wrapper` and `marquee-slider-slides-wrapper` classes are mandatory.
- Each slide should have the class `marquee-slider-slide`.

In addition you need to add the style:

```
<link rel="stylesheet" href="./marquee-slider.css">
```

### JavaScript Initialization

Once you have set up the HTML structure, you can initialize the marquee slider using the `initMarqueeSlider` function. Here's an example:

```
initMarqueeSlider("marquee-slider", {stopOnHover: false});
```

The `initMarqueeSlider` function takes two arguments:

1. The `id` of the top parent div.
2. An options object. By default, the only option available is `stopOnHover`, which determines whether the marquee animation stops on hover. If not specified, it defaults to `false`.

That's it! You've successfully implemented the Marquee Slider Library on your website.
