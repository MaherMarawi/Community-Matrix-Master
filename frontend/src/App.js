import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import AddQuestions from './Components/AddQuestions/AddQuestions'
import AuthPage from './Components/AuthPage/AuthPage'
import ShowOne from './Components/ShowOne/ShowOne'
import UpdatePage from './Components/UpdatePage/UpdatePage'
import Page404 from './Components/Page404/Page404'

import Contact from "./Components/Contact/Contact"

import AddComment from './Components/Comments/AddComment'



import About from "./Components/About/About"


import platform from './Components/platform/platform'
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
        <Switch>

          <Route exact path='/add-comment' component={AddComment} /> 

          <Route exact path='/platform' component={platform} /> 
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/About' component={About} />


          <Route exact path='/Show/:id' component={ShowOne} /> 
          <Route exact path='/UpdatePage' component={UpdatePage} />
          <Route exact path='/AuthPage' component={AuthPage} />
          <Route exact path='/AddQuestions' component={AddQuestions} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/*' component={Page404} />
        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
