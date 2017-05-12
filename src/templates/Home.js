import React from 'react';
import posts from '../posts.json';

const Post = props => {
  function content() {
    return {
      __html: props.content
    };
  }
  return (
    <article>
      <h2>{props.title}</h2>
      <p dangerouslySetInnerHTML={content()} />
    </article>
  );
};

class Home extends React.Component {
  render() {
    return (
      <main>
        <h1>Critical CSS</h1>
        <p>
          I‘m a front end web developer at the ABC, based in Brisbane. I am currently working on a project to build a new platform for the front end with server-rendered React.
        </p>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              title={post.title.rendered}
              content={post.content.rendered}
            />
          );
        })}
      </main>
    );
  }
}

export default Home;
