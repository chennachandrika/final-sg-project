import styled from 'styled-components'

export default null

export const HeaderContainer = styled.nav`
  padding: 10px 20px;
  margin: -30px -26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: ${props => (props.dark ? '#212121' : '#FFFFFF')};
  @media (min-width: 768px) {
    padding: 18px 24px;
    
  }
`
export const HeaderLogo = styled.img`
  width: 40px;
  @media (min-width: 768px) {
    width: 60px;
    margin-top:20px;
    margin-left:80px;
  }
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 0 0 20px;
  padding: 0;
`
export const LinksButton = styled(HeaderButton)`
  @media (min-width: 768px) {
    display: none;
  }
`

export const LinksPopupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark ? '#212121' : '#FFFFFF')};
`
export const CloseButton = styled(HeaderButton)`
  margin: 40px 30px;
  align-self: flex-end;
`
export const LinksContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`
export const ProfileButton = styled(HeaderButton)`
  width: 30px;
  height: 30px;
`
export const ProfileImage = styled.img`
  width: 100%;
`
export const LogoutButton = styled.button`
  background-color: blue;
  color: white;
  border-radius: 4px;
  height: 30px;
  width: 90px;
  border-width: 0;
  margin-left: 20px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  margin-right:50px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const LogoutMobileIcon = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-left: 18px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const IconImage = styled.img`
  width: 30px;
`