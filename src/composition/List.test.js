import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {

    List.defaultProps = { cards: []};

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('render the UI as expected', () => {
        const tree = renderer
            .create(<List name="List-cards"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})