const redux = require('redux');

let nextToDoID = 0;

//Reducer 
const todos = (state = [], action) => {
    switch (action.type){
        case "ADD_TODO":{
            return [...state,{
                id: ++nextToDoID,
                completed: false
            }]
        }
        case "TOGGLE_TODO":{
            return state.map(todo => {
                todo.id === action.todoID
                ? {...todo, completed: !todo.completed}
                : todo
            })
        }
        default: {
            return state;
        }
    }
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

// State of Store
console.log(store.getState());