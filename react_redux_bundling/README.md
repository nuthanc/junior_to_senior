### Critical Render Path Review

![crp1](../img/crp1.png)
* React helping with changes in DOM manipulation and creaation of Render tree in Step 8
* Webpack with JS delivery in Optimizing Step 3
* Redux also helping React in Step 8

### State Management

* React: this.state
* Remember state as Memory
* State describes how our App should look
* In an App with large number of Components, keeping track of state is really hard
* State management with Redux
  * State in a store
  * One massive object holding the state

### Why Use Redux

* Good for managing large state
* Useful for sharing data between containers(Smart components, i.e. Components having state)
* Predictable state management using the 3 principles
  * Single source of truth
  * State is read only
  * Changes using pure functions
* Action -> Reducer -> Store -> Make changes
* Actions: What a User does like clicking of button
* Reducer: A pure function which receives an input and returns state
* Redux uses Flux pattern
  * Action -> Dispatcher -> Store -> View
  * In this, even though multiple Actions come through, they go through a Pure function keeping it Predictive and Simple
* MVC pattern
  * Action -> Controller -> Model -> View
  * With change in Model, the View changes which in turn changes the Model which in turn changes the View
  * So there is a cycle of events between Model and View

### Installing Redux

* git clone of robofriends
```sh
npm i redux react-redux
```
* Author's robofriends-redux link: https://github.com/aneagoie/robofriends-redux
* With Hooks: https://github.com/rusty-jnr/robofriends
* My implementation: https://github.com/nuthanc/webdev/tree/react_robofriends/robofriends_redux
* Standard implementation of Redux from Stephen: https://github.com/nuthanc/react/tree/master/streams/client/src

### Redux Actions And Reducers

* Actions which return an object with type and payload(This object is the Action)
* types.js or constants.js for types in Actions
* Author used () right after the Arrow function instead of using return 
* Used switch, Object.assign in reducers
```js
const initialState = {
  searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}
// Stephen's using spread operator
return { ...state, searchField: action.payload }
```
* It's good to have state as objects

### Redux Store and Provider

* Connect redux to react with Provider and connect
* We have Provider so that store doesn't need to be passed to multiple level Child Components by Prop drilling
  * Provider will automatically provide the store to all the Components in the Component Tree

### Redux connect

* connect function is optimized so that we don't have to use store.subscribe()
  * This is for listening to changes in store
* connect is an higher order function
  * First argument is for mapStateToProps
  * Second argument is for mapDispatchToProps
    * Stephen used Object shorthand form for this as it is easier to use
    * In Object shorthand form, only providing action creators is sufficient
    * For more info, checkout *Defining mapDispatchToProps As An Object*

### Redux Middleware

* Middleware is the tunnel between Actions and Reducers
* It can listen in for Actions
* Check here for more info about logger: https://github.com/nuthanc/webdev/tree/react_robofriends/robofriends_redux#authors-implementation

### Redux Async Actions

* redux-thunk for Async requests
* Redux thunk in Action, Slide 20: https://app.diagrams.net/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F11%2Fdiagrams.xml

### Popular tools for React and Redux

* React Router: Changing pages 
* Ramda and Lodash: Utility libraries
* Styling with React: Glamarous, Styled Components, css modules
* Gatsby: Static websites in React
* Next.js: SSR
* Material UI and Semantic UI Components
* Reselect: Help with performance with selectors
* Redux Saga: Redux thunk super powered
* Immutable JS: State remains immutable
* But ask yourself, do I really need it

### Module Bundlers

* Bundles all the JS, html and css files together
* create-react-app uses Webpack to do this
* Popular ones: Webpack, Parcel and rollup.js
* Parcel comes with zero configuration, so it's blazing fast to use
* Use rollup for your own npm packages

### Introduction to Webpack

* webpack.js.org
* Entryfile: From where to start
* Output: Where to output
* Loaders: Like Babel
* Plugin: Change the output of the code

### Webpack 4

* Checkout webpack-project folder
```sh
mkdir webpack-project
cd webpack-project
npm init -y
mkdir dist
cd dist && touch index.html

npm i --save-dev webpack webpack-dev-server webpack-cli
# Add npm start script in package.json
# Create src/index.js and webpack.config.json
npm start
# localhost:8080
```
* We also need Babel which converts our code from ES7, ES6 or anything to ES5
* **Babel**
* babel property in package.json
```sh
npm i --save-dev babel-core babel-loader babel-preset-env babel-eslint
# babel-loader compiles code
# babel-preset-env checks browser and knows which feature is implemented in that Browser's particular version and converts it accordingly
npm i babel-preset-stage-2 
# The above is for experimental features
npm i babel-preset-stage-react 
``` 
* Add module to use babel in webpack.config.js
* resolve for leaving off js and jsx while importing
```sh
npm i react react-dom
npm i --save-dev eslint eslint-loader eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-ally
```
* Create .eslintrc for eslint configurations
* We could have done the same for babel(.babelrc) instead of having it in package.json
* In .eslintrc, we can have no-console of warn to show a warning messages for console.log
* Instead of adding one by one all the properties in .eslintrc, we can use already existing configs(eslint-config-airbnb)
* For import and export statements, eslint-plugin-import
* eslint-plugin-jsx-ally for Screen readers
* npm run eject in React to get webpack.config file