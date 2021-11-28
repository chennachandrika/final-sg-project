import {Link} from 'react-router-dom'
import Context from '../../context/Context'
import './index.css'

const SavedVideoItem = props => {
    return(
        <Context.Consumer>
        {value => {
            const {isDarkTheme,removeVideoItem} = value
            const {savedVideoItemDetails} = props 
            const {imgUrl,title,miniDescription,videoUrl,id} = savedVideoItemDetails
            const titleSavedItemHeading = isDarkTheme ? "dark-theme-title":"light-theme-title"
            const viewsThemeColor = isDarkTheme ? "dark-views-color" : "light-views-color"
            const onClickRemove = () => {
                removeVideoItem(id)
            }

            return(
                <li className="list-item-container-saved-item">
                    <a href={videoUrl} className="link-saved">
                        <img src={imgUrl} alt={title} className="saved-image" />
                    </a>
                    <div className="content-section">
                        <div className="column-align">
                            <h1 className={`title-heading-other-details ${titleSavedItemHeading}`}>{title}</h1>
                            <p className={`mini-description ${viewsThemeColor}`}>Description: {miniDescription}</p>
                            <button type="button" className="saved-video-button" onClick={onClickRemove}>Remove</button> 
                        </div>   
                    </div>
            </li>
            )
        }}
        </Context.Consumer>
    )
}

export default SavedVideoItem