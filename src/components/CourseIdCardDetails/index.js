import './index.css'
import Context from '../../context/Context'

const CourseIdCardDetails = props => {
    return(
        <Context.Consumer>
        {value => {
            const {isDarkTheme} = value 
            const {courseData} = props 
    const {courseDescription,courseImageUrl} = courseData
    const courseDetailsParagrapghTheme = isDarkTheme
          ? "dark-paragraph-details"
          : "light-paragraph-details";


    return(
        <div className="paragraph-image-container">
                  <p
                    className={`course-video-details-description ${courseDetailsParagrapghTheme}`}
                  >
                    {courseDescription}
                  </p>
                  <img
                    src={courseImageUrl}
                    alt="3rd-class-syllabus"
                    className="third-class-image"
                  />
                </div>
    )
        }}
    </Context.Consumer>
    )
}
export default CourseIdCardDetails