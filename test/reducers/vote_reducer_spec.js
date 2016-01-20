import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from './../../src/reducers/vote';

describe('vote reducer', () => {
  it('handles SET_VOTE_STATE', () => {
    const intialState = Map();
    const action = {
      type: 'SET_VOTE_STATE',
      state: fromJS({
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 5
        }
      })
    };

    const nextState = reducer(intialState, action);

    expect(nextState).to.equal(fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {
        'Trainspotting': 5
      }
    }));
  });

  it('should handle plain JS objects', () => {
    const intialState = Map();
    const action = {
      type: 'SET_VOTE_STATE',
      state: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {'Trainspotting': 5}
      }
    };

    const nextState = reducer(intialState, action);

    expect(nextState).to.equal(fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {'Trainspotting': 5}
    }));
  });

  it('handle SET_VOTE_STATE if state is undefined', () => {
    const action = {
      type: 'SET_VOTE_STATE',
      state: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {'Trainspotting': 5}
      }
    };

    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {'Trainspotting': 5}
    }));
  });

  it('handles vote if valid', () => {
    const initialState = fromJS({
      pair: ['Trainspotting', '28 Days Later']
    });
    const action = {
      type: 'VOTE',
      entry: 'Trainspotting'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      hasVoted: 'Trainspotting'
    }));
  });

  it('handles vote if valid with tally', () => {
    const initialState = fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {
        'Trainspotting': 3
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Trainspotting'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {
        'Trainspotting': 3
      },
      hasVoted: 'Trainspotting'
    }));
  });

  it('handles doesnt set the vote if invalid', () => {
    const initialState = fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {
        'Trainspotting': 3
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Sunshine'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {
        'Trainspotting': 3
      }
    }));
  });

  it('resets vote if ', () => {
    const initialState = fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {
        'Trainspotting': 3
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Sunshine'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {
        'Trainspotting': 3
      }
    }));
  });

  it('doesnt set the vote if invalid', () => {
    const initialState = fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {
        'Trainspotting': 3
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Sunshine'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      pair: ['Trainspotting', '28 Days Later'],
      tally: {
        'Trainspotting': 3
      }
    }));
  });

  it('resets hasVoted on vote change', () => {
    const initialState = fromJS({
      id: 1,
      pair: ['Trainspotting', '28 Days Later'],
      hasVoted: 'Trainspotting'
    });
    const action = {
      type: 'SET_VOTE_STATE',
      state: {
        id: 2,
        pair: ['28 Days Later', 'Casablanca']
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      id: 2,
      pair: ['28 Days Later', 'Casablanca']
    }))
  });

  it('handles SET_ROOM', () => {
    const initialState = Map();
    const action = {
      type: 'SET_ROOM',
      room: 'test_room'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      room: 'test_room'
    }));
  });

  it('resets the current rooms state on SET_ROOM', () => {
    const initialState = fromJS({
      room: 'first_room',
      id: 21,
      pair: ['Trainspotting', '28 Days Later'],
      tally: {
        'Trainspotting': 5
      },
      entries: ['Casablanca']
    });
    const action = {
      type: 'SET_ROOM',
      room: 'test_room',
      state: {
        pair: ['Transformers']
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      room: 'test_room',
      pair: ['Transformers']
    }));
  });
});