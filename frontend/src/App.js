import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Questions from './Components/Questions/ShowAll/ShowQuestions'
import AddQuestions from './Components/Questions/AddQuestions/AddQuestions'
import Auth from './Components/Auth/AuthLayout/Auth'
import ShowOne from './Components/Questions/ShowOne/ShowOne'
import Page404 from './Components/Page404/Page404'
import Contact from "./Components/Contact/Contact"
import AddComment from './Components/Comments/AddComment'
import About from "./Components/About/About"
import platform from './Components/HomePage/platform'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AuthOut from './Components/Auth/AuthFunc/AuthOut'
import Users from './Components/Users/GetUsers'
import Profile from './Components/Users/Profile'

function App() {
  return (
      <BrowserRouter>
      <div  className="App" >
        <Switch>
          <Route exact path='/Auth/logout' component={AuthOut} />
            <Route exact path='/Auth/:param' component={Auth} />
            
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/About' component={About} />
            <Route exact path='/' component={platform} />
            <Route exact path='/Auth/:param' component={Auth} />
        <div className="app">
            <Navbar />
                  <Route exact path='/users' component={Users} />
                  <Route exact path='/community' component={Questions} />
                  <Route exact path='/add-comment' component={AddComment} /> 
                  <Route exact path='/profile/:id' component={Profile} />
                  <Route exact path='/AddQuestions' component={AddQuestions} />
                  <Route exact path='/Show/:id' component={ShowOne} />
              </div>
              <Route exact path='/*' component={Page404} />
        </Switch>
        </div>
    </BrowserRouter>
  )
}
export default App;
