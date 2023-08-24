// import {useState, useEffect} from 'react'
// import axios from 'axios'
// import cookie from 'cookie'

// function Test() {
//     const [users, setUsers] = useState([])
//     const cookies = cookie.parse(document.cookie)

// const getUsers = async () => {
//     await axios.get('http://localhost:4001/users')
//     .then((response) => {
//         console.log(response.data)
//         setUsers(response.data)
//     })
// }

// const getUsersHeaders = async () => {
//     await axios.get('http://localhost:4001/users', 
//     {
//         headers: {
//             Authorization: `Bearer ${cookies.token}`
//         }
//     }
//     )
//     .then((response) => {
//         console.log(response.data)
//         setUsers(response.data)
//     })
// }


// useEffect(() => {

//     getUsersHeaders()
//     // getUsers()
// }, [])

// console.log(users)
//   return (
//     <div>test</div>
//   )
// }

// export default Test