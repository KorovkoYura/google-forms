import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Input, InputLabel, Tooltip, Button } from 'material-ui'
import { Close } from 'material-ui-icons'

const DropDownList = props => {
  let { options, addOption, handleOptionChange, deleteOption } = props
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
                  onChange={handleOptionChange(option.id)}
                  fullWidth
                  margin="dense"
                />
                {
                  (options.length > 1)
                  ? (<Tooltip id="tooltip-icon" title="Delete">
                    <Close onClick={() => deleteOption(option.id)} />
                  </Tooltip>)
                  : ''
                }
              </form>
            )
          })
        }
      <Button
        style={{marginTop: 30}}
        onClick={addOption}>
        Добавить вариант
      </Button>
    </div>
  )
}

export default DropDownList
