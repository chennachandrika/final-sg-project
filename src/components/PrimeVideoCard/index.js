import {Component} from 'react'
import PopUp from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import Context from "../../context/Context";
import "./index.css";
import {
    Container,
    Thumbnail,
    ModalContainer,
    CloseButton,
    PlayerContainer,
  } from './styledComponents'

class PrimeVideoCard  extends Component {
  state = {username: '', password: '',showMsg:false,showUserError:false,showPasswordError:false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
 }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickBookNow = () => {
    const {username,password} = this.state
    if(username === ""){
      this.setState({showUserError:true})
    }else if (username !== ""){
      this.setState({showUserError:false})
    }else if (password === ""){
      this.setState({showPasswordError:true})
    }else if (password !== ""){
      this.setState({showPasswordError:false})
    }else{
      this.setState({showMsg:true})
    }
    console.log('booking... a course')
  }


  render(){
    const {username,password,showMsg,showPasswordError,showUserError} = this.state
    return (
      <Context.Consumer>
        {(value) => {
          const { isDarkTheme } = value;
          const { primeCoursesdata } = this.props;
          const { title, videoUrl, thumbnailUrl, description,price } = primeCoursesdata;
          const listItemTheme = isDarkTheme ? "dark-theme-li-item" :"light-theme-li-item"
          const darkThemeVideoTitle = isDarkTheme ? "dark-video-title":"light-video-title"
          const videoThemeDescription = isDarkTheme ? "dark-video-description" : "light-video-description"
          // const themePrice = isDarkTheme ? "dark-theme-price":"light-theme-price"

          return( <li className={`list-item-container ${listItemTheme}`}>
              <h1 className={`prime-video-title ${darkThemeVideoTitle}`}>{title}</h1>
              <Container>
                  <PopUp
                      modal
                      trigger={<Thumbnail src={thumbnailUrl} alt="thumbnail" />}
                      className="popup-container"
                  >
                      {close => (
                      <ModalContainer>
                          <CloseButton
                          type="button"
                          data-testid="closeButton"
                          onClick={() => close()}
                          >
                          <IoMdClose size={20} color="#231f20" />
                          </CloseButton>
                          <PlayerContainer>
                          <ReactPlayer url={videoUrl} />
                          </PlayerContainer>
                      </ModalContainer>
                      )}
                  </PopUp>
              </Container>
              <p className={`video-description ${videoThemeDescription}`}>{description}</p>
              {/*<div className="price-container">
                  <h1 className={`price ${themePrice}`}>Price:</h1>
                  <h1 className={`price prices ${themePrice}`}>{price}</h1>
              </div>*/}

              <Container>
              <PopUp
                modal
                trigger={<button type="button" className="book-button-video-card" >Enroll Now</button>}
                className="popup-container"
              >
                {close => (
                  <ModalContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      <IoMdClose size={20} color="#231f20" />
                    </CloseButton>
                    <div className="booking-container-popup">
                        <label htmlFor="username" className={`label-element darkThemeVideoTitle`}>Username</label>
                        <input id="username" value={username}
                          onChange={this.onChangeUsername}
                          placeholder="Username" className="input-element"/>
                        {showUserError && <p className="invalid-error">Invalid Username*</p>}  
                        <label htmlFor="password" className={`label-element darkThemeVideoTitle`}>Password</label>
                        <input id="password" value={password}
                          onChange={this.onChangePassword}
                          placeholder="Password" className="input-element" type="password"/>  
                          {showPasswordError && <p className="invalid-error">Invalid Password*</p>}  
                          <button type="button" onClick={this.onClickBookNow} className="book-button-video-card enroll-button">Enroll Now</button>
                          {showMsg && <p>Successfully booked.....</p>}
                    </div>
                  </ModalContainer>
                )}
              </PopUp>
            </Container>
              
          </li>);
        }}
      </Context.Consumer>
    );
  }
};
export default PrimeVideoCard;
