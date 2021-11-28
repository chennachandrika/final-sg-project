import './index.css'
import Context from '../../context/Context'

const HomeCarouselCard = props => {
    return(
        <Context.Consumer>
            {value => {
                const {isDarkTheme} = value 
                const {carouselDetails} = props
                const {title,name,descriptionPara,imageUrl} = carouselDetails
                const avatharThemeDescription = isDarkTheme ? "dark-description-avatar":"light-description-avatar"
                const avatharThemeName = isDarkTheme ? "dark-name-avatar":"light-name-avatar"

                return(
                    <div className="home-carousel-card-container">
                        <img src={imageUrl} alt={name} className="avatar-image "/>
                        <p className={`avatar-description ${avatharThemeDescription}`}>{title}</p>
                        <h1 className={`avatar-name ${avatharThemeName}`}>{name}</h1>
                        <p className={`avatar-description ${avatharThemeDescription}`}>{descriptionPara}</p>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}
export default HomeCarouselCard