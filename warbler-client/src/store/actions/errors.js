import {ADD_ERROR, REMOVE_ERROR} from '../actionTypes';

function addError(error) {
  return {
    type: ADD_ERROR,
    error
  }
}

function removeError(error) {
  return {
    type: REMOVE_ERROR,
    error
  }
}

