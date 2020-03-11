import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
    };
  }
 
  handleClick = () => {
    // This object will get merged with the current state. When the state has been updated, our component re-renders automatically.
    this.setState({
        hasBeenClicked: true
      }, () => console.log(this.state.hasBeenClicked))
    // If we want to access our new state after it has been updated, we can optionally add a callback as a second argument to the this.setState() function. This callback will fire once the state has been updated, ensuring that this.state is now the new, shiny updated state

    //   State changes, however instant they might appear, happen asynchronously
    //   console.log(this.state.hasBeenClicked);
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
 