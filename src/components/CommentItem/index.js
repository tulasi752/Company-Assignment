import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import './index.css'

const CommentItem = props => {
  const {post, getUpdatedItemId, getDeletedItemId, getEditItemId} = props
  const {name, email, body, id, postId} = post

  const clickUpdate = () => {
    getUpdatedItemId(id)
  }

  const clickDelete = () => {
    getDeletedItemId(id)
  }

  const clickEdit = () => {
    getEditItemId(id)
  }

  return (
    <li className="list-item">
      <div className="container-flex1">
        <h1 className="title">{name}</h1>
        <p className="email">{email}</p>
        <p className="email">{body}</p>
      </div>
      <div className="container-flex">
        <Link to="/editComment" post={post}>
          <Button
            className="button2"
            onClick={clickEdit}
            type="submit"
            variant="primary"
          >
            Edit
          </Button>
        </Link>
        <Button
          className="button2"
          type="submit"
          onClick={clickDelete}
          variant="danger"
        >
          Delete
        </Button>
      </div>
    </li>
  )
}
export default CommentItem
