import React from 'react'
import axios from 'axios'
import cookie from 'cookie'
import { useState, useEffect } from 'react'
// import PlayerPool from './PlayerPool'
// import Parent from './Parent'
// import { useParams } from "react-router-dom"
// import { connect } from 'react-redux'


import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
//   Chip
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
// import AddIcon from '@mui/icons-material/Add'
import jwtdecode from 'jwt-decode'
// import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import Link from 'react-router-dom'





// function Roster({rosterStats}) {

  function Roster() {

  
      const cookies = cookie.parse(document.cookie);
      console.log(cookies)

 
  
      const jwtd = jwtdecode(cookies.token)
      
    console.log(jwtd)
  
      const [roster, setRoster] = useState([])

      // const handleRosterUpdate = (player) => {
      //   setRoster((prevRoster) => [...prevRoster, player])
      // }
  
      const getRoster = async () => {
        
        await axios.get(`https://capstone-epl.onrender.com/players/playerpool/:id`,
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`
          }
        } 
        )

          .then((response) => {
              console.log(response.data)

              setRoster(response.data)
          })
          
      }
  
    //   try {
    //       const response = axios.request(options);
    //       console.log(response.data.response);
    //       setRoster(response.data.response) 
    //     } catch (error) {
    //       console.error(error.response.data);
    //     }
      

    const removePlayer = async (id) => {
        await axios.delete(`https://capstone-epl.onrender.com/players/playerpool/${id}`,
        {
            headers: {
              Authorization: `Bearer ${cookies.token}`
            }
          } 
          )
        .then(response => {
            updateRoster(id)
            console.log('player deleted')
            // window.location.reload()
            // in order to achieve same result can use filter method
        })
        .catch((error) => {
            console.log(error)
        })
      }


  
      useEffect(() => {
          getRoster()
      }, [])
  
      console.log(roster)

// this code updates the roster to include claimed players from the player pool, it does not update the roster stats
      const updateRoster = (id) => {
        const newRoster = roster.filter(player => player.id !== id)
        setRoster(newRoster)
      }

     
      // const fetchLatestStats = async () => {
      //   const response = await axios.get(
      //     "https://api-football-v1.p.rapidapi.com/v3/players/topscorers",
      //     {
      //       params: {
      //         league: "39",
      //         season: "2023"
      //       },
      //       headers: {
      //         "X-RapidAPI-Key": process.env.REACT_APP_API,
      //         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      //       }
      //     }  
      //   );
        
      //   return response.data.response;
      // }
    
      // // Get initial roster data
      // useEffect(() => {
      //   axios.get("/roster")
      //     .then(response => setRoster(response.data));
      // }, []);
    
      // const handleUpdateStats = async () => {  
      //   const latestStats = await fetchLatestStats();
        
      //   const updatedRoster = roster.map(player => {
      //     const updatedStats = latestStats.find(stat => 
      //       stat.player.id === player.id
      //     );
      //     if (updatedStats) {
      //       return {...player, ...updatedStats};  
      //     }
      //     return player;
      //   });
        
      //   setRoster(updatedRoster);
      // }

     // API call to get latest stats 
// const fetchLatestStats = async () => {

//   const options = {
//     method: 'GET',
//     url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
//     params: {
//       league: '39',
//       season: '2023' 
//     },
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_API,
//       'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//     }
//   };

//   const response = await axios.request(options);

//   return response.data.response;
// }

// // Update roster stats
// const fetchAndApplyUpdatedStats = async () => {

//   const updatedStats = await fetchLatestStats();

//   const updatedRoster = roster.map(rosterPlayer => {
//     const updatedPlayerStats = updatedStats.find(
//       updated => updated.player.id === rosterPlayer.id
//     );
    
//     if (updatedPlayerStats) {
//       return {...rosterPlayer, ...updatedPlayerStats};
//     }
    
//     return rosterPlayer;
//   });

//   setRoster(updatedRoster);
// }

// // Call on button click
// const handleUpdateStats = async () => {
//   await fetchAndApplyUpdatedStats();
// }


      

      const fetchAndApplyUpdatedStats = async () => {
        try {
          const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
            params: {
              league: '39',
              season: '2023',
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_API, // Replace with your API key
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            },
          };
      
          const response = await axios.request(options);
          const updatedStats = response.data.response;

          console.log(updatedStats)
      
          // const updatedRoster = roster.map(rosterPlayer => {
          //   const updatedPlayerStats = updatedStats.find(updated => 
          //     updated.player.id === rosterPlayer.id);
          //   if (updatedPlayerStats) {
          //     return { ...rosterPlayer, ...updatedPlayerStats };
          //   }
          //   return rosterPlayer;
          // });
      
          // Update roster state
          // setRoster(updatedRoster);
        
        } catch (error) {
          console.error(error);
        }
      };
      
      // Schedule the background task to run once a week (adjust as needed)
      // useEffect(() => {
      //   const interval = setInterval(fetchAndApplyUpdatedStats, 604800000); // One week in milliseconds
      //   return () => clearInterval(interval);
      // }, []);

      useEffect(() => {
        fetchAndApplyUpdatedStats();
      }, []);
    
      return (


        
        
          <Container maxWidth="lg" className="car-container">
            {/* {Object.keys(roster).map((key, idx) => {
                return <Chip key={idx} label={`${key}: ${roster[key]}`}></Chip>
            })} */}
              {cookies.loggedIn ? <h4>Welcome, {jwtd.team_name} to your Roster.</h4> : null}
  
              <div className="flex-container">
                  {/* <Chart /> */}
                  {/* <Total /> */}
                  {/* {cookies.loggedIn ? <AddPlayers playerTotal={roster.length} /> : null} */}
              </div>

              {/* <button onClick={fetchAndApplyUpdatedStats}>Update Stats</button> */}

              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell  style={{fontWeight: 'bold'}}>Id</TableCell>
                          <TableCell  style={{fontWeight: 'bold'}}>First Name</TableCell>
                          <TableCell  style={{fontWeight: 'bold'}}>Last Name</TableCell>
                          <TableCell  style={{fontWeight: 'bold'}}>Goals</TableCell>
                          <TableCell  style={{fontWeight: 'bold'}}>Assists</TableCell>
                          <TableCell  style={{fontWeight: 'bold'}}>Tackles</TableCell>
                          <TableCell  style={{fontWeight: 'bold'}}>Key Passes</TableCell>
                          <TableCell  style={{fontWeight: 'bold'}}>Delete</TableCell>
                          {/* {cookies.loggedIn ? <TableCell  style={{fontWeight: 'bold'}}>Delete</TableCell> : null}
                          {cookies.loggedIn ? <TableCell  style={{fontWeight: 'bold'}}>Add</TableCell> : null} */}
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  {roster.map((roster, idx) => (
                      <TableRow key={roster.id}>
                          <TableCell component="th" scope="row">
                              {roster.id}
                          </TableCell>
                          {/* <TableCell>
                          <Link to={`/details/${roster.id}`}>{roster["firstname"]}</Link>
                              
                          </TableCell> */}
                          <TableCell>{roster["firstname"]}</TableCell>
                          <TableCell>{roster["lastname"]}</TableCell>
                          <TableCell>{roster["goals"] || 0}</TableCell>
                          <TableCell>{roster["assists"] || 0}</TableCell>
                          <TableCell>{roster["tackles"] || 0}</TableCell>
                          <TableCell>{roster["key_passes"] || 0}</TableCell>
                          <TableCell>
                          {cookies.loggedIn ? <DeleteIcon
                                  style={{cursor: 'pointer', color: 'red', fontSize: 'medium'}}
                                  // add onClick method here
                                  onClick={() => removePlayer(roster.id)}
                                  className="icon text-red" /> : null }
                          </TableCell>
                           
                          {/* <TableCell> */}
                          {/* {cookies.loggedIn ? <AddIcon
                                  style={{cursor: 'pointer', color: 'blue', fontSize: 'medium'}}
                                  // add onClick method here
                                  // onClick={() => addPlayer(idx)}
                                  className="icon text-blue" /> : null }
                           */}
                          {/* </TableCell> */}
                      </TableRow>
                  ))}
                  </TableBody>
              </Table>

              {/* <PlayerPool onRosterUpdate={handleRosterUpdate} /> */}
          </Container>
      )
  }
  
    
  
export default Roster