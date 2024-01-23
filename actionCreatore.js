const redux = require('redux');

//Reducer 
const todos = (state = [], action) => {

};

// Store
const store = redux.createStore(todos);


// Action Creators
const addToDo = (title) => {

    return {
        type: "ADD_TODO",
        title: title
    }
}

const toggleToDo = (todoID) => {

    return {
        type: "TOGGLE_TODO",
       todoID: todoID
    }
}