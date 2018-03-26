import React, { Component } from 'react';
import { Button, Typography } from 'material-ui'

class App extends Component {
  render() {
    return (
      <div style={{position: 'absolute', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <div>
            <Typography variant="display4" gutterBottom>
            Google Forms
            </Typography>
          </div>
          <div>
            <Button
              style={{margin: 'o auto'}}
              variant="raised"
              color="primary"
              size="large"
              onClick={() => this.props.history.push('/forms')}>
              Get started
            </Button>
          </div>
      </div>
    );
  }
}

export default App;
