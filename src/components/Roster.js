import React from 'react'
import axios from 'axios'
import cookie from 'cookie'
import { useState, useEffect } from 'react'
// import { useParams } from "react-router-dom"

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





function Roster() {


  
      const cookies = cookie.parse(document.cookie);
      console.log(cookies)

 
  
      const jwtd = jwtdecode(cookies.token)
      
    console.log(jwtd)
  
      const [roster, setRoster] = useState([])
  
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


      const updateRoster = (id) => {
        const newRoster = roster.filter(player => player.id !== id)
        setRoster(newRoster)
      }
  
    
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
          </Container>
      )
  }
  
    
  
export default Roster