import { from } from 'rxjs';
import httpObservable from 'simplehttpobservable';
import kanjis from '../data/mocks/kanjis.json';
import endpoints from '../data/endpoints.json';

const mocks = {
  GET_ALL: kanjis,
};

const getEndpoint = endpointName => {
  return endpoints[endpointName];
};

const getMock = mockName => {
  return mocks[mockName];
};

const getData = name => {
  if (process.env.REACT_APP_MOCK) {
    const data = getMock(name) || [];
    return from([data]);
  } else {
    return httpObservable(getEndpoint(name));
  }
};

export default getData;
