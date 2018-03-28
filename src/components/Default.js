import React from 'react'
import { Paper } from 'material-ui'

const Default = (props) => {
  return (
        <Paper style={{padding: '5em', position: 'relative', marginTop: 50, textAlign: 'center'}}>
          <p style={{fontSize: 25}}>Форм нет</p>
          <p style={{fontSize: 18}}>Чтобы создать форму, нажмите на "+".</p>
        </Paper>
  )
}

export default Default
