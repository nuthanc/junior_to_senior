### Optimizing Code

* One of the heaviest cost is Parsing of JS code by the Browser's JS engine
* Chrome -> Inspect -> Performance -> Record -> Reload -> Stop
  * Can observe timeline to see what get's loaded at what time
![jsCompile](../img/jsCompile.png)
* Parse, Compile and Execution of JS takes time
* Use webpagetest and check Processing Breakdown
* Browsers do JIT compilation(Just in time)
* Ahead of Compilation in Angular 2, where it the compiled code is given to the Browser, so that there is less load on the Browser
* Limit Animations 

### Code Splitting Introduction

* Send minimally functioning page composed of HTML, CSS and JS needed for the current route or page and as more resources arrive, the App can lazy load
* Instead of one big massive JS file containing all the code from combining multiple small JS files, load JS only when it is required
* Lazy Loading: Loading other resources after our Page becomes interactive
* Load only the bare minimum required and then download the other resources in the Background
![split](../img/split.png)
* Red is the vendor file like React which is required in every Page
* Production build: npm run build
  * Minimized and Optimized code

### Code Splitting Part 1

* Use create-react-app to build an App
* **Repo link**: https://github.com/nuthanc/code-splitting-exercise
* App with 3 Pages as children but only one is displayed based on logic or route
![cs1](../img/cs1.png)

### Code Splitting Part 2

* Dynamic imports
  * Imports not at the top of the file, but when required
  * Works only because of webpack
* Check above mentioned Repo's App.js Part 2 comments
```js
this.state = {
  route: 'page1',
  // Part 2 - Code Splitting - manual
  component: null
}

import('./Components/Page2')
  .then((Page2) => {
    // console.log(Page2); This show Page2 Component is under default property
    this.setState({ route: route, component: Page2.default })
  })
  .catch(err => {
  });

// Part 2 - No Code Splitting - manual
if (this.state.route === 'page1') {
  return <Page1 onRouteChange={this.onRouteChange} />
} else {
  return <this.state.component onRouteChange={this.onRouteChange} />
}
```
* Check this in Chrome Network tab, refresh and Clear all and click on Page2 or Page3
  * You see 1.chunk.js or *.chunk.js
* Page2 and Page3 are not part of bundle.js downloaded initially