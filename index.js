const redux = require('redux');

// Reducer
const reducer = (state, action) => {

    if(action.type === 'INCREMENT'){
        return state + 1;
    }

    return state;
}

// Store
const store = redux.createStore(reducer);

// State of store
console.log(store.getState())
