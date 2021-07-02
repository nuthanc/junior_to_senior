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
* Also checkout **React Loadable** and also **docs in React for Route-based Code Splitting**
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

### React Performance Optimizations 2

* Andrei's Robofriends Repo: https://github.com/aneagoie/robofriends/blob/master/src/containers/App.js
* We saw that Header <h1> was getting Rerendered unnecessarily
* So he separated that to a separate Header component and used shouldComponentUpdate Lifecycle method
  * When true is returned from shouldComponentUpdate, it will update the Component and vice-versa
```js
import React, { Component } from 'react';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log('Header');
    return <h1 className='f1'>RoboFriends</h1>
  }
}

export default Header;
```
* The above was not a good Example where the Component never updates when the state changes
* Let's take another Example
```js
import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    console.log('CounterButton');
    return <button color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</button>
  }
}

export default CounterButton;

// <CounterButton color='red' />
// The above is called from Header Component
```
* Sometimes sideeffect occurs when we use currentState to update
  * State updates are not synchronous
```js
// Recommended way
this.setState(state => {
  return { count: state.count + 1}
})
```
* By adding condition in shouldComponentUpdate, the CounterButton rerenders only when counter changes
* This is a good thing because whenever Header(Parent) rerenders, CounterButton rerenders conditionally upon counter change
* There is a nice class in React called **PureComponent** which when extended adds shouldComponentUpdate by default and returns true(condition for rerendering) only when the Props change
  * One downside is it does shallow comparison and doesn't work as expected for Complex data structures(Deeply nested objects)
* Awesome tool for this is **Why did you update** or **Why Did You Render**
  * https://www.npmjs.com/package/why-did-you-update(Deprecated)
  * https://www.npmjs.com/package/@welldone-software/why-did-you-render

### Optimizing Code Review

![cop](../img/cop.png)
* Tree shaking
  * Big library, but using only one or two functions from that
  * Then webpack will only import the required functions instead of the whole library 
* Avoid memory leaks
  * Clean up variables and Event listeners when they are not used
* Tree shaking resource: https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/

### Progressive Web Apps

* Web Apps that behave like Native Apps(Mobile) with Offline content, no URL, Install capabilities, Hardware access, Interactive, Responsive etc
* PWA capability is already set in create-react-app
* Install Chrome extension called **Lighthouse** to see what can be improved in our site for PWA
* Author's Robofriends link: https://github.com/aneagoie/robofriends-redux
* 3 main things
  * HTTPS
  * App Manifest
  * Service Worker

### PWA - HTTPS

* HTTPS: Requests and Responses are Encrypted, so that it is Secure
* Robofriends App passes this as Github pages automatically gives us a https link
* **Let's Encrypt** is a free service for certification(Implementing HTTPS yourself)
* **Cloudfare** for hosting sites
* Github Pages: https://pages.github.com/
* Progressive Web Apps Checklist: https://developers.google.com/web/progressive-web-apps/checklist

### PWA - App Manifest

* In index.html, meta tag for viewport is **necessary**
  * This is for optimizing the view in multiple devices
  * https://web.dev/viewport/
* Also, a manifest file is required
  * This is given out of the box from create-react-app in public/manifest.json
  * This manifest gives the Icon(because Icon image is referenced here) when the App is downloaded
* We can use realfavicongenerator to generate icons(images) in various sizes(for different devices)
  * https://realfavicongenerator.net/
* Splash Screen is when the Web App is loading instead of white screen you provide background or image or whatever from the manifest.json

### PWA - Service Worker

* Service Worker: Script that runs in the Browser's background apart from the main thread
* This worker is used for non-interactive things
* This makes our App work offline, background syncs and Push notifications
* registerServiceWorker provided out of the box in create-react-app
* **Service Worker diff in robofriends**: https://github.com/jeffposnick/create-react-pwa/compare/starting-point...pwa
  * https://github.com/jeffposnick/create-react-pwa/compare/c-r-a-0.6.0...c-r-pwa-0.6.0
  * sw-precache-config.js, we mention what all files to cache in staticFileGlobs, use build folder
  * register is the one line which is actually required
  * npm run build, there service-worker.js file is found
* We can check if Service worker is present or not in our Applicaton in Chrome's Application tab and there Service Workers
![sw](../img/sw.png)
* Service worker acts as a **Network Proxy**
  * Instead of our Application making requests to the Network, it first asks the Service worker
  * The Service worker checks its Cache Storage to see if the requested Resource is present
  * If present, it returns the Resource without making a request to the Network
  * If it isn't present, then it makes a Network Request
* https://jakearchibald.github.io/isserviceworkerready/
* Push notifications: https://auth0.com/blog/introduction-to-progressive-web-apps-push-notifications-part-3/

### Deploying Our React App

* Use https://github.com/aneagoie/robofriends-redux for this exercise
```sh
npm i gh-pages

# Add deploy in package.json scripts
"deploy": "gh-pages -d build"
# pre syntax in npm so that it is done pre- something
"predeploy": "npm run build"

# Also homepage property for Github.io repo

npm run deploy
# Finally on Github, go to Github Pages and make sure it is in gh-pages-branch
```
* When the site is online, Generate Report using Lighthouse
* You see around 82% for PWA
* You can test this by turning wifi off and reload the Page

### Service Worker Updates

* Copy the latest serviceWorker from the latest create-react-app and paste it into the old serviceWorker file
* Also change in index.js based on the new name and register the service worker
* **Old repo:** https://github.com/aneagoie/Center-For-Robotos-Who-Cant-Be-In-The-App-Store-And-Wanna-Learn-To-Do-Other-Stuff-Good-Too/tree/master/src
* **Updated repo:** https://github.com/aneagoie/Center-For-Robotos-Who-Cant-Be-In-The-App-Store-And-Wanna-Learn-To-Do-Other-Stuff-Good-Too-update/tree/master/src
* Can also see this in Production build(npm run deploy)
* Chrome -> Application tab

### Solution Part 1 - PWA

* In lighthouse report, make even Accessibility and SEO score to 100 by following the advice given
* Accessibility resource: https://www.w3.org/standards/webdesign/accessibility
* Use font-display swap property for default text when sega font is still loading
  * https://github.com/aneagoie/robofriends-pwa/blob/master/src/containers/App.css
* Add **aria-label** in inputs for better accessibility for Screen Readers
* For SEO, add meta description in public index.html
* Images, we can't serve in Next-gen format because it is an API
* But we can add size query in the API call
* **npm run deploy**
* It takes some time for the changes to propogate
  * To check this, view the gh-pages branch in Github to see your changes
* Generate Lighthouse Report again

### Solution Part 2 - PWA

* We can see the caches done by cra service worker in Application -> Cache Storage
* Use https://realfavicongenerator.net/ for new logos for the App in various sizes
* Download and move it to public folder
* Add code in index.html's head tag
  * Add %PUBLIC_URL%/ in front of the url paths as seen in other link tags
* Add details of icons in manifest.json
* npm run deploy
* Generate Lighthouse Report
* website that lists all tools that you can use to improve front end performance of your web app: https://progressivetooling.com/