import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from './client';


describe('client reducer', () => {
  it('handles SET_CLIENT_ID', () => {
    const initialState = Map();
    const action = {
      type: 'SET_CLIENT_ID',
      clientId: 1234
    };

    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      id: 1234
    }));
  })
});