import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { used: ' KILL' };
  }

  render() {
    const { used } = this.state;
    return (
      <h1>
        Thus Spoken Zarathustura
        {used}
      </h1>
    );
  }
}


export default App;
