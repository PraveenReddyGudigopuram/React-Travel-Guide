/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Places from '../Places'
import './index.css'

class Home extends Component {
  state = {placesData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const updatedData = data.packages.map(eachItem => ({
      description: eachItem.description,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
    }))
    console.log(updatedData)
    this.setState({placesData: updatedData, isLoading: false})
  }

  renderSuccessView = () => {
    const {placesData} = this.state
    return (
      <>
        <ul className="list-container">
          {placesData.map(each => (
            <Places key={each.id} placeDetails={each} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <div className="main-container">
          <h1 className="heading">Travel Guide</h1>
          {isLoading ? (
            <div className="loader" testid="loader">
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={30}
                width={30}
                timeout={5000}
              />
            </div>
          ) : (
            this.renderSuccessView()
          )}
        </div>
      </>
    )
  }
}

export default Home
