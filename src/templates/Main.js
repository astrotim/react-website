import React from 'react';
import Head from '../components/Head';
import Nav from '../components/Nav';
import Masthead from '../components/Masthead';

import styles from '../scss/style.scss';

class Main extends React.Component {
  render() {
    return (
      <body>
        <Masthead />
        <Nav />
        <div className="main-layout">
          <main>
            {this.props.children}
          </main>
        </div>
      </body>
    );
  }
}

export default Main;
