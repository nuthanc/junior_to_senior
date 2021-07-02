### Testing Overview

* Repo: https://github.com/aneagoie/robofriends-testing
* As the Application grows, it becomes difficult to test manually all the features
* Also the code which you add may unintentionally impact other part of the code
* Without tests, these doesn't get caught immediately

### Types of Tests

* Unit Tests
  * Tests individual functions or classes
  * Easiest to implement
* Integratoin Tests
  * Testing how different pieces of code work together
  * Ex, db works with express app, how a function works with another function
* Automation Tests
  * UI test, tests on the browser about the expected behavior

### Testing Libraries

* Top 3 Testing libraries: Jasmine, Jest and Mocha
  * Provides the skaffolding like methods and classes
* Assertion libraries: Jasmine, Jest and Chai(Paired with Mocha)
  * Comparison between Actual and Expected values
* Test Runner: Jasmin, Jest, Mocha and Karma.js(In browser)
  * Something that allows us to run tests
  * Puppeteer by Google is a stripped down version of Browser 
  * jsdom: dom like api
  * npm run test with react does **react-scripts test --env=jsdom**
* Mock, Spies and Stubs: Jasmine, Jest and Sinon.js(Paired with Mocha)
  * Spies provide info about functions like how many times it was called, in what cases and by who
    * https://sinonjs.org/releases/v11.1.1/spies/
  * Stubbing replaces selected functions with functions to check whether the expected behavior happens
    * https://sinonjs.org/releases/v11.1.1/stubs/
  * Mocks is faking a function or behavior to test different parts of a process
    * https://sinonjs.org/releases/v11.1.1/mocks/
  * A backend server can be faked with Sinon stub
* Code coverage: Istanbul, Jest(Underneath uses Istanbul)
  * What percent of code are covered by tests
  * npm test -- --coverage