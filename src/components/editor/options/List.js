import React from 'react'
import { Input, Tooltip } from 'material-ui'
import { Close, RadioButtonUnchecked } from 'material-ui-icons'

const List = props => {
  let { options, handleOptionChange, deleteOption } = props

  return (
    <div>
        {
          options.map((option, index) => {
            return (
              <form key={index} style={{display: 'flex', alignItems: 'center', marginTop: 20}} noValidate autoComplete="off">
                <RadioButtonUnchecked />
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

export default List
