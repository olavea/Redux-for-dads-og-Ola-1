// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state
function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;


------------------------
// Video 7 : koden over
// Video 9 : koden under
------------------------


// function posts(state = [], action) {
//   console.log("The post will change");
//   console.log(state, action);
//   return state;
// }

// export default posts;




------------------------
// Video 9 : koden over
// Video X : koden under
------------------------

// function posts(state = [], action) {
//     switch(action.type) {
//       case 'INCREMENT_LIKES' :
//         //console.log("Incrementing Likes!!");
//         const i = action.index;
//         return [
//           ...state.slice(0,i), // before the one we are updating
//           {...state[i], likes: state[i].likes + 1},
//           ...state.slice(i + 1), // after the one we are updating
//         ]
//       default:
//         return state;
//     }
//   }
  
//   export default posts;

  
------------------------
// Video X : koden over
// Video X : koden under
------------------------
