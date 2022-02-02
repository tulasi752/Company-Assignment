import {Component} from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CommentItem from '../CommentItem'

class Comments extends Component {
  state = {
    PostsData: [],
  }

  componentDidMount() {
    this.getCommentsApi()
  }

  getCommentsApi = async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    const options = {
      method: 'GET',
    }
    const getData = await fetch(url, options)
      .then(response => response.json())
      .then(res => this.setState({PostsData: res}))
  }

  getDeletedItemId = async id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    const options = {
      method: 'delete',
    }
    const getData = await fetch(url, options)
      .then(response => response.json())
      .then(res => alert(`Comment deleted`))
  }

  getEditItemId = async id => {
    const {PostsData} = this.state
    const editItem = PostsData.filter(each => each.id === id)
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: editItem.title,
        email: editItem.body,
        body: editItem.userId,
      }),
    }
    const getData = await fetch(url, options)
      .then(response => response.json())
      .then(res => console.log(res))
  }

  render() {
    localStorage.getItem('postData')
    const {PostsData} = this.state
    return (
      <>
        <ul className="ul-list-comments">
          {PostsData.map(eachPost => (
            <CommentItem
              post={eachPost}
              key={eachPost.id}
              getDeletedItemId={this.getDeletedItemId}
              getEditItemId={this.getEditItemId}
            />
          ))}
        </ul>
      </>
    )
  }
}
export default Comments
