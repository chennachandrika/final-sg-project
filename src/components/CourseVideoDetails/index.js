import './index.css'
import Header from '../Header'
import Context from '../../context/Context'

const thirdClassDetails= [
    {
        id:10,

    }
]

const CourseVideoDetails = () => (
    
    <Context.Consumer>
        {value => {
            const {isDarkTheme} = value 

            const courseDeatailsThemeBg = isDarkTheme ? "dark-bg-video-details" : "light-bg-video-details"
            const courseDetailsHeadingTheme = isDarkTheme ? "dark-heading-details" : "light-heading-details"
            const courseDetailsParagrapghTheme = isDarkTheme ? "dark-paragraph-details" : "light-paragraph-details"

            return(
                <>
                    <Header />
                    <div className={`course-video-details-container-bg ${courseDeatailsThemeBg}`}>
                        <h1 className={`course-video-details-heading ${courseDetailsHeadingTheme}`}>Welcome to Course!</h1>
                        <div className="paragraph-image-container">
                            <p className={`course-video-details-description ${courseDetailsParagrapghTheme}`}>CBSE Class 3 curriculum is divided into 4 major subjects such as English, Maths, EVS, Hindi. Students can also replace the Language Subject Hindi with any other Language as per their wish. In this article, we will provide you with all the necessary information regarding CBSE Class 3 Syllabus for English, Maths, EVS and Hindi. Read on to find out everything about Grade 3 Syllabus CBSE.</p>
                            <img src="https://i.ytimg.com/vi/ijY2GLKRAwk/maxresdefault.jpg" alt="3rd-class-syllabus" className="third-class-image" />
                        </div>
                    </div>
                </>
            )
        }}
    </Context.Consumer>
)
export default CourseVideoDetails