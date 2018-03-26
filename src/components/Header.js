import React from 'react'
import { AppBar, Toolbar, Typography } from 'material-ui'

const Header = props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="display1" color="inherit">
        Google Forms
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
