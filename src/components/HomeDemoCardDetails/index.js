import './index.css'

const HomeDemoCardDetails = props => {
  const {cardData} = props
  const {imageUrl, description, buttonText, topButtonText} = cardData

  return (
    <li className="home-demo-card-details-container">
      <button type="button" className="top-button-text">
        {topButtonText}
      </button>
      <div className="row-container">
        <div className="row-list-container">
          <img src={imageUrl} alt="learning" className="image" />
          <div className="col-container">
            <p className="description">{description}</p>
            <button type="button" className="button-text">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
export default HomeDemoCardDetails