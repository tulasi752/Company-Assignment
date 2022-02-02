import {Switch, BrowserRouter, Route} from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Navbar from './components/Navbar'
import Comments from './components/Comments'
import EditPost from './components/EditPost'
import EditComment from './components/EditComment'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={CreatePost} />
      <Route exact path="/comments" component={Comments} />
      <Route exact path="/editPost" component={EditPost} />
      <Route exact path="/editComment" component={EditComment} />
    </Switch>
  </BrowserRouter>
)

export default App
