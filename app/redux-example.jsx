var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


// suscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a target="_blank" href="' + state.map.url + '">View your location</a>';
    }
    // console.log('Name is', state.name);
    // document.getElementById('app').innerHTML = state.name;
    // console.log('New state', store.getState());
});
// unsubscribe();

console.log('currentState', store.getState());

store.dispatch(actions.fetchLocation());  // redux-thunk

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Mad Max', 'Action'));

store.dispatch(actions.addMovie('Star Wars', 'Action'));

store.dispatch(actions.removeMovie(1));

store.dispatch(actions.removeHobby(2));
