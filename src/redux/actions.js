// const url = 'http://localhost:4001/players'


// export const addPlayer = (player) => {
//     return {
//         type: 'ADD_PLAYER',
//         value: player
//     }
// }

// export const removePlayer = (index) => {
//     return {
//         type: 'REMOVE_PLAYER',
//         value: index
//     }
// }


// export const fetchPlayers = () => {
//     return async (dispatch) => {
//         const response = await fetch(url);
//         const data = await response.json();
//         dispatch({
//             type: 'FETCH_PLAYERS',
//             value: data.Results
//         })
//     }

// }



// export const userInfo = (user) => {
//     return {
//         type: 'USER_INFO',
//         value: user
//     }

// }