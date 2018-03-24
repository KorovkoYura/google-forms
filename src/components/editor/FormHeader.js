import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField, IconButton } from 'material-ui'
import { Save } from 'material-ui-icons'

class FormHeader extends Component {
  render() {
    const { title, description, handleChange } = this.props

    return (
      <div className="form-header">
        <TextField
          className="form-title"
          value={title}
          margin="normal"
          placeholder="Название формы"
          onChange={handleChange('title')}
          fullWidth
        />
        <TextField
          className="form-subtitle"
          value={description}
          margin="normal"
          placeholder="Описание"
          onChange={handleChange('description')}
          fullWidth
        />
      </div>
    )
  }
}

export default FormHeader
