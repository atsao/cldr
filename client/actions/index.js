import axios from 'axios';

const API_CLDR = `/api/cldr`;

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS`';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE`';

export const getDataRequest = () => {
  return dispatch => {
    dispatch(getData());
    
    return axios({
      method: 'GET',
      url: API_CLDR
    })
    .then(response => dispatch(getDataSuccess(response.data)))
    .catch(response => dispatch(getDataFailure(response)));
  };
}

const getData = () => {
  return {
    type: GET_DATA_REQUEST
  }
}

const getDataSuccess = (data) => {
  return {
    type: GET_DATA_SUCCESS,
    payload: data
  }
}

const getDataFailure = (error) => {
  return {
    type: GET_DATA_FAILURE,
    payload: error
  }
}

export const GET_QUERY_LIST = 'GET_QUERY_LIST';
export const ADD_QUERY = 'ADD_QUERY';
export const REMOVE_QUERY = 'REMOVE_QUERY';

export const getQueryList = () => {
  return {
    type: GET_QUERY_LIST
  }
}

export const addQuery = (query) => {
  return {
    type: ADD_QUERY,
    payload: query
  }
}

export const removeQuery = (query) => {
  return {
    type: REMOVE_QUERY,
    payload: query
  }
}

export const PROCESS_DATA_REQUEST = 'PROCESS_DATA_REQUEST';
export const PROCESS_DATA_SUCCESS = 'PROCESS_DATA_SUCCESS';

export const processDataRequest = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (Object.keys(state.query).length === 0 && state.query.constructor === Object) {
      return;
    }
      
    let items = Object.keys(state.query).reduce((initial, current, i) => {
      initial[current] = [];
      return initial;
    }, {});

    dispatch(processData());

    state.data.forEach((item, i) => {
      let current = item.main;
      let localeName = '';

      for (let k in current) {
        localeName = k;
        for (let p in current[k].delimiters) {
          let value = {};
          if (items[p]) {
            value.value = current[k].delimiters[p];
            value.name = localeName;
            items[p].push(value);
          }
        }
      }
    });
    dispatch(processDataSuccess(items));
  }
}

const processData = () => {
  return {
    type: PROCESS_DATA_REQUEST
  }
}

const processDataSuccess = (data) => {
  return {
    type: PROCESS_DATA_SUCCESS,
    payload: data
  }
}