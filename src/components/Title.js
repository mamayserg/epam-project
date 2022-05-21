import React from 'react';

class Title extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.title}`);
  }
}
export default Title