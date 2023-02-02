// Write your code here.
import './index.css'

const BannerCard = props => {
  const {bannerCardsDetails} = props
  const {headerText, description, className} = bannerCardsDetails
  return (
    <li className={`${className} card-container`}>
      <div className="content-container">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn">Show More</button>
      </div>
    </li>
  )
}

export default BannerCard
