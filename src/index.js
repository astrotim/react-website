import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {
  Router,
  RouterContext,
  match,
  createMemoryHistory
} from 'react-router';
import Routes from './routes';
import Main from './templates/Main';
import loadCSSPolyfill from './templates/loadCSSPolyfill.js';
import criticalCSS from './scss/critical.scss';
// import stats from './stats.json';
// console.log(stats.assets[1].name);

module.exports = function(locals, callback) {
  const hash = locals.webpackStats.hash;

  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  return match(
    {
      routes: Routes,
      location: location
    },
    function(error, redirectLocation, renderProps) {
      const html = ReactDOMServer.renderToStaticMarkup(
        <RouterContext {...renderProps} />
      );
      return callback(
        null,
        `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta name="viewport" content="width=device-width" />
<title>High Performance Static Site with React</title>
<style>
${criticalCSS.toString()}</style>
<link rel="preload" href="/style.${hash}.css" as="style" onload="this.rel='stylesheet'" />
<noscript><link rel="stylesheet" href="/style.${hash}.css" /></noscript>
${loadCSSPolyfill}
</head>
  ${html}
</html>
      `
      );
    }
  );
};
