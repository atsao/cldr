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
    .then(response => {
      console.log(response.data);
      dispatch(getDataSuccess(response.data));
    })
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