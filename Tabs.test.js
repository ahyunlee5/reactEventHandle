import React from 'react';
import Tabs from './Tabs';
import renderer from 'react-test-renderer';

// describe ('Tabs Component', () => {
//     it ('renders without errors', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<Tabs />, div);
//         ReactDOM.unmountComponentAtNode(div);
//     })
// })
describe (`Tabs Component`, () => {
    const tabsProps = [
        {name: 'First tab',
        content: 'bloop'},
        {name: 'Second tab',
        content: 'blap'},
        {name: 'Third tab',
        content: 'blah'},
      ];

    it ('renders the first tab by default', () => {
        const tree = renderer.create(<Tabs tabs={tabsProps} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})