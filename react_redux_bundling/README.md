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
* Useful for sharing data between containers
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