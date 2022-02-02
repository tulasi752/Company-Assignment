import {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './index.css'

class EditPost extends Component {
  state = {
    color: false,
    error: false,
  }

  submitPost = event => {
    event.preventDefault()
    const {post} = this.props
    const {userId, email, name} = post
  }

  render() {
    const {color, error} = this.state
    const inputColor = color ? 'onChange' : 'noChange'
    const {post} = this.props
    return (
      <>
        <div className="background-edit">
          <form className="container-edit" onSubmit={this.submitPost}>
            <h1 className="heading-edit">Edit Post</h1>
            <div className="container-item-edit">
              <label htmlFor="userId" className="label-edit">
                UserId
              </label>
              <input
                type="text"
                id="userId"
                onChange={this.onchangeUserId}
                className={`input-edit ${inputColor}`}
              />
            </div>
            <div className="container-item-edit">
              <label htmlFor="title" className="label-edit">
                Title
              </label>
              <input
                type="text"
                onChange={this.onchangeTitle}
                id="title"
                className={`input-edit ${inputColor}`}
              />
            </div>
            <div className="container-item-edit">
              <label htmlFor="post" className="label-edit">
                Post
              </label>
              <input
                type="text"
                id="post"
                onChange={this.onchangePost}
                className={`input-edit ${inputColor}`}
              />
            </div>
            <Link to="/">
              <Button className="button-edit" type="submit" variant="secondary">
                ADD POST
              </Button>
            </Link>
            {error ? <p className="error-edit">Fill all details</p> : null}
          </form>
        </div>
      </>
    )
  }
}
export default EditPost
