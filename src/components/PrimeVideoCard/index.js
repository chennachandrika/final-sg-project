
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

const PrimeVideoCard = (props) => {
  return (
    <Context.Consumer>
      {(value) => {
        const { isDarkTheme } = value;
        const { primeCoursesdata } = props;
        const { title, videoUrl, thumbnailUrl, description,price } = primeCoursesdata;
        const listItemTheme = isDarkTheme ? "dark-theme-li-item" :"light-theme-li-item"
        const darkThemeVideoTitle = isDarkTheme ? "dark-video-title":"light-video-title"
        const videoThemeDescription = isDarkTheme ? "dark-video-description" : "light-video-description"
        const themePrice = isDarkTheme ? "dark-theme-price":"light-theme-price"
        
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
            <div className="price-container">
                <h1 className={`price ${themePrice}`}>Price:</h1>
                <h1 className={`price prices ${themePrice}`}>{price}</h1>
            </div>
            <button type="button" className="book-button-video-card">Book Now</button>
        </li>);
      }}
    </Context.Consumer>
  );
};
export default PrimeVideoCard;
