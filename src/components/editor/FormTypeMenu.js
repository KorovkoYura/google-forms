import React, { Component } from 'react'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import Menu, { MenuItem } from 'material-ui/Menu'
import { ShortText, ArrowDropDownCircle, RadioButtonChecked } from 'material-ui-icons'

const options = [
  {
    text: 'Текст (строка)',
    value: 'text',
    icon: <ShortText />
  },
  {
    text: 'Один из списка',
    value: 'list',
    icon: <RadioButtonChecked />
  },
  {
    text: 'Раскрывающийся список',
    value: 'dropDownList',
    icon: <ArrowDropDownCircle />
  }
]

class FormTypeMenu extends Component {
  state = {
    anchorEl: null,
    selectedIndex: 0,
  }

  componentWillMount() {
    const index = options.findIndex(option => option.value === this.props.type)
    this.setState({selectedIndex: index})
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  handleMenuItemClick = (event, index) => {
    const type = options[index].value
    this.props.handleMenuChange(type)

    this.setState({
      selectedIndex: index,
      anchorEl: null,
    });
  }

  render() {
    const { anchorEl } = this.state

    return (
      <div>
         <List component="nav">
          <ListItem
            button
            onClick={this.handleClickListItem}
          >
          <ListItemIcon>
            {
              options[this.state.selectedIndex].icon
            }
          </ListItemIcon>
            <ListItemText
              primary={ options[this.state.selectedIndex].text }
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {
            options.map((option, index) => (
            <MenuItem
              key={index}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              <ListItemIcon >
                {
                  option.icon
                }
              </ListItemIcon>
              {
                option.text
              }
            </MenuItem>
          ))
        }
        </Menu>
      </div>
    )
  }
}

export default FormTypeMenu
