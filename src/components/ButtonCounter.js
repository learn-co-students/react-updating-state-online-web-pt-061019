import React, {Component} from'react'

class ButtonCounter extends Component {
  constructor() {
    super()
    //initial state has count set at 0
    this.state = {
      count : 0
    }
  }

  handleClick = () => {
    // let newCount = this.state.count + 1
    // this.setState({
    //   count : newCount
    // })

    this.setState(previousState => {
      return {
        count : previousState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default ButtonCounter