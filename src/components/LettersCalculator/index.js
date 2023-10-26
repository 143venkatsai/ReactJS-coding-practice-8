import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeInput = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="calculator-container">
          <div className="left-part">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="letter" className="para">
              Enter the phrase
            </label>
            <input
              type="text"
              id="letter"
              className="input-element"
              placeholder="Enter the phrase"
              onChange={this.onChangeInput}
            />
            <p className="count-section">No.of letters: {count.length}</p>
          </div>
          <div className="right-part">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
