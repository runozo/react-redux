var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
}
var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            }
        default:
            return state;
    }
}

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe to changes
store.subscribe(() => {
    var state = store.getState();
    document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState', store.getState());

// suscribe to changes
// var unsubscribe = store.subscribe(() => {
//     var state = store.getState();

//     console.log('Name is', state.name)
// });
// unsubscribe();

// console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'work'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'dog'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'else'
});

console.log('searchText should be work', store.getState())
