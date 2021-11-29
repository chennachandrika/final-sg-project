import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'
import Context from './context/Context'
import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import CoursesRoute from './components/CoursesRoute'
import CourseVideoDetails from './components/CourseVideoDetails'
import SavedVideos from './components/SavedVideos'
import RegisterForm from './components/RegisterForm'
import './App.css'


class App extends Component {
  state = {isDarkTheme: true,savedVideoList:[]}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addVideoItem = video => {
    const {savedVideoList} = this.state
    const videoObj = savedVideoList.find(
      eachVideoItem => eachVideoItem.id === video.id,
    )
    console.log(videoObj)

    if (videoObj){
      this.setState(prevState => ({
        savedVideoList:prevState.savedVideoList.map(eachVideoItem => {
          if (videoObj.id === eachVideoItem.id){
            return {...eachVideoItem}
          }
          return eachVideoItem
        }),
      }))
    }else{
      const updatedVideoList = [...savedVideoList,video]
      this.setState({savedVideoList:updatedVideoList})
    }
  }

  removeVideoItem = id => {
    const {savedVideoList} = this.state
    const updatedList = savedVideoList.filter(eachVideo => eachVideo.id !== id)
    this.setState({savedVideoList:updatedList})
  }

  render() {
    const {isDarkTheme,savedVideoList} = this.state
    return (
      <Context.Provider value={{isDarkTheme,savedVideoList, toggleTheme: this.toggleTheme,
      addVideoItem:this.addVideoItem,removeVideoItem:this.removeVideoItem}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginRoute} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/courses" component={CoursesRoute} />
          <Route path="/saved-videos" component={SavedVideos} />
          <Route path="/course-details/:id" component={CourseVideoDetails} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App