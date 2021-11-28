import {Link} from 'react-router-dom'
import './index.css'
import Context from '../../context/Context'

const CourseVideoCard = props => {
    return(
        <Context.Consumer>
        {value => {
            const {isDarkTheme} = value 
            const {Coursesdata} = props 
            const {name,para,imageUrl,id} = Coursesdata
            const listItemTheme = isDarkTheme ? "dark-theme-li-item-course" :"light-theme-li-item-course"
            const courseVideoParaTheme = isDarkTheme ? "dark-video-para-course" : "light-video-para-course"
            const courseVideoNameTheme = isDarkTheme ? "dark-video-name-course" : "light-video-name-course"

            return(
                <li className={`list-item-container-course ${listItemTheme}`}>
                    <Link to={`/course-details/${id}`} className="nav-link">
                        <img src={imageUrl} alt={name} className="course-video-image" />
                        <h1 className={`course-video-name ${courseVideoNameTheme}`}>{name}</h1>
                        <p className={`course-video-para ${courseVideoParaTheme}`}>{para}</p>
                    </Link>
                </li>
            )
        }}
    </Context.Consumer>  
    )
      
}
export default CourseVideoCard