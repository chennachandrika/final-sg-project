import { Component } from "react"
import {AiFillLike,AiFillDislike} from "react-icons/ai"
import {BiListPlus} from "react-icons/bi"
import './index.css'
import Context from '../../context/Context'

class CourseOtherVideoDetails extends Component  {
    state = {likeActive:false,dislikeActive:false,savedActive:false}

    onClickLike = () => {
        this.setState(prevState => ({
            likeActive:!prevState.likeActive,
            dislikeActive:false,
        }))
    }

    onClickDislike = () => {
        this.setState(prevState => ({
            dislikeActive:!prevState.dislikeActive,
            likeActive:false,
        }))
    }

    onClickSaveVideo = () => {
        this.setState(prevState => ({
            savedActive:!prevState.savedActive,
            dislikeActive:false,
            likeActive:false,
        }))
    }

    render(){
        return(
            <Context.Consumer>
                {value => {
                    const {isDarkTheme,addVideoItem} = value 
                    const onAddToSavedList = () => {
                        addVideoItem({...otherVideoDetails})
                    }
                    const {likeActive,dislikeActive,savedActive}  = this.state
                    const {otherVideoDetails} = this.props
                    const {title,imgUrl,videoUrl,miniDescription,likesCount,dislikesCount,views} = otherVideoDetails
                    const titleTheme = isDarkTheme ? "dark-theme-title":"light-theme-title"
                    const viewsThemeColor = isDarkTheme ? "dark-views-color" : "light-views-color"
                    const likeColor = likeActive ? "#2563eb" : "#64748b"
                    const dislikeColor = dislikeActive ? "#2563eb" : "#64748b"
                    const savedText = savedActive ? "Saved" : "Save"
    
                    return(
                        <li className="other-video-details-list-item-container">
                            <a href={videoUrl} target="_blank" className="link">
                                <img src={imgUrl} alt="video-details-thumbnail" className="video-image-details" />
                            </a>
                            <h1 className={`title-heading-other-details ${titleTheme}`}>{title}</h1>
                            <p className={`mini-description ${viewsThemeColor}`}>Description: {miniDescription}</p>
    
                            <div className="row-container-for-meta">
                                <div className="date-and-views-container">
                                    <p className={`views-desciption ${viewsThemeColor}`}>{views} views <span className="span-element"></span></p>
                                    <p className={`views-desciption ${viewsThemeColor}`}>{likesCount} Likes<span className="span-element"></span></p>
                                    <p className={`views-desciption ${viewsThemeColor}`}>{dislikesCount} Dislikes</p>
                                </div>
                                <div className="likes-dislikes-container">
                                    <div className="like-button-container">
                                        <AiFillLike size={20} onClick={this.onClickLike} className="icon" color={likeColor}/>
                                        <p className={`views-desciption ${viewsThemeColor}`}>Like</p>    
                                    </div>
                                    <div className="like-button-container">
                                        <AiFillDislike size={20} onClick={this.onClickDislike} className="icon" color={dislikeColor} />
                                        <p className={`views-desciption ${viewsThemeColor}`}>Dislike</p>    
                                    </div>
                                    <div className="like-button-container">
                                        <button type="button" onClick={onAddToSavedList} className="save-button">
                                            <BiListPlus size={20} onClick={this.onClickSaveVideo} className="icon"  />
                                        </button>    
                                        <p className={`views-desciption ${viewsThemeColor}`}>{savedText}</p>    
                                    </div>
                                </div>    
                            </div>
    
                            <hr className="hr-line"/>
                            
                        </li>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default CourseOtherVideoDetails