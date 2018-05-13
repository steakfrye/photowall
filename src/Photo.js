import React from 'react';

class Photo extends React.Component {
  render() {
    const post = this.props.post;
    return (
      <figure className="figure">
        <img src={post.imageLink} className="photo" />
        <figcaption>
          <p>
            {post.description}
          </p>
        </figcaption>
        <div className="button-container">
          <button className="remove-button"> Remove </button>
        </div>
      </figure>
    );
  }
}

export default Photo;
