import React from 'react'
import { Card, CardMedia, CardContent, Typography, IconButton } from 'material-ui'
import { Delete } from 'material-ui-icons'
import { Link } from 'react-router-dom'

const FormsList = (props) => {
  let { forms } = props
  // forms = forms.reverse()

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {
        forms.map(form => {
          return (
            <Card key={form.id} style={{ minWidth: 345, margin: 50 }}>
              <Link to={`/forms/edit/${form.id}`}>
                <CardMedia
                  style={{ height: 200 }}
                  image="https://cdn.sourcewp.com/wp-content/uploads/bfi_thumb/Google-Forms-34b8l422a6vbi9viwc7b4a.jpg"
                  title="Contemplative Reptile"
                />
            </Link>
              <CardContent style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography gutterBottom variant="headline" component="h2">
                  { form.title }
                </Typography>
                <IconButton aria-label="delete" onClick={props.deleteForm.bind({}, form.id)}>
                  <Delete />
                </IconButton>
              </CardContent>
            </Card>
          )
        })
      }
    </div>
  )
}

export default FormsList
