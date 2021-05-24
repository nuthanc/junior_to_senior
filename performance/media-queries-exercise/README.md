### Exercise

1. Minimize all text
2. Minimize images
3. Media Queries
4. Minimize # of files

### What I did

* Removed comments in JS files
* Added media query of screen and min-width of 900 px to display large background
* Used HTML, CSS and JS minifier to compact the code
* Using Tiny PNG and other site reduced the image size and removed the metadata

### Test in Developer's Console

* Slow 3G speed
* Resize to check the screen size
* Check Network tab to check which resources are downloaded

### Author's solution

* For images, in HTML 300x200 was given
  * So what Author did is using Preview adjusted the Width and Height to 300 and 200 respectively
    * Tools -> Adjust Size (Change to pixels) -> Set width to 300
    * See change in puppy.jpg
* Make large background only for tiny screen sizes
* Combine 2 stylesheets to 1
  * This is bundling
  * Doing this manually is tedious, there's tools like webpack for this