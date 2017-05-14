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

class Articles extends React.Component {
  render() {
    return (
      <main>
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

export default Articles;
