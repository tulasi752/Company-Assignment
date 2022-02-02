import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import './index.css'

const PostItem = props => {
  const {post, getUpdatedItemId, getDeletedItemId, getEditItemId} = props
  const {title, body, id, userId} = post

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
    <li className="list-item-post">
      <div className="container-flex3">
        <h1 className="title">{title}</h1>
        <p className="email">{body}</p>
      </div>
      <div className="container-flex">
        <Link to="/editPost" post={post}>
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
export default PostItem
