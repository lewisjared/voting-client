import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';

import {Results} from '../../src/components/Results';

describe('Results', () => {
  it('renders entries with vote counts or zeros', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 5});
    const component = renderIntoDocument(
      <Results pair={pair} tally={tally}/>
    );
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
    const [train, zombies] = entries.map(e => e.textContent);

    expect(entries.length).to.equal(2);
    expect(train).to.contain('Trainspotting');
    expect(train).to.contain('5');
    expect(zombies).to.contain('28 Days Later');
    expect(zombies).to.contain('0');
  });

  it('invokes the next callback when clicked', () => {
    let nextInvoked = false;
    const next = () => nextInvoked = true;

    const pair = List.of('Trainspotting', '28 Days Later');
    const component = renderIntoDocument(
      <Results pair={pair}
               tally={Map()}
               next={next}/>
    );
    Simulate.click(ReactDOM.findDOMNode(component.refs.next));

    expect(nextInvoked).to.equal(true);
  });

  it('should display winner when there is once', () => {
    const component = renderIntoDocument(
      <Results winner="Trainspotting" />
    );
    const winner = ReactDOM.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  });
});