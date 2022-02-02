import {Component} from 'react'
import Button from 'react-bootstrap/Button'
import PostItem from '../PostItem'
import './index.css'

class CreatePost extends Component {
  state = {
    AddPost: [],
    userId: '',
    title: '',
    body: '',
    PostsData: [],
    color: false,
    error: false,
  }

  componentDidMount() {
    this.getPostsApi()
  }

  onchangeUserId = event => {
    this.setState({userId: event.target.value, color: true})
  }

  onchangeTitle = event => {
    this.setState({title: event.target.value, color: true})
  }

  onchangePost = event => {
    this.setState({body: event.target.value, color: true})
  }

  getPostsApi = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const options = {
      method: 'GET',
    }
    const getData = await fetch(url, options)
      .then(response => response.json())
      .then(res => this.setState({PostsData: res}))
  }

  submitPost = event => {
    event.preventDefault()
    const {userId, title, body} = this.state
    const newPost = {
      userId,
      title,
      body,
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === 200) {
          this.setState(prev => ({AddPost: [...prev.AddPost, res]}))
          alert('Post Created')
        } else {
          this.setState({error: true})
        }
      })
    console.log(newPost)
  }

  getDeletedItemId = async id => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const options = {
      method: 'DELETE',
    }
    const getData = await fetch(url, options)
      .then(response => response.json())
      .then(res => alert(`Post deleted`))
  }

  getEditItemId = async id => {
    const {PostsData} = this.state
    const editItem = PostsData.filter(each => each.id === id)
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: editItem.title,
        body: editItem.body,
        userId: editItem.userId,
      }),
    }
    const getData = await fetch(url, options)
      .then(response => response.json())
      .then(res => console.log(res))
  }

  render() {
    const {PostsData, color, error} = this.state
    const inputColor = color ? 'onChange' : 'noChange'
    const {userId, title, body} = this.state
    return (
      <>
        <div className="background">
          <form className="container" onSubmit={this.submitPost}>
            <h1 className="heading">Want to Add a New Post</h1>
            <div className="container-item">
              <label htmlFor="userId" className="label">
                UserId
              </label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={this.onchangeUserId}
                className={`input ${inputColor}`}
              />
            </div>
            <div className="container-item">
              <label htmlFor="title" className="label">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={this.onchangeTitle}
                id="title"
                className={`input ${inputColor}`}
              />
            </div>
            <div className="container-item">
              <label htmlFor="post" className="label">
                Post
              </label>
              <input
                type="text"
                value={body}
                id="post"
                onChange={this.onchangePost}
                className={`input ${inputColor}`}
              />
            </div>
            <Button className="button" type="submit" variant="secondary">
              ADD POST
            </Button>
            {error ? <p className="error">Fill all details</p> : ''}
          </form>
          <div className="post-container">
            <ul className="ul-list">
              {PostsData.map(eachPost => (
                <PostItem
                  post={eachPost}
                  key={eachPost.id}
                  getDeletedItemId={this.getDeletedItemId}
                  getUpdatedItemId={this.getUpdatedItemId}
                  getEditItemId={this.getEditItemId}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default CreatePost
