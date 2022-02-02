import {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './index.css'

class EditComment extends Component {
  state = {
    color: false,
  }

  submitPost = event => {
    event.preventDefault()
    const {post} = this.props
    const {userId, email, name} = post
  }

  render() {
    const {color} = this.state
    const inputColor = color ? 'onChange' : 'noChange'
    const {post} = this.props
    return (
      <>
        <div className="background-edit-comment">
          <form className="container-edit-comment" onSubmit={this.submitPost}>
            <h1 className="heading-edit-comment">Edit Comment</h1>
            <div className="container-item-edit-comment">
              <label htmlFor="userId" className="label-edit-comment">
                CommentId
              </label>
              <input
                type="text"
                id="userId"
                onChange={this.onchangeUserId}
                className={`input-edit ${inputColor}`}
              />
            </div>
            <div className="container-item-edit">
              <label htmlFor="title" className="label-edit-comment">
                Name
              </label>
              <input
                type="text"
                onChange={this.onchangeTitle}
                id="title"
                className={`input-edit ${inputColor}`}
              />
            </div>
            <div className="container-item-edit">
              <label htmlFor="post" className="label-edit-comment">
                Email
              </label>
              <input
                type="text"
                id="post"
                onChange={this.onchangePost}
                className={`input-edit ${inputColor}`}
              />
            </div>
            <Link to="/comments">
              <Button
                className="button-edit-comment"
                type="submit"
                variant="secondary"
              >
                ADD COMMENT
              </Button>
            </Link>
          </form>
        </div>
      </>
    )
  }
}
export default EditComment
