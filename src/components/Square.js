import React from "react";

class Square extends React.Component {
  render() {
    console.log(this.props.value);
    return <div>{this.props.value}</div>;
  }
}

export { Square };
