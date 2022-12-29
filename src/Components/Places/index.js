import './index.css'

const Places = props => {
  const {placeDetails} = props
  const {description, name, imageUrl} = placeDetails

  return (
    <>
      <li className="list-item">
        <img src={`${imageUrl}`} alt={`${name}`} className="places-img" />
        <div className="place-desc">
          <h1 className="place-name">{name}</h1>
          <p className="desc">{description}</p>
        </div>
      </li>
    </>
  )
}

export default Places
