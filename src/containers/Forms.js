import React, { Component } from 'react'
import Header from '../components/Header'
import FormsList from '../components/FormsList'
import Default from '../components/Default'
import { connect } from 'react-redux'
import { addForm, deleteForm } from '../actions/forms'

import { Button, Tooltip } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'

const styles = {
  button: {
    position: 'fixed',
    right: 50,
    bottom: 50
  }
}

class Forms extends Component {
  addForm = id => {
    this.props.addForm(id)
    this.props.history.push(`/forms/edit/${id}`)
}

  render() {
    return (
      <div>
        <Header />
        {
          (this.props.forms.length > 0) ?
            <FormsList forms={this.props.forms} deleteForm={this.props.deleteForm} />
            : <Default />
        }
        <Tooltip title="Create form" placement="top">
          <Button
            variant="fab"
            color="secondary"
            style={styles.button}
            onClick={this.addForm.bind({}, Date.now())}>
            <AddIcon />
          </Button>
        </Tooltip>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    forms: state.forms
  }
}

const mapDispatchToProps = dispatch => {
  return {
     addForm: id => {
      dispatch(addForm(id))
    },
    deleteForm: id => {
      dispatch(deleteForm(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms)
