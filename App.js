import React from 'react';
import './App.css';
import Tabs from './Tabs';

const tabsProps = [
  {name: 'First tab',
  content: 'bloop'},
  {name: 'Second tab',
  content: 'blap'},
  {name: 'Third tab',
  content: 'blah'},
]

class App extends React.Component {
  render() {
    return <div className='checking'>
      <Tabs tabs={tabsProps} />
    </div>
  }
}

export default App;
