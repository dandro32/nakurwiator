import * as api from './api-actions';

// TODO: test request methods wrappers

// import configureStore  from 'redux-mock-store';
// import thunk from 'redux-thunk';
// export const mockStore = configureStore([thunk]);



describe('Api-actions tests', () => {
  it('should check pendingData function', () => {
    expect(api.pendingData()).toEqual({type: 'DATA_PENDING'});    
  });

  it('should check requestError function', () => {
    expect(api.requestError('err')).toEqual({type: 'REQUEST_ERROR', data: 'err'});    
  });
});