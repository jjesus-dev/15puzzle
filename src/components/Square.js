import React from "react";

class Square extends React.Component {
  render() {
    //console.log(this.props.value);
    return (
      <div className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </div>
    );
  }
}

export { Square };
