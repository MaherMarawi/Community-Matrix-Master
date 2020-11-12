import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import AddQuestions from './Components/AddQuestions/AddQuestions'
import AuthPage from './Components/AuthPage/AuthPage'
import ShowOne from './Components/ShowOne/ShowOne'
import UpdatePage from './Components/UpdatePage/UpdatePage'
import Page404 from './Components/Page404/Page404'

import platform from './Components/platform/platform'


import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>

          <Route exact path='/platform' component={platform} /> 

          <Route exact path='/Show/:id' component={ShowOne} /> 
          <Route exact path='/UpdatePage' component={UpdatePage} />
          <Route exact path='/AuthPage' component={AuthPage} />
          <Route exact path='/AddQuestions' component={AddQuestions} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/*' component={Page404} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
