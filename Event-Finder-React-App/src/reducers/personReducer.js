import {
  GET_PERSONS,
  ADD_PERSON,
  DELETE_PERSON,
  SET_LOADING,
  PERSON_ERROR,
} from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_PERSON:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_PERSON:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PERSON_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
