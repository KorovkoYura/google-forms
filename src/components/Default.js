import React from 'react'
import { Paper } from 'material-ui'

const Default = (props) => {
  return (
    <div style={{width: '70%', margin: 'auto', marginTop: 50, textAlign: 'center'}}>
        <Paper style={{padding: '5em', position: 'relative'}}>
          <p style={{fontSize: 20}}>Форм нет</p>
          <p>Чтобы создать форму, нажмите на "+".</p>
        </Paper>
      </div>
  )
}

export default Default
