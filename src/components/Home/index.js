import './index.css'
import Header from '../Header'
import Context from '../../context/Context'
import HomeDemoCard from '../HomeDemoCard'
import HomeAdvantages from '../HomeAdvantages'
import HomeFooter from '../HomeFooter'

const Home = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeDark = isDarkTheme ? 'dark-bg' : 'light-bg'
      const homeHeadingSectionDark = isDarkTheme
        ? 'dark-home-section-heading'
        : 'light-home-section-heading'
      const homeParaSectionDark = isDarkTheme
        ? 'dark-home-section-para'
        : 'light-home-section-para'

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
            <HomeFooter />
          </div>
        </>
      )
    }}
  </Context.Consumer>
)
export default Home