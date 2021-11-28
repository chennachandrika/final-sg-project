import './index.css'
import Context from '../../context/Context'
import AdvantagesCard from '../AdvantagesCard'

const advantagesData = [
  {
    text: 'Conceptual clarity through visualisation',
    imageUrl:
      'https://i.ibb.co/47kwwM6/Screenshot-from-2021-11-25-21-31-08.png',
    id: 1,
  },
  {
    text: 'Personalised learning programs',
    imageUrl:
      'https://i.ibb.co/yBVhYKQ/Screenshot-from-2021-11-25-21-31-30.png',
    id: 2,
  },
  {
    text: 'Unmatched individual attention',
    imageUrl:
      'https://i.ibb.co/VLpdGpr/Screenshot-from-2021-11-25-21-31-44.png',
    id: 3,
  },
]

const HomeAdvantages = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeHeadingSectionDark = isDarkTheme
        ? 'dark-home-section-heading'
        : 'light-home-section-heading'

      return (
        <>
          <h1 className={`home-section-heading ${homeHeadingSectionDark}`}>
            Get the e-Education&apos;s advantage
          </h1>
          <ul className="list-container">
            {advantagesData.map(eachData => (
              <AdvantagesCard key={eachData.id} data={eachData} />
            ))}
          </ul>
        </>
      )
    }}
  </Context.Consumer>
)
export default HomeAdvantages