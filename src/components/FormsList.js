import React from 'react'
import { Card, CardMedia, CardContent, Typography, IconButton } from 'material-ui'
import { Delete } from 'material-ui-icons'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component'

import '../styles/formList.css'

const FormsList = (props) => {
  let { forms } = props
  forms = forms.reverse()

  const masonryOptions = {
    itemSelector: '.form-card',
    transitionDuration: '0.7s',
    stagger: 30,
    gutter: 25,
    horizontalOrder: true,
    percentPosition: true
  }
  return (
    <Masonry options={masonryOptions}>
      {
        forms.map(form => {
          return (
            <Card className="form-card" key={form.id}>
              <Link to={`/forms/edit/${form.id}`}>
                <CardMedia
                  style={{ height: 200 }}
                  image="https://cdn.sourcewp.com/wp-content/uploads/bfi_thumb/Google-Forms-34b8l422a6vbi9viwc7b4a.jpg"
                  title="preview"
                />
            </Link>
              <CardContent style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <div>
                  <Typography gutterBottom variant="headline" component="h3">
                    { form.title }
                  </Typography>
                  <Typography gutterBottom variant="subheading" component="p">
                    { form.description }
                  </Typography>
                </div>
                <IconButton aria-label="delete" onClick={props.deleteForm.bind({}, form.id)}>
                  <Delete />
                </IconButton>
              </CardContent>
            </Card>
          )
        })
      }
    </Masonry>
  )
}

export default FormsList
