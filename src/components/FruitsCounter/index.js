// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrement = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="head">
            Bob ate <span className="num">{count1}</span> mangoes{' '}
            <span className="num">{count2}</span> bananas
          </h1>
          <div className="image-cont">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="images"
                alt="mango"
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="images"
                alt="banana"
              />
            </div>
          </div>
          <div className="buttons-container">
            <div className="buttons-container">
              <button
                className="buttons-1 buttons-edit"
                type="button"
                onClick={this.onIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div>
              <button
                className="buttons-1 buttons-edit"
                type="button"
                onClick={this.onDecrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
