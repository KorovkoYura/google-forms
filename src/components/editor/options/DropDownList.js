import React from 'react'
import { Input, InputLabel, Tooltip } from 'material-ui'
import { Close } from 'material-ui-icons'

const DropDownList = props => {
  let { options, handleOptionChange, deleteOption } = props
  let count = 0

  return (
    <div>
        {
          options.map((option, index) => {
            count++
            return (
              <form key={index} style={{display: 'flex', alignItems: 'center', marginTop: 20}} noValidate autoComplete="off">
                <InputLabel>{`${count}.`}</InputLabel>
                <Input
                  style={{margin: '0 20px'}}
                  value={option.value}
                  onChange={event => handleOptionChange(option, event)}
                  fullWidth
                  margin="dense"
                />
                {
                  (options.length > 1)
                  ? (<Tooltip id="tooltip-icon" title="Delete">
                    <Close onClick={ () => deleteOption(undefined, option.id)} />
                  </Tooltip>)
                  : ''
                }
              </form>
            )
          })
        }
    </div>
  )
}

export default DropDownList
