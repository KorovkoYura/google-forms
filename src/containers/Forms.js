import React, { Component } from 'react'
import Header from '../components/Header'
import FormsList from '../components/FormsList'
import { connect } from 'react-redux'
import { addForm, deleteForm } from '../actions/forms'

import { IconButton, Typography, Button, Tooltip} from 'material-ui'
import { Card, CardMedia, CardContent } from 'material-ui'
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
}

  render() {
    console.log(this.props.forms)
    return (
      <div>
        <Header />
        <FormsList forms={this.props.forms} deleteForm={this.props.deleteForm} />
        <Tooltip title="Create form" placement="top">
          <Button
            variant="fab"
            color="secondary"
            style={styles.button}
            onClick={this.addForm}>
            <AddIcon />
          </Button>
        </Tooltip>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    forms: state.formsReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
     addForm: id => {
      dispatch(addForm(Date.now()))
    },
    deleteForm: id => {
      dispatch(deleteForm(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms)
