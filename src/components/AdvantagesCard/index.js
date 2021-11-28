import './index.css'
import Context from '../../context/Context'

const AdvantagesCard = props => {
  const {data} = props
  const {text, imageUrl} = data

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value
        const homeParaSectionDark = isDarkTheme
          ? 'dark-home-section-paraa'
          : 'light-home-section-paraa'

        return (
          <li className="list-item-container-advantage">
            <img src={imageUrl} alt="advantages" className="imagee" />
            <p className={`home-section-paraa-heading ${homeParaSectionDark}`}>
              {text}
            </p>
          </li>
        )
      }}
    </Context.Consumer>
  )
}
export default AdvantagesCard