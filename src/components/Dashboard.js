import {React, useState, useEffect} from 'react'
import cookie from 'cookie'
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'
import { Link } from 'react-router-dom'
import Login from './Login'
import jwtdecode from 'jwt-decode'
import axios from 'axios'




const Dashboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);


  const [aggregatedTeams, setAggregatedTeams] = useState({})


  // const [usersLocal, setUsersLocal] = useState([])

//   const getLeaderboard = async () => {
//     await axios.get('http://localhost:4001/players/dashboard')
//     .then((response) => {
//         console.log(response.data)
//         setLeaderboard(response.data)
//     })
// } 



const getLeaderboard = async () => {
  try {
  const response = await axios.get('http://localhost:4001/players/dashboard')
  console.log('Fetched data:', response.data);
      setLeaderboard(response.data);
  } catch (error) {
    console.error('error fetching leaderboard data:', error);
  }
} 

useEffect(() => {
  getLeaderboard()
}, [])




useEffect(() => {

  const pointWeights = {
    goals: 4,
    assists: 2,
    key_passes: 1,
    tackles: 1,
  };

  const teamTotals = leaderboard.reduce((totals, entry) => {
    const teamName = entry.team_name;

    if (!totals[teamName]) {
      totals[teamName] = {
        team_name: teamName,
        goals: 0,
        assists: 0,
        key_passes: 0,
        tackles: 0,
      };
    }

    totals[teamName].goals += entry.goals || 0;
    totals[teamName].assists += entry.assists || 0;
    totals[teamName].key_passes += entry.key_passes || 0;
    totals[teamName].tackles += entry.tackles || 0;

    totals[teamName].totalPoints = 
      (entry.goals || 0) + 
      (entry.assists || 0) + 
      (entry.key_passes || 0) + 
      (entry.tackles || 0);

      totals[teamName].totalPoints = 
      (totals[teamName].goals * pointWeights.goals) +
      (totals[teamName].assists * pointWeights.assists) +
      (totals[teamName].key_passes * pointWeights.key_passes) +
      (totals[teamName].tackles * pointWeights.tackles);

    return totals;
  }, {});

  const sortedTeams = Object.values(teamTotals).sort((a, b) => b.goals - a.goals);

setAggregatedTeams(sortedTeams);
  }, [leaderboard]);

  // Fetch new data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      getLeaderboard();
    },600000000); // Fetch new data every 6.94 days

    return () => clearInterval(interval);
  }, []);





console.log(leaderboard)

// const users = [... new Set(leaderboard.map(user => [{ 
//   goals: user.goals,
//   assists: user.assists,
//   key_passes: user.key_passes,
//   tackles: user.tackles
// }]))]

//  const users = [... new Set(leaderboard.map(user => user.team_name))]


 


  // console.log(users)


  const cookies = cookie.parse(document.cookie);
  console.log(cookies)

  const jwtd = jwtdecode(cookies.token)
  console.log(jwtd)

  // in future cases make sure to privitize this token with a function

  return (

    <div>{cookies.loggedIn ? <h4> Welcome, {jwtd.user_name} To EPL Dashboard! </h4> : null}
    
    

    <Container>
       

        <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight: 'bold'}} >Team Name</TableCell>
                        <TableCell style={{fontWeight: 'bold'}} >Total Goals</TableCell>
                        <TableCell style={{fontWeight: 'bold'}} >Total Assists</TableCell>
                        <TableCell style={{fontWeight: 'bold'}} >Total Key Passes</TableCell>
                        <TableCell style={{fontWeight: 'bold'}} >Total Tackles</TableCell>
                        <TableCell style={{fontWeight: 'bold'}} >Total Points</TableCell>
    
                    </TableRow>
                </TableHead>
                <TableBody>
                {Object.values(aggregatedTeams).map((team) => (
                    <TableRow key={team.team_name}>
                        <TableCell>{team.team_name}</TableCell>
                        <TableCell>{team.goals}</TableCell>
                        <TableCell>{team["assists"]}</TableCell>
                        <TableCell>{team["key_passes"]}</TableCell>
                        <TableCell>{team["tackles"]}</TableCell> 
                        <TableCell>{team.totalPoints}</TableCell> 

                
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        
    </Container>
    </div>
  )

 
}

export default Dashboard;
