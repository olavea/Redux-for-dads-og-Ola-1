import React from 'react';

const Single = React.createClass({
  render() {
    return (
      <div className="single-photo">
      I'm the Single  
      </div>
    )
  }
});

export default Single;



// Video 3 : koden over
// Video X : koden under

// const Single = React.createClass({
//   render() {
//     const { postId } = this.props.params;

//     const i = this.props.posts.findIndex((post) => post.code === postId);
//     const post = this.props.posts[i];
//     console.log(i);

//     // const postComments = this.props.comments[postId] || [];

//     return (
//       <div className="single-photo">
//         <Photo i={i} post={post} {...this.props} />
        
//       </div>
//     )
//   }
// });

// export default Single;
