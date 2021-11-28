import Header from "../Header";
import Context from "../../context/Context";
import SavedVideoListView from '../SavedVideoListView'
import './index.css'

const SavedVideos = () => (
    <Context.Consumer>
        {value => {
            const {isDarkTheme,savedVideoList} = value 
            const showEmptyView = savedVideoList.length === 0
            const savedVideosBGTheme = isDarkTheme ? "dark-bg-theme-saved" : "light-bg-theme-saved"
            const SavedVideosHeading = isDarkTheme ? "dark-saved-video-section-heading":"light-saved-video-section-heading"
            const SavedVideosPara = isDarkTheme ? "dark-saved-video-section-para":"light-saved-video-section-para"

            return(
                <>
                    <Header />
                    <div className = {`saved-videos-theme-container ${savedVideosBGTheme}`}>
                        {showEmptyView ? (
                            <div className="show-empty-container">
                                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" alt="no-saved-videos" className="no-saved-video-image" />
                                <h1 className={`saved-video-section-heading ${SavedVideosHeading}`}>No saved videos Found</h1>
                                <p className={`saved-video-section-para-heading ${SavedVideosPara}`}>You can save your videos while watching them.</p>
                            </div>    
                        ):(
                            <div className="saved-videos-theme-container">
                                <h1 className={`saved-video-section-heading heading ${SavedVideosHeading}`}>My Saved Videos</h1>
                                <SavedVideoListView />
                            </div>    
                        )}
                    </div>
                </>
            )
        }}
    </Context.Consumer>
)
export default SavedVideos