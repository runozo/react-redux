var axios = require('axios');

export var changeName = (name) => ({type: 'CHANGE_NAME', name});

export var addHobby = hobby => ({type: 'ADD_HOBBY', hobby});
export var removeHobby = id => ({type: 'REMOVE_HOBBY', id});

export var addMovie = (movie, genre) => ({type: 'ADD_MOVIE', movie, genre});
export var removeMovie = id => ({type: 'REMOVE_MOVIE', id});

var startLocationFetch = () => ({type: 'START_LOCATION_FETCH'});
var completeLocationFetch = url => ({type: 'COMPLETE_LOCATION_FETCH', url});

export var fetchLocation = () => {  // redux-thunk
    return (dispatch, getState) => {
        dispatch(startLocationFetch());

        axios.get('https://apps.arpae.it/REST/codici_istat/001001').then((res) => {
            var loc = res.data.nome;
            var baseUrl = 'https://it.wikipedia.org/wiki/';
            dispatch(completeLocationFetch(baseUrl + loc));
        });

    };
};