import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import { Card, CardMedia, CardContent, Typography, IconButton } from 'material-ui'
import { Delete, Edit } from 'material-ui-icons'
import { Link } from 'react-router-dom'

const FormPreview = props => {
  const {
    id,
    title,
    dateModified,
    deleteForm,
    display } = props

  return (
    <Card className="form-card">
      {
        display === 'grid' ?
          <Link to={`/forms/edit/${id}`}>
            <CardMedia
              style={{ height: 150 }}
              image="https://cdn.sourcewp.com/wp-content/uploads/bfi_thumb/Google-Forms-34b8l422a6vbi9viwc7b4a.jpg"
              title="preview"
            />
          </Link> : ''
      }
      <CardContent>
        <div className="row no-gutters">
          <Link to={`/forms/edit/${id}`}>
            <Typography variant="subheading" component="h3">
              { title } <br />
            </Typography>
          </Link>
        </div>

        <div className="row justify-content-between no-gutters">
          <div className="col-9 align-self-center">
            <div className="row align-items-center no-gutters">
              <div className="col-2">
                <Edit color="primary" />
              </div>
              <div className="col-10">
                <Typography variant="caption" align="left">
                  {
                    moment(new Date(dateModified)).fromNow()
                  }
                </Typography>
              </div>
            </div>
          </div>
          <div className="co-2">
            <IconButton aria-label="delete" onClick={deleteForm.bind({}, id)}>
              <Delete />
            </IconButton>
          </div>

        </div>
      </CardContent>
    </Card>
  )
}

export default FormPreview
