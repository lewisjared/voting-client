import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const intialState = Map();
    const action = {
      type: 'SET_STATE',
      state: fromJS({
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {
            'Trainspotting': 5
          }
        }
      })
    };

    const nextState = reducer(intialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 5
        }
      }
    }));
  });

  it('should handle plain JS objects', () => {
    const intialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {'Trainspotting': 5}
        }
      }
    };

    const nextState = reducer(intialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {'Trainspotting': 5}
      }
    }));
  });

  it('handle SET_STATE if state is undefined', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {'Trainspotting': 5}
        }
      }
    };

    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {'Trainspotting': 5}
      }
    }));
  });

  it('handles vote if valid', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later']
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Trainspotting'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later']
      },
      hasVoted: 'Trainspotting'
    }));
  });
  it('handles vote if valid with tally', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 3
        }
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Trainspotting'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 3
        }
      },
      hasVoted: 'Trainspotting'
    }));
  });

  it('handles doesnt set the vote if invalid', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 3
        }
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Sunshine'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 3
        }
      }
    }));
  });

  it('resets vote if ', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 3
        }
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Sunshine'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 3
        }
      }
    }));
  });

  it('doesnt set the vote if invalid', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 3
        }
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Sunshine'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 3
        }
      }
    }));
  });

  it('resets hasVoted on vote change', () => {
    const initialState = fromJS({
      vote: {
        id: 1,
        pair: ['Trainspotting', '28 Days Later'],
      },
      hasVoted: 'Trainspotting'
    });
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          id: 2,
          pair: ['28 Days Later', 'Casablanca']
        }
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        id: 2,
        pair: ['28 Days Later', 'Casablanca']
      }
    }))
  });
});