/**
 * Created by pratikgarala on 10/4/17.
 */

import ActionTypes from '../constants/action_types';
import database from './database';
import store from '../store/store';

export function getBirds() {
    return dispatch => {
        dispatch(getBirdsRequestedAction());
        return database.ref('birds_master').once('value', snap => {
            const birds = snap.val();
            dispatch(getBirdsFulfilledAction(birds))
        })
            .catch((error) => {
                console.log(error);
                dispatch(getBirdsRejectedAction());
            });
    }
}

export function selectBird(bird){
    if(bird.isImageAvailable.localeCompare("1") == 0){
        var birdUrl = require("../../images/Birds/Repository/" + bird.birdId + ".jpg");
    }else{
        var birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
    }

    return{
        type : ActionTypes.birdSelected,
        selectedBird : bird,
        birdUrl : birdUrl
    }
}

export function selectBirdForRecordSighting(bird) {
    $("#birdName").val(bird.commonName);
    return dispatch => {
        dispatch(getSelectedBirdsForRecordSightingFulfilled(bird));
    }
}

function getSelectedBirdsForRecordSightingFulfilled (bird){
    const matchBirdsForRecordSighting = [];
    return{
        type : ActionTypes.GetSelectedBirdForRecordSightingFulfilled,
        selectedBirdForRecordSighting : bird,
        matchBirdsForRecordSighting
    }
}

export function displayMatches(){
    // value of input field
    var wordToMatch = $("search").prevObject[0].activeElement.value;


    // value of Birds
    var birds = store.getState().birds.birds;
    const matchBirds = findMatches(wordToMatch, birds);
    var matchBirdsForRecordSighting = []
    if(wordToMatch.length != 0) {
        matchBirdsForRecordSighting = matchBirds;
    }
    return dispatch => {
        dispatch(filterBirdsByNameAction(matchBirds))
    };
}

export function displayMatchesForRecordSighting(){
    // value of input field
    var wordToMatch = $("search").prevObject[0].activeElement.value;

    if(wordToMatch.length == 0) {
        wordToMatch = "!@#$%^&*()";
    }

    // value of Birds
    var birds = store.getState().birds.birds;
    const matchBirdsForRecordSighting = findMatches(wordToMatch, birds);
    return dispatch => {
        dispatch(filterBirdsForRecordSightingByNameAction(matchBirdsForRecordSighting))
    };
}


export function changeBirdsForPage(birdsForPage){
    return{
        type : ActionTypes.changeBirdsForPage,
        birdsForPage
    }
}

function findMatches(wordToMatch, birds) {
    return birds.filter(bird => {
        const regex = new RegExp(wordToMatch, 'gi');
        return bird.commonName.match(regex);
    });
}

function getBirdsRequestedAction() {
    return {
        type: ActionTypes.GetBirdsRequested
    };
}

function getBirdsRejectedAction() {
    return {
        type: ActionTypes.GetBirdsRejected
    }
}

function getBirdsFulfilledAction(birds) {
    return {
        type: ActionTypes.GetBirdsFulfilled,
        birds
    };
}

function filterBirdsByNameAction(matchBirds){

    return {
        type: ActionTypes.filterBirdsByName,
        matchBirds,
    }
}

function filterBirdsForRecordSightingByNameAction(matchBirdsForRecordSighting){

    return {
        type: ActionTypes.filterBirdsForRecordSightingByName,
        matchBirdsForRecordSighting
    }
}