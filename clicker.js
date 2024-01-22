const redux = require('redux')

const counter = (state = 0, action)  => {

    if(action.type === "increment"){
       return state + 1;
    }

    if(action.type === "decrement"){
        return state - 1;
    }

    if(action.type === "reset"){
        return state = 0;
    }

    return state;
};

const store = redux.createStore(counter);

const increment = {
    type: "increment"
};

const decrement = {
    type: "decrement"
};

const reset = {
    type: "reset"
};


console.log(store.getState());
store.dispatch(increment);
console.log(store.getState());
store.dispatch(reset);
console.log(store.getState());
