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

module.exports = function(locals, callback) {
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
    html {
      font-family: sans-serif;
    }
    body {
      margin: 0;
      background-color: hotpink;
      color: white;
    }
    .masthead {
      text-align: center;
      padding: 1rem;
      background-color: hsla(0, 0%, 25%, 0.5);
    }
    .logo {
      width: 260px;
      height: 40px;
    }
    .nav {
      border-bottom: 1px solid #e9e9e9;
    }
    .nav ul {
      list-style: none;
      display: flex;
      justify-content: center;
      padding-left: 0;
    }
    .nav a {
      text-decoration: none;
      padding: .5rem 1rem;
    }
    main {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  </style>
  <link rel="preload" href="/style.css" as="style" onload="this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="/style.css" /></noscript>
  <script>
  /*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
  !function(a){"use strict";var b=function(b,c,d){function e(a){return h.body?a():void setTimeout(function(){e(a)})}function f(){i.addEventListener&&i.removeEventListener("load",f),i.media=d||"all"}var g,h=a.document,i=h.createElement("link");if(c)g=c;else{var j=(h.body||h.getElementsByTagName("head")[0]).childNodes;g=j[j.length-1]}var k=h.styleSheets;i.rel="stylesheet",i.href=b,i.media="only x",e(function(){g.parentNode.insertBefore(i,c?g:g.nextSibling)});var l=function(a){for(var b=i.href,c=k.length;c--;)if(k[c].href===b)return a();setTimeout(function(){l(a)})};return i.addEventListener&&i.addEventListener("load",f),i.onloadcssdefined=l,l(f),i};"undefined"!=typeof exports?exports.loadCSS=b:a.loadCSS=b}("undefined"!=typeof global?global:this);
  /*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
  !function(a){if(a.loadCSS){var b=loadCSS.relpreload={};if(b.support=function(){try{return a.document.createElement("link").relList.supports("preload")}catch(b){return!1}},b.poly=function(){for(var b=a.document.getElementsByTagName("link"),c=0;c<b.length;c++){var d=b[c];"preload"===d.rel&&"style"===d.getAttribute("as")&&(a.loadCSS(d.href,d,d.getAttribute("media")),d.rel=null)}},!b.support()){b.poly();var c=a.setInterval(b.poly,300);a.addEventListener&&a.addEventListener("load",function(){b.poly(),a.clearInterval(c)}),a.attachEvent&&a.attachEvent("onload",function(){a.clearInterval(c)})}}}(this);
  </script>
</head>
  ${html}
</html>
      `
      );
    }
  );
};
