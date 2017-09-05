import React, { Component } from 'react';
import '../Main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">Task Reminder</div>
        <div className="form-inline">
          <div className="form-group">
            <input className="form-Control"
            placeholder="Enter Task" />
          </div>
          <button type="button" className="btn btn-success">Set Reminder</button>
        </div>
      </div>
    )
  }
}

export default App;
