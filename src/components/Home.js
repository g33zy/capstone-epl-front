// import React from 'react'
// import axios from 'axios'
// import cookie from 'cookie'
// import League from './League';
// import Dashboard from './Dashboard';
// import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {
  Button,
  // Link
  //     Container,
  //     Table,
  //     TableBody,
  //     TableCell,
  //     TableHead,
  //     TableRow
} from "@mui/material";

import { rgbToHex } from "@mui/material";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url("https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2FOlympics-Day-13---Womens-Football-Final---Match-26-060f348ddd44138e75240cae926af05f.jpg")`,
        // backgroundImage: `url("https://img.freepik.com/premium-photo/green-soccer-field-football-field-top-view-with-realistic-grass-texture-realistic-football-pitch_167120-261.jpg")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{ color: "black", margin: "0", textAlign: "center", padding: 0 }}
      >
        Welcome to EPL Top 20!
      </h2>
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          maxWidth: '500px',
          margin: '0 auto',
          padding: "1rem",
          opacity: ".8",
          borderRadius: "10px",
          marginTop: "1rem",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Link to="/register">
          <Button
            className="register-button"
            variant="contained"
            color="error"
            size="large"
          >
            Sign Up
          </Button>
        </Link>
        <Link to="/login" style={{ margin: "1rem" }}>
          <Button
            className="register-button"
            variant="contained"
            color="error"
            size="large"
          >
            Log in
          </Button>
        </Link>

        <h3 style={{ color: "red", margin: "2rem" }}>Guide: </h3>

        <ol style={{ color: "red", marginTop: "1rem", textAlign: "left" }}>
          <li>
            Provide user name, team name, email, and password to register.
          </li>
          <hr></hr>
          <li>
            This game uses the top 20 scorers in the English Premier Leage.
          </li>
          <hr></hr>
          <li>
            Select a player from the Player Pool in order to claim for your
            roster by clicking the heart icon.
          </li>
          <hr></hr>
          <li>
            The limit on number of players you can have in your roster is 6.
          </li>
          <hr></hr>
          <li>
            Points Key: Goals = 4 points, Assists = 2 points, Key Passes = 1
            point, and Tackles = 1 point.
          </li>
          <hr></hr>
          <li>Go to the Dashboard to see the score leaders!</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

//   const [usersLocal, setUsersLocal] = useState([])

//   const getUsersLocal = async () => {
//     await axios.get('http://localhost:4001/users')
//     .then((response) => {
//       console.log(response.data)
//       setUsersLocal(response.data)
//     })
//   }

// useEffect(() => {
//   getUsersLocal()
// }, [])

// console.log(usersLocal)

// return (

//   <Container maxWidth="lg" className="car-container">
//             {/* {cookies.loggedIn ? <h4>Welcome, {users}</h4> : null} */}

//             <div className="flex-container">
//                 {/* <Chart /> */}
//                 {/* <Total /> */}
//                 {/* {cookies.loggedIn ? <AddListing listingTotal={props.listing.length} /> : null} */}
//             </div>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Id</TableCell>
//                         <TableCell>User Name</TableCell>
//                         <TableCell>Team Name</TableCell>
//                         <TableCell>Email</TableCell>
//                         <TableCell>Players</TableCell>
//                         {/* {cookies.loggedIn ? <TableCell>Delete</TableCell> : null} */}
//                         {/* {cookies.loggedIn ? <TableCell>Add</TableCell> : null} */}
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                 {usersLocal.map((usersLocal, idx) => (
//                     <TableRow key={usersLocal.id}>
//                         <TableCell component="th" scope="row">
//                             {usersLocal.id}
//                         </TableCell>
//                         {/* <TableCell> */}
//                         {/* <Link to={`/details/${usersLocal.id}`}>{listing["name"]}</Link> */}

//                         {/* </TableCell> */}
//                         <TableCell>{usersLocal["user_name"]}</TableCell>
//                         <TableCell>{usersLocal["team_name"]}</TableCell>
//                         <TableCell>{usersLocal["email"]}</TableCell>
//                         {/* <TableCell>{usersLocal["players"]}</TableCell> */}
//                         <TableCell>
//                         {/* {cookies.loggedIn ? <DeleteIcon
//                                 style={{cursor: 'pointer', color: 'red', fontSize: 'medium'}}
//                                 // add onClick method here
//                                 onClick={() => props.removeListing(idx)}
//                                 className="icon text-red" /> : null } */}
//                         </TableCell>
//                     </TableRow>
//                 ))}
//                 </TableBody>
//             </Table>
//         </Container>

//   )

// }

//     // const cookies = cookie.parse(document.cookie);

//   // return (
//     // <div>{cookies.loggedIn ? <League/> : <Home/>}</div>
//     // <div>Home Page </div>

// // // add flashy image or banner or call to action button 'register'

// // // export default Home;
// // export default Widget;

// // https://www.thesportsdb.com/images/icons/Soccer.png
// // small soccer ball image

// const options = {
//   method: 'GET',
//   url: 'https://free-football-soccer-videos.p.rapidapi.com/',
//   headers: {
//     'X-RapidAPI-Key': 'a63bc6ad19mshdff31c3ea300a83p12858ejsncbfa08be6478',
//     'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
