import './index.css'
import HomeDemoCardDetails from '../HomeDemoCardDetails'

const cardDetails = [
  {
    id: 1,
    imageUrl:
      'https://i.ibb.co/thhwsVd/Screenshot-from-2021-11-25-19-26-27.png',
    description: 'Personalised learning app to learn anytime, anywhere',
    buttonText: 'Book a Free Class',
    topButtonText: 'Classes 4-10',
  },
  {
    id: 2,
    imageUrl:
      'https://i.ibb.co/6vMG8M6/Screenshot-from-2021-11-25-19-33-11.png',
    description:
      'Personalised online tutoring program with a unique two teacher model',
    buttonText: 'Book a Free Class',
    topButtonText: 'Classes 11-12',
  },
  {
    id: 3,
    imageUrl:
      'https://i.ibb.co/ySmTjTg/Screenshot-from-2021-11-25-19-33-24.png',
    description: 'Comprehensive learning program for JEE preparation',
    buttonText: 'Explore JEE',
    topButtonText: 'JEE/NEET',
  },
  {
    id: 4,
    imageUrl:
      'https://i.ibb.co/D5zTNfv/Screenshot-from-2021-11-25-19-33-34.png',
    description: 'Comprehensive learning program for NEET aspirants',
    buttonText: 'Explore NEET',
    topButtonText: 'JEE/NEET',
  },
]

const HomeDemoCard = () => (
  <ul className="list-container">
    {cardDetails.map(eachCard => (
      <HomeDemoCardDetails key={eachCard.id} cardData={eachCard} />
    ))}
  </ul>
)
export default HomeDemoCard