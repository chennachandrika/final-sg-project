import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
// import icons
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import './index.css'

// import local components
import Context from '../../context/Context'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderButtonsContainer,
  HeaderButton,
  ProfileButton,
  ProfileImage,
  LogoutButton,
  LogoutMobileIcon,
  IconImage
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const iconColor = isDarkTheme ? '#ffffff' : '#070705'
         const courseHeadingThemeColor = isDarkTheme ? "darkCourneName":"lightCourneName"

        return (
          <>
            <HeaderContainer dark={isDarkTheme}>
            <div className="div-container"> 
            <Link to="/" className="nav-link">
              <HeaderLogo
                src={
                  isDarkTheme
                    ? 'https://i.ibb.co/gRZ1FmZ/letter-e-education-logo-design-element-logo-design-business-card-282939-257-copy.jpg'
                    : 'https://i.ibb.co/QcTcvD5/letter-e-education-logo-design-element-logo-design-business-card-282939-257.jpg'
                }
                alt="website logo"
              />
            </Link>
            <Link to="/courses"> <h1 className={`course-heading ${courseHeadingThemeColor}`}>Courses</h1> </Link>
            </div>
            <HeaderButtonsContainer>
              <HeaderButton onClick={toggleTheme} data-testid="theme">
                {isDarkTheme ? (
                  <FiSun size={26} color={iconColor} />
                ) : (
                  <FaMoon size={26} color={iconColor} />
                )}
              </HeaderButton>

              <ProfileButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileButton>
              <LogoutButton type="button" onClick={onClickLogout}>
                Logout
              </LogoutButton>
              <LogoutMobileIcon type="button" onClick={onClickLogout}>
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                  alt="logout-image"
                />
              </LogoutMobileIcon>
            </HeaderButtonsContainer>
            
          </HeaderContainer>
          <hr className="hr-line" />
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(Header)