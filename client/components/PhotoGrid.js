import React from 'react';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
      I'm the PhotoGrid  
      </div>
    )
  }
});

export default PhotoGrid;

// Video 3 : koden over
// Video X : koden under


// import React from 'react';
// import Photo from './Photo';

// const PhotoGrid = React.createClass({
//   render() {
//     return (
//       <div className="photo-grid">
//       {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
//       </div>
//     )
//   }
// });

// export default PhotoGrid;
