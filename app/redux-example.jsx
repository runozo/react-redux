var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
}

var oldReducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            }
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
            }
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            }
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.id)
            }
        default:
            return state;
    }
}

// Name reducer and action generators
// -----------------------
var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

var changeName = (name) => ({type: 'CHANGE_NAME', name});

// Hobbies reducer and action generators
// -----------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter(hobby => hobby.id !== action.id);
        default:
            return state;
    }
};

var addHobby = hobby => ({type: 'ADD_HOBBY', hobby});
var removeHobby = id => ({type: 'REMOVE_HOBBY', id});

// Movies reducer and action generators
// -----------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    movie: action.movie
                }
            ];
        case 'REMOVE_MOVIE':
            return state.filter(movie => movie.id !== action.id);
        default:
            return state;
    }
};

var addMovie = (movie, genre) => ({type: 'ADD_MOVIE', movie, genre});
var removeMovie = id => ({type: 'REMOVE_MOVIE', id});

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});
var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// suscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
    console.log('New state', store.getState());
});
// unsubscribe();

console.log('currentState', store.getState());

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('Mad Max', 'Action'));

store.dispatch(addMovie('Star Wars', 'Action'));

store.dispatch(removeMovie(1));

store.dispatch(removeHobby(2));
