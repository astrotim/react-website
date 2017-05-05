import React from 'react';

class Head extends React.Component {
  render() {
    return (
      <head>
        <meta name="viewport" content="width=device-width" />
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
    );
  }
}

export default Head;
