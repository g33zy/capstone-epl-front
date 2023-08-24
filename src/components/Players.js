import React from 'react'
import axios from 'axios'
import cookie from 'cookie'
import { useState, useEffect } from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import jwtdecode from 'jwt-decode'
// import { Link } from 'react-router-dom'

// import AddPlayers from '../components/AddPlayers'

function PlayersLocal() {

    // const id = props.match.params.id
    // const playersLoc = props.playersLocal.find(c => c.id == id)

    

    // useEffect(() => {
    //     props.fetchPlayers()

    // }, [])

    // console.log(props.fetchPlayers())


const removePlayer = (index) => {
            return {
                type: 'REMOVE_Player',
                value: index
            }
        }

    const cookies = cookie.parse(document.cookie);

    const jwtd = jwtdecode(cookies.token)

    const [playersLocal, setPlayersLocal] = useState([])

    const getPlayersLocal = async () => {
        await axios.get('http://localhost:4001/players')
        .then((response) => {
            console.log(response.data)
            setPlayersLocal(response.data)
        })
    }

    // try {
    //     const response = axios.request(options);
    //     console.log(response.data.response);
    //     setPlayers(response.data.response) 
    //   } catch (error) {
    //     console.error(error);
    //   }
    

    useEffect(() => {
        getPlayersLocal()
    }, [])

    console.log(playersLocal)

  
    return (
        <Container maxWidth="lg" className="car-container">
            {cookies.loggedIn ? <h4>Welcome, {jwtd.team_name}</h4> : null}

            <div className="flex-container">
                {/* <Chart /> */}
                {/* <Total /> */}
                {/* {cookies.loggedIn ? <AddPlayers playerTotal={playersLocal.length} /> : null} */}
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
                        {cookies.loggedIn ? <TableCell  style={{fontWeight: 'bold'}}>Delete</TableCell> : null}
                        {cookies.loggedIn ? <TableCell  style={{fontWeight: 'bold'}}>Add</TableCell> : null}
                    </TableRow>
                </TableHead>
                <TableBody>
                {playersLocal.map((playersLocal, idx) => (
                    <TableRow key={playersLocal.id}>
                        <TableCell component="th" scope="row">
                            {playersLocal.id}
                        </TableCell>
                        {/* <TableCell>
                        <Link to={`/details/${playersLocal.id}`}>{playersLocal["firstname"]}</Link>
                            
                        </TableCell> */}
                        <TableCell>{playersLocal["firstname"]}</TableCell>
                        <TableCell>{playersLocal["lastname"]}</TableCell>
                        <TableCell>{playersLocal["goals"]}</TableCell>
                        <TableCell>{playersLocal["assists"]}</TableCell>
                        <TableCell>{playersLocal["tackles"]}</TableCell>
                        <TableCell>{playersLocal["key_passes"]}</TableCell>
                        <TableCell>
                        {cookies.loggedIn ? <DeleteIcon
                                style={{cursor: 'pointer', color: 'red', fontSize: 'medium'}}
                                // add onClick method here
                                onClick={() => removePlayer(idx)}
                                className="icon text-red" /> : null }
                        </TableCell>
                        
                        <TableCell>
                        {cookies.loggedIn ? <AddIcon
                                style={{cursor: 'pointer', color: 'blue', fontSize: 'medium'}}
                                // add onClick method here
                                // onClick={() => addPlayer(idx)}
                                className="icon text-blue" /> : null }
                        
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

  


export default PlayersLocal