// import { combineReducers } from 'redux'

// const user = (state = "", action) => { 
//     switch(action.type) {
//         case 'USER_INFO':
//             return [action.value]
//         default:
//             return state
//     }
// }

// const player = (state = [], action) => {
//     switch(action.type) {
//         case 'FETCH_PLAYERS':
//             console.log(state)
//             return action.value;
//         case 'ADD_PLAYER':
//             console.log(state, action)
//             return [ ...state, action.value ]
//         case 'REMOVE_PLAYER':
//             const guy = [ ...state ]
//             guy.splice(action.value, 1)
//             return guy
//         default:
//             return state
//     }
// }




// export default combineReducers({player})











// reducers/rosterReducer.js

// const initialState = [];

// const rosterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'UPDATE_ROSTER':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default rosterReducer;
