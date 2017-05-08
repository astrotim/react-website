import React from "react";
import { canUseDOM } from "exenv";

class Head extends React.Component {
  render() {
    return (
      <head>
        <meta name="viewport" content="width=device-width" />
        <title>{this.props.title}</title>
        <style>
          {`
          body {
            background-color: hotpink;
          }
          `}
        </style>
        <link
          is
          rel="preload"
          href="/style.css"
          as="style"
          onload="this.rel=&quot;stylesheet&quot;"
        />
      </head>
    );
  }
}

export default Head;
