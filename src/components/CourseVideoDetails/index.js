import "./index.css";
import Header from "../Header";
import Context from "../../context/Context";
import { useParams } from "react-router-dom";
import CourseIdCardDetails from '../CourseIdCardDetails'
import CourseOtherVideoDetails from '../CourseOtherVideoDetails'

const thirdClassDetails = [
  {
    id: "3rd-class-videos",
    syllabusDetails: [
      {
        id: 10,
        courseImageUrl:"https://i.ytimg.com/vi/ijY2GLKRAwk/maxresdefault.jpg",
        courseDescription:
          "CBSE Class 3 curriculum is divided into 4 major subjects such as English, Maths, EVS, Hindi. Students can also replace the Language Subject Hindi with any other Language as per their wish. In this article, we will provide you with all the necessary information regarding CBSE Class 3 Syllabus for English, Maths, EVS and Hindi. Read on to find out everything about Grade 3 Syllabus CBSE."
      },
    ],
    otherDetails:[
        {
            id:101,
            title:"It's story telling time to learn English",
            imgUrl:"https://i.ytimg.com/vi/Iyqatm4ACOw/maxresdefault.jpg",
            videoUrl:"https://www.youtube.com/watch?v=Iyqatm4ACOw",
            miniDescription:"Max reads more than anyone he knows. He loves to read during all of his free time. His friends tease him because he would rather read than play video games, but his parents and his teachers are proud of him. They say reading is important, and it will help him learn about the world around him. They also tell him it is a good habit to read on a regular basis. ",
            likesCount:"5,000",
            dislikesCount:"578",
            views:"10,000",
        },
        {
            id:102,
            title:"Introduction to Environmental Science",
            imgUrl:"https://i.ytimg.com/vi/17CHq38LmQM/maxresdefault.jpg",
            videoUrl:"https://www.youtube.com/watch?v=17CHq38LmQM",
            miniDescription:"One day Max was reading a magazine article about volcanoes. He told his friends all about volcanoes and what causes them to erupt. The very next week, his class was assigned a science project about volcanoes. Guess who everyone wanted in their project group? Max’s friends weren’t teasing him anymore. ",
            likesCount:"4,576",
            dislikesCount:"345",
            views:"12,312",
        },
        {
            id:103,
            title:"Mathematics Introduction",
            imgUrl:"https://i.ytimg.com/vi/gjqxhtjyfC4/maxresdefault.jpg",
            videoUrl:"https://www.youtube.com/watch?v=gjqxhtjyfC4",
            miniDescription:"The group met at Anna’s house that night to organize the information and decide what they wanted to put on the poster board. They all asked Max what he thought was most important. Then they decided on the following together.",
            likesCount:"5,954",
            dislikesCount:"1,235",
            views:"21,345",
        },
    ]
  },
  {
    id: "9th-class-videos",
    syllabusDetails: [
      {
        id: 30,
        courseImageUrl:"https://i.ytimg.com/vi/9IkoycQWJQA/maxresdefault.jpg",
        courseDescription:"The following topics taught in Class 9 are also included in the syllabus of the entrance exams: Mathematics: Coordinate Geometry, Surface Areas and Volumes, Statistics, Probability. Physics: Laws of Motion, Force, Gravitation, Work and Energy, Sound. Chemistry: Atoms and Molecules, Structure of Atom."    
      },
    ],
    otherDetails:[
        {
            id:201,
            title:"Introduction to Number System",
            imgUrl:"https://i.ytimg.com/vi/9PBYIR-dIHI/maxresdefault.jpg",
            videoUrl:"https://www.youtube.com/watch?v=9PBYIR-dIHI",
            miniDescription:"Introduction to number system class 9. The collection of numbers is called the number system. These numbers are of different types such as natural numbers, whole numbers, integers, rational numbers and irrational numbers. ... p/q form, where p and q are integers and q is not zero.",
            likesCount:"4,522",
            dislikesCount:"678",
            views:"31,212",
        },
        {
            id:202,
            title:"Introduction to Natural Science",
            imgUrl:"https://i.ytimg.com/vi/0g4ztrrWj7M/maxresdefault.jpg",
            videoUrl:"https://www.youtube.com/watch?v=0g4ztrrWj7M",
            miniDescription:"Science is the study of the nature and behaviour of natural things and the knowledge that we obtain about them. ... A science is a particular branch of science such as physics, chemistry, or biology.",
            likesCount:"32,412",
            dislikesCount:"4,231",
            views:"534,342",
        },
        {
            id:203,
            title:"",
            imgUrl:"https://i.ytimg.com/vi/SlkIKCMt-Fs/maxresdefault.jpg",
            videoUrl:"https://www.youtube.com/watch?v=SlkIKCMt-Fs",
            miniDescription:"a) Preamble: It is an introductory statement in a constitution which states the reasons and guiding values of the constitution. b) Clause: Clause is a distinct section of a document. ... It is a rough sketch of the constitution.",
            likesCount:"23,331",
            dislikesCount:"7,654",
            views:"51,533",
        },
    ]
  },
  {
    id: "jee-videos",
    syllabusDetails: [
      {
        id: 50,
        courseImageUrl:"https://i.ytimg.com/vi/JxLHyKUOd6c/maxresdefault.jpg",
        courseDescription:"Up until 2018, the JEE exam paper-1 is of three hours duration and consists of thirty single choice questions in each of the three subjects (physics, chemistry and maths). 4 marks are awarded for correct answers and 1 mark is deducted for incorrect answers. Students taking this exam are usually in the age group 18-20."    
      },
    ],
    otherDetails:[
        {
            id:301,
            title:"Introduction to arithmetic, geometric means between two given numbers.",
            imgUrl:"https://i.ytimg.com/vi/ME7WSIGCa8I/maxresdefault.jpg",
            videoUrl:"https://www.youtube.com/watch?v=ME7WSIGCa8I",
            miniDescription:"Trigonometry is hard because it deliberately makes difficult what is at heart easy. We know trig is about right triangles, and right triangles are about the Pythagorean Theorem. About the simplest math we can write is When this is the Pythagorean Theorem, we're referring to a right isosceles triangle.",
            likesCount:"81,367",
            dislikesCount:"9,675",
            views:"234,129",
        },
        {
            id:302,
            title:"JEE Physics lessons",
            imgUrl:"https://i.ytimg.com/vi/kxYryCFCAbA/maxresdefault.jpg",
            videoUrl:"https://www.youtube.com/watch?v=CAMNeWUdv_U",
            miniDescription:"Physics explains the laws of nature; it explains the mechanisms behind phenomena. It concerns itself with matter and motion; with heat, light, sound, electricity, magnetism, radiation and nuclear and atomic energy.            ",
            likesCount:"56,897",
            dislikesCount:"12,673",
            views:"12,312",
        },
        {
            id:303,
            title:"JEE Chemistry lessons",
            imgUrl:"https://i.ytimg.com/vi/T_VQQZDZAwY/maxresdefault.jpg",
            videoUrl:"https://www.youtube.com/watch?v=T_VQQZDZAwY",
            miniDescription:"IIT JEE Chemistry Study Material – Chemistry is one of the most important and scoring subjects for JEE. ... There are in fact three branches in chemistry which are physical chemistry, inorganic chemistry and organic chemistry. ",
            likesCount:"35,954",
            dislikesCount:"5,235",
            views:"91,345",
        },
    ]
  }
];

const CourseVideoDetails = () => {
  const currentCourseId = useParams().id;
  console.log(currentCourseId);
  const currentCourseDetails = thirdClassDetails.filter(
    (value) => value.id === currentCourseId
  );
  //console.log(currentCourseDetails);
  //console.log(currentCourseDetails[0].syllabusDetails);
  console.log(currentCourseDetails[0].otherDetails);
  return (
    <Context.Consumer>
      {(value) => {
        const { isDarkTheme } = value;

        const courseDeatailsThemeBg = isDarkTheme
          ? "dark-bg-video-details"
          : "light-bg-video-details";
        const courseDetailsHeadingTheme = isDarkTheme
          ? "dark-heading-details"
          : "light-heading-details";
        
        return (
          <>
            <Header />
            <div
              className={`course-video-details-container-bg ${courseDeatailsThemeBg}`}
            >
              <h1
                className={`course-video-details-heading ${courseDetailsHeadingTheme}`}
              >
                Welcome to Course!
              </h1>
              {currentCourseDetails[0].syllabusDetails.map(each => (
                  <CourseIdCardDetails key={each.id} courseData = {each}/>
              ))}

              <hr className="hr-line" />

              <ul className="other-details-courses-container">
                    {currentCourseDetails[0].otherDetails.map(each => (
                        <CourseOtherVideoDetails key={each.id} otherVideoDetails={each} />
                    ))}
              </ul>
              
            </div>
          </>
        );
      }}
    </Context.Consumer>
  );
};
export default CourseVideoDetails;


