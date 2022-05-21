import React from 'react';

class Button extends React.PureComponent {
  render() {
  return <button type={this.props.type} >{this.props.text}</button>
  }
}

export default Button;