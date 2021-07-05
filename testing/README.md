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

### Unit Tests

* Individual small units
* Based on an input, get an output
* Unit tests are extremely useful for Pure functions
* React functional components with no state are Pure functions
* Pure functions: Functions with no side effects, i.e they are deterministic

### Integration Tests

* Cross communication between different units of code
* Spies and Stubs are used to mock integration with other components
* Brittle and harder to write

### Automation Tests

* UI tests run on browser or browser-like env
* Simulate User behavior
* Ex: Checkout flow
* Hardest to setup
* End to End Test
* Nightwatch, webdriveio, TestCafe, Nightmare, Cypress are some of the services that provide Automation Testing
* UI tests take longer time

### Final Note on Testing

![Test](../img/test.png)

### Setting Up Jest

* https://jestjs.io/docs/getting-started
```sh
mkdir test && cd test
npm init -y
touch script.js
npm install --save-dev jest
```
* Update test script in package.json
```sh
npm test

> test@1.0.0 test /Users/nuthanc/personal_projects/junior_to_senior/testing/test
> jest

No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/nuthanc/personal_projects/junior_to_senior/testing/test
  3 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 3 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```
* So add script.test.js

### Our First Tests

*  --watch *.js in jest command to watch changes for js files
* We mock the db in the tests because it is an expensive operation to import or get hold of db
* Also we want Pure function for googleSearch so that db can be passed as an argument

### Writing Tests

* It's better to have more tests because it is never going into Production and you can cover a lot of scenarios
* Don't worry of repeating in Tests
* Make tests fail first before you make them pass
* Group tests with **describe**