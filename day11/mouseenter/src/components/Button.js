import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let buttonStyle = {
      marginLeft: this.props.pos[0],
      marginTop: this.props.pos[1],
      backgroundColor: this.props.col,
    };
    return (
      <div className="button-container">
        <button
          className="button"
          onMouseEnter={this.props.move}
          onClick={this.props.changeColor}
          style={buttonStyle}
        >
          CLICK ME
        </button>
      </div>
    );
  }
}

export default Button;
