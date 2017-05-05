import React from 'react';
import Head from '../components/Head';
import Nav from '../components/Nav';
import Masthead from '../components/Masthead';

import styles from './templates.scss';

class Main extends React.Component {
  render() {
    return (
      <html lang="en-AU">
        <Head title="Static React" />
        <body>
          <Masthead />
          <Nav />
          <div className="main-layout">
            <main>
              {this.props.children}
            </main>
          </div>
        </body>
      </html>
    );
  }
}

export default Main;
