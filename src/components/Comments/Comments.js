// import React, { Component } from 'react';

// class Comments extends Component {
//   // state = {  }
//   render() {
//     const { items } = this.props;
//     return (
//       <div>
//         <ul>
//           {items.map(comment => (
//             <li key={comment.id}>
//               {/* <p>{comment.}</p> */}
//               <p>comment</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Comments;

import React from 'react';

const Comments = ({ comments }) => (
  <div>
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <p>{comment.body}</p>
          <p>12/02/12</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Comments;
