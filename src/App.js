import React, { Component } from 'react';
import { Button } from 'material-ui'
import { BrowserRouter as Router, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button
            variant="raised"
            color="primary"
            onClick={() => this.props.history.push('/forms')}>
            Get started
          </Button>
      </div>
    );
  }
}

export default App;
