import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Header from "../Header";
import Context from "../../context/Context";
import HomeDemoCard from "../HomeDemoCard";
import HomeAdvantages from "../HomeAdvantages";
//import HomeCarouselCard from '../HomeCarouselCard'
import HomeFooter from "../HomeFooter";
import Cookies from "js-cookie";

const carouselData = [
  {
    id: 1,
    title: "e-Education helped Manas pick up his learning pace in Science.",
    name: "Father of Manas",
    descriptionPara: "Class 9 | Bengalore",
    imageUrl: "https://image.pngaaa.com/445/5647445-middle.png"
  },
  {
    id: 2,
    title:
      "e-Education videos have helped me understand Math better and be confident.",
    name: "Harsitha",
    descriptionPara: "Class 4 | Mumbai",
    imageUrl:
      "https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png"
  },
  {
    id: 3,
    title:
      "I can balance my studies and sports well with e-Education - The learning App.",
    name: "Gagana",
    descriptionPara: "Class 9 | Hyderabad",
    imageUrl:
      "https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png"
  },
  {
    id: 4,
    title:
      "e-Education is best App for my daughter to strengthen her academics.",
    name: "Mother of Shirisha",
    descriptionPara: "Class 8 | Bengalore",
    imageUrl:
      "https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png"
  },
  {
    id: 5,
    title: "My son understands Maths better with e-Education App",
    name: "Father of Archana",
    descriptionPara: "Class 10 | Goa",
    imageUrl: "https://image.pngaaa.com/445/5647445-middle.png"
  },
  {
    id: 6,
    title:
      "e-Education helped to understand concepts through real-life examples",
    name: "Chandrika",
    descriptionPara: "Class 12 | Kadapa",
    imageUrl:
      "https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png"
  },
  {
    id: 7,
    title:
      "Through e-Education I love the use of graphical videos in her learning sessions. ",
    name: "Fazil",
    descriptionPara: "Class 3 | Guntur",
    imageUrl: "https://image.pngaaa.com/445/5647445-middle.png"
  }
];

const Home = () => (
  <Context.Consumer>
    {(value) => {
      const { isDarkTheme, usersList } = value;
      const homeDark = isDarkTheme ? "dark-bg" : "light-bg";
      const homeHeadingSectionDark = isDarkTheme
        ? "dark-home-section-heading"
        : "light-home-section-heading";
      const homeParaSectionDark = isDarkTheme
        ? "dark-home-section-para"
        : "light-home-section-para";
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slick-dots"
      };
      // Cookies.remove("jwt_token");
      // console.log(usersList);
      return (
        <>
          <Header />

          <div className={`home-bg-container ${homeDark}`}>
            <div className="heading-para-container">
              <h1 className={`home-section-heading ${homeHeadingSectionDark}`}>
                Comprehensive learning programs & classes for all students
              </h1>
              <p className={`home-section-para-heading ${homeParaSectionDark}`}>
                Become lifelong learners with India&apos;s best teachers,
                engaging video lessons and personalised learning journeys
              </p>
            </div>
            <HomeDemoCard />
            <HomeAdvantages />
            {/*<Slider {...settings}>
              {carouselData.map(each => (
                <HomeCarouselCard key={each.id} carouselDetails={each} />
              ))}
              </Slider> */}
            <HomeFooter />
          </div>
        </>
      );
    }}
  </Context.Consumer>
);
export default Home;
