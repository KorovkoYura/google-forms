import React from 'react'
import { AppBar, Toolbar, Typography, Button } from 'material-ui'
import { KeyboardBackspace, Save } from 'material-ui-icons'

const EditorHeader = (props) => (
  <AppBar position="static">
    <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
      <Button  variant="flat" color="inherit" size="large" style={{marginRight: 50}} onClick={props.onClick}>
        <KeyboardBackspace style={{fontSize: 35}} />
      </Button>
      <Typography variant="display1" color="inherit" align="right">
        Google Forms
      </Typography>
      <Button color="inherit"  onClick={() => props.updateForm(props.form)}>
        <Save style={{fontSize: 35}} />
      </Button >
    </Toolbar>
  </AppBar>
)

export default EditorHeader
