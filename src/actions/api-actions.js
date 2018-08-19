import A from '../configs/redux-action-names.config';
import fetch from 'isomorphic-fetch';
import apiConfig from '../configs/api.config.json';
import notification from './notify-action';
import { v4 } from 'uuid';

export const pendingData = () => {
  return {
    type: A.DATA_PENDING,
  };
};

export const requestError = (err) => {
  return dispatch => {
    dispatch(notification('Błąd integracji z api', 'warning'));
    dispatch({
      type: A.REQUEST_ERROR,
      data: err
    });
  };
};


export const getData = (apiPath, action) => {
  return dispatch => {
    dispatch(pendingData());
    return fetch(`${apiConfig.baseApiUrl}${apiPath}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response=> response.json())
      .then(data => dispatch(action(data)))
      .catch(err=> dispatch(requestError(err)));
  };
};

export const postData = (apiPath, action, payload) => {
  return dispatch => {
    dispatch(pendingData());
    const payloadWithNewId = {...payload, id: v4()};
    return fetch(`${apiConfig.baseApiUrl}${apiPath}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payloadWithNewId)
    })
      .then(response=> dispatch(action(response.data)))
      .catch(err=> dispatch(requestError(err)));
  };
};


export const putData = (apiPath, action, payload) => {
  return dispatch => {
    dispatch(pendingData());
    return fetch(`${apiConfig.baseApiUrl}${apiPath}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response=> dispatch(action(response.data)))
      .catch(err=> dispatch(requestError(err)));
  };
};


export const deleteData = (apiPath, action, id) => {
  return dispatch => {
    dispatch(pendingData());
    return fetch(`${apiConfig.baseApiUrl}${apiPath}`, {
      method: 'DELETE',
    })
      .then(()=> dispatch(action(id)))
      .catch(err=> dispatch(requestError(err)));
  };
};