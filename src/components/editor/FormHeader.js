import React, { Component } from 'react'
import { TextField } from 'material-ui'

class FormHeader extends Component {
  render() {
    const { title, description, handleChange } = this.props

    return (
      <div className="form-header">
        <TextField
          style={{fontSize: 25}}
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
