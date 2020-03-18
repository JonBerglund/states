import {PARSE_ERR, RESPONSE_ERR} from '../helpers/consts';

const STATES_URL = 'http://pos.idtretailsolutions.com/countytest/states';

export const getStates = () => {
  return fetchData(STATES_URL);
};

export const getCounties = url => {
  return fetchData(url);
};

const fetchData = url => {
  return fetch(url, getOptions())
    .then(response => {
      if (response.status === 200) {
        return response
          .json()
          .then(data => data)
          .catch(() => {
            throw new Error(PARSE_ERR);
          });
      } else {
        throw new Error(RESPONSE_ERR);
      }
    })
    .catch(() => {
      throw new Error(RESPONSE_ERR);
    });
};

const getOptions = () => {
  return {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };
};
