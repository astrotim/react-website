import React from 'react';

class Head extends React.Component {
  render() {
    return (
      <head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/assets/lib/css/normalize.css"/>
        <link rel="stylesheet" href="/style.css"/>
      </head>
    )
  }
}

export default Head;