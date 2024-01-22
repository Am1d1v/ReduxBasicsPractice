const redux = require('redux');


// Initial State
const initialState = 0;

// Counter Reducer
const counterReducer = (state = initialState, action) => {

    if(action.type === 'INCREMENT'){
        return state + 1;
    }

    return state;
}

// ToDosReducer
const todosReducer = (state = [], action) => {

    if(action.type === 'ADD_TODO'){
        return [...state, 'new objective']
    }

    return state;
};


// Combine Reducers
const rootReducer = redux.combineReducers({
    counter: counterReducer,
    todos: todosReducer
});

// Combined Store
const store = redux.createStore(rootReducer);


// // Store
// const store = redux.createStore(reducer);

// State of store
console.log(store.getState());

// Increase counter 
store.dispatch({type: "INCREMENT"});
console.log(store.getState());