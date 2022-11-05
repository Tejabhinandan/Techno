import React, { Component } from "react";

let WithCounter = (WrappedComponent, value = 1) => {
  class EnhancedComponent extends Component {
    state = {
      count: 0,
    };
    increamentCount = () => {
      this.setState({
        count: this.state.count + value,
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increamentCount={this.increamentCount}
          // very important to add the privioussly passed props
          // to the returned component
          {...this.props}
        />
      );
    }
  }
  return EnhancedComponent;
};
export default WithCounter;
