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

### Code Splitting Part 3

* Cleaner way instead of this.state.component is AsyncComponent
* Check App.js and AsyncComponent of code-splitting-exercise repo
* AsyncComponent is a higher order Component(i.e, a Component which returns other Component)
```js
// Below example for Assigning to new variable
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

if (this.state.route === 'page1') {
  return <Page1 onRouteChange={this.onRouteChange} />
} else if (this.state.route === 'page2') {
  const AsyncPage2 = AsyncComponent(() => import("./Components/Page2"));
  return <AsyncPage2 onRouteChange={this.onRouteChange} />
} else {
  const AsyncPage3 = AsyncComponent(() => import("./Components/Page3"));
  return <AsyncPage3 onRouteChange={this.onRouteChange} />
}
```
* Now AsyncComponent can be used for dynamic imports and rendering the Component based on the function passed as argument
* npm run build has a bigger main.js because of import of AsyncComponent
  * Analyze the trade-offs
  * The Pages are asyncronously loaded when required

### Code Splitting Part 4

* Route based(Pages) Splitting
  * Splitting based on Route like Home page, About page etc
* There is also Component based Code Splitting
* Also checkout React Loadable and also docs in React for Route-based Code Splitting
* Code Splitting with React.lazy Repo: https://github.com/nuthanc/code-splitting-exercise-updated
  * Check Part 4 changes in the Repo
  * Wrap Lazy Components with Suspense Component which does something(fallback) while the Component loads(download and fetched)

### React Performance Optimizations

* localhost:3000/?react_perf
  * Open Developer Tools -> Performance -> Record -> Search something in Robofriends App -> Stop
  * Checkout the CPU graph
  ![react_perf](../img/react_perf.png)
  * You see that if the Nesting is deep, then the Re-render of the child components all down to the Leaf Children will happen
  * By using Redux, we can be smart about what Components Update
* React Developer tools Chrome Plugin
  * Developer tools -> React tab
  * Highlight Updates
  * This shows what is being Rerendered when changes are made
  * Using this, we can see what is being Rerendered unnecessarily