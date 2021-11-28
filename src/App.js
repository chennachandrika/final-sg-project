import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'
import Context from './context/Context'
import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import CoursesRoute from './components/CoursesRoute'
import CourseVideoDetails from './components/CourseVideoDetails'
import './App.css'


class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <Context.Provider value={{isDarkTheme, toggleTheme: this.toggleTheme}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginRoute} />
          <Route path="/courses" component={CoursesRoute} />
          <Route path="/course-details/:id" component={CourseVideoDetails} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App