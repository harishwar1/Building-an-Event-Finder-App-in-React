import {
  GET_PERSONS,
  ADD_PERSON,
  DELETE_PERSON,
  SET_LOADING,
  PERSON_ERROR,
} from './types';

// Get techs from server
export const getPers = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_PERSONS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PERSON_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Add technician to server
export const addPer = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_PERSON,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PERSON_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const deletePer = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_PERSON,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: PERSON_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
