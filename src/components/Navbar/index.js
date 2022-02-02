import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <li>
            <Link className="list" to="/">
              ADD POST
            </Link>
          </li>
          <li>
            <Link className="list" to="/comments">
              Comments
            </Link>
          </li>
        </nav>
      </div>
    )
  }
}

export default Navbar
