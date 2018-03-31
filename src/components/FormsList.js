import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfoBar from './InfoBar'
import FormPreview from './FormPreview'
import Masonry from 'react-masonry-component'

import '../styles/formList.css'

const masonryOptions = {
  itemSelector: '.form-card',
  transitionDuration: '0.7s',
  stagger: 30,
  gutter: 20,
  horizontalOrder: true,
  percentPosition: true
}

class FormsList extends Component {
  state = {
    anchorEl: null,
    selectedIndex: 0,
    display: 'grid'
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuItemClick = (event, index, value) => {
    this.setState({ selectedIndex: index, anchorEl: null })
    this.props.sortBy(value)
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleDisplay = () => {
    this.setState({
      display: this.state.display === 'grid' ? 'list' : 'grid'
    })
  }

  render() {
    let { forms, sortBy, deleteForm } = this.props
    const { anchorEl, display, selectedIndex } = this.state
    // forms = forms.reverse()

    return (
      <div>
        <InfoBar
          anchorEl={anchorEl}
          display={display}
          selectedIndex={selectedIndex}
          handleClickListItem={this.handleClickListItem}
          handleMenuItemClick={this.handleMenuItemClick}
          handleClose={this.handleClose}
          handleDisplay={this.handleDisplay}
          sortBy={sortBy}
        />
        <Masonry options={masonryOptions} className={this.state.display === 'grid' ? "form-grid" : "form-list"}>
          {
            forms.map(form => {
              return (
                <FormPreview
                  key={form.id}
                  id={form.id}
                  title={form.title}
                  description={form.description}
                  dateModified={form.dateModified}
                  deleteForm={deleteForm}
                  display={display}
                />
              )
            })
          }
        </Masonry>
      </div>
    )
  }
}

FormsList.propTypes = {
  forms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired
  ).isRequired
}

export default FormsList
