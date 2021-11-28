import Context from '../../context/Context'
import SavedVideoItem from '../SavedVideoItem'
import './index.css'

const SavedVideoListView = () => (
    <Context.Consumer>
        {value => {
            const {savedVideoList} = value

            return(
                <ul className="saved-list-view-bg-container">
                    {savedVideoList.map(eachVideo => (
                        <SavedVideoItem key={eachVideo.id} savedVideoItemDetails={eachVideo} />
                    ))}
                </ul>
            )
        }}
    </Context.Consumer>
)
export default SavedVideoListView

