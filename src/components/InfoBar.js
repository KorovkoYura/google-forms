import React from 'react'
import PropTypes from 'prop-types'

import { Typography, IconButton } from 'material-ui'
import Menu, { MenuItem } from 'material-ui/Menu'
import Fade from 'material-ui/transitions/Fade'
import { ViewModule, List, SortByAlpha } from 'material-ui-icons'

const styles = {
  icons: {
    fontSize: 30
  }
}

const options = [
  {
    text: 'По дате изменения',
    value: 'sortByDateModified'
  },
  {
    text: 'По дате создания',
    value: 'sortByDate'
  },
  {
    text: 'По названию',
    value: 'sortByName'
  }
]

const InfoBar = props => {
  const {
    anchorEl,
    selectedIndex,
    display,
    handleClickListItem,
    handleMenuItemClick,
    handleClose,
    handleDisplay } = props

  return (
    <div className="row align-items-center" style={{marginTop: 20}}>
      <div className="col-10">
        <Typography variant="title" gutterBottom>
          Недавние формы
        </Typography>
      </div>
      <div className="col-1">
         <IconButton aria-label="Display" onClick={handleDisplay}>
          {
            display === 'grid' ?
              <List  style={styles.icons} />
              : <ViewModule style={styles.icons} />
          }
        </IconButton>
      </div>
      <div className="col-1">
        <IconButton
          aria-label="Display"
          aria-owns={anchorEl ? 'fade-menu' : null}
          aria-haspopup="true"
          onClick={handleClickListItem}
          >
          <SortByAlpha style={styles.icons} />
        </IconButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          transition={Fade}
        >
          {
            options.map((option, index) => {
              return (
                <MenuItem
                  key={index}
                  selected={index === selectedIndex}
                  onClick={event => handleMenuItemClick(event, index, option.value)}
                >
                  { option.text }
                </MenuItem>
              )
            })
          }
        </Menu>
      </div>
    </div>
  )
}

InfoBar.propTypes = {
  anchorEl: PropTypes.object,
  display: PropTypes.string,
  handleClick: PropTypes.func,
  handleClose: PropTypes.func,
  handleDisplay: PropTypes.func
}

export default InfoBar
