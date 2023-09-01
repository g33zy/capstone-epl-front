import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Collapse
  // Checkbox,
  // FavoriteBorder,
  // Favorite,
  // Link,
  // Grow,
} from "@mui/material";
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
// import Heart  from '../components/Heart'
import cookie from "cookie";
import jwtdecode from "jwt-decode";
// import Parent from "./Parent";
// import Roster from "./Roster";
// import { connect } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const handleClick = (e) => {
//   setIsClicked(true)
//   const newState = { ...state };
//   newState[e.target.name] = e.target.value;
//   setState(newState);
// };

// function PlayerPool({updateRosterStats}) {
  // function PlayerPool({ onRosterUpdate }) {
    function PlayerPool() {

  // const navigate = useNavigate()
  const cookies = cookie.parse(document.cookie);

  const jwtd = jwtdecode(cookies.token);

  const [playerPool, setPlayerPool] = useState([]);

  const [players, setPlayers] = useState([]);

  // const [roster, setRoster] = useState([])

  const [likedPlayers, setLikedPlayers] = useState([]);
  // how to use this array in my rosters component (prop drilling? redux? create like players table for each user with mysql/backend?)

  // function PlayerPool({ likedPlayers, setLikedPlayers }) {
  // Use likedPlayers and setLikedPlayers here
  // }

  const [isLiked, setIsLiked] = useState(false);

  const [active, setActive] = useState({});

  const [rosterCount, setRosterCount] = useState(0);

  const [expandedPlayerIndex, setExpandedPlayerIndex] = useState(null);

  const handleExpandClick = (index) => {
    if (expandedPlayerIndex === index) {
      setExpandedPlayerIndex(null);
    } else {
      setExpandedPlayerIndex(index);
    }
  };


  const fetchCurrentPlayerpool = async () => {
        
    await axios.get(`https://capstone-epl.onrender.com/players/playerpool/:id`,
    {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    } 
    )

      .then((response) => {
          console.log(response.data)

          setPlayerPool(response.data)
      })
      .catch((error) => {
        console.error(error);
    });
  }
  


  const handleClick = (player) => {
    // how to save state of isLiked(heart)
    // changed id to player in order to use all of the player object and not only id
    // setPlayers(players => [...players])
    setLikedPlayers((prevPlayer) => [...prevPlayer, player]);
    setIsLiked(!isLiked);
    setActive(player.player.id);
    console.log(player.player.id)
    // onRosterUpdate(player);
  };

  const getPlayers = async () => {
    const options = {
      method: "GET",
      // url: 'https://api-football-v1.p.rapidapi.com/v3/players',
      url: "https://api-football-v1.p.rapidapi.com/v3/players/topscorers",
      params: {
        league: "39",
        season: "2023",
        // page: '3',
        // paging: {
        //   current: '3',
        //   total: '10'
        // }
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.response);
      setPlayers(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllPlayerPool = async () => {
    await axios
      .get("https://capstone-epl.onrender.com/players/playerpool")
      .then((response) => setPlayerPool(response.data));
  };

  // const getPlayersTwo = async () => {
  //   const options = {
  //     method: 'GET',
  //     // url: 'https://api-football-v1.p.rapidapi.com/v3/players',
  //     url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
  //     params: {
  //       league: '37',
  //       season: '2023',
  //       // page: '3'
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': process.env.REACT_APP_API,
  //       'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  //     }

  //   }

  useEffect(() => {
    getPlayers();
    // getPlayersTwo()
  }, []);

  useEffect(() => {
    getAllPlayerPool();
    
  }, []);

  useEffect(() => {
    console.log(likedPlayers);
  }, []);


  useEffect(() => {
    fetchCurrentPlayerpool()
    console.log('playerPool', playerPool);
  
  },[active])



//   const fetchAndApplyUpdatedStats = async () => {
//     try {
//       const options = {
//         method: 'GET',
//         url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
//         params: {
//           league: '39',
//           season: '2023',
//         },
//         headers: {
//           'X-RapidAPI-Key': process.env.REACT_APP_API, // Replace with your API key
//           'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
//         },
//       };
  
//       const response = await axios.request(options);
//       const updatedStats = response.data.response;
  
//     updateRosterStats(updatedStats);
//   } catch (error) {
//     console.error(error);
//   }
// }




  

  

  function addToRoster(player) {
    if (playerPool.length < 6) {
        console.log(playerPool.length)
        
      axios
        .post(
          "https://capstone-epl.onrender.com/players/playerpool",
          {
            firstName: player.player.firstname,
            lastName: player.player.lastname,
            goals: player.statistics[0].goals.total,
            assists: player.statistics[0].goals.assists,
            keyPasses: player.statistics[0].passes.key,
            tackles: player.statistics[0].tackles.total,
            thumbnail: player.player.photo,
            playerId: player.player.id,
            
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          handleClick(player)
    
          
          
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      window.alert("You have reached the roster limit of 6 players.");
    }
  }

  
  console.log(isLiked);

  return (
    <div className="grid-container">
      {players.map((player, index) => (
        <ul key={player.player.id}>
          <Card sx={{ maxWidth: 200, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <CardMedia
              className="growing"
              sx={{ width: "200px", height: "200px" }}
              // sx={{ objectFit: "cover" }}
              image={player.player.photo}
              title="player card"
            />
            <CardContent
              style={{
                background: "linear-gradient(to bottom right, red, yellow",
                borderRadius: "4px",
                border: "4px black",
                boxShadow: "3px 3px 6px 1px rgba(0, 0, 0, 0.36)",
                padding: "5px",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {player.player.name}
                {/* {player.player.firstname} */}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ display: "block" }}
              >
                <li>Goals: {player.statistics[0].goals.total}</li>
                <li>Assists: {player.statistics[0].goals.assists}</li>
                <li>Key Passes: {player.statistics[0].passes.key}</li>
                <li>Tackles: {player.statistics[0].tackles.total}</li>
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Link to="/components/roster" class='roster' size="small">Share</Link> */}
              <Button size="small" onClick={() => handleExpandClick(index)}
              aria-expanded={expandedPlayerIndex === index}
              aria-label="show more"
              >
                More Info
                </Button>
              {/* <i onClick={claimPlayer()} className={props.isClicked && props.active.id === props.id ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i> */}
              {/* <Button onClick={() => setIsClicked((prevState) => !prevState )} size="small">Claim: {claimPlayer ? </Button> */}
              <Button
                size="small" className="growing"
                onClick={() => {
                  // if (rosterCount < 6) {
                    if (
                      playerPool.some(
                        (poolPlayer) =>
                          poolPlayer.thumbnail === player.player.id &&
                          poolPlayer.user_id === jwtd.id
                      )
                    ) {
                      console.log("Duplicate check:", playerPool);
                      console.log("Player to be added:", player.player);
                      // console.log('DUPLICATE')
                      window.alert("You already chose this player!");
                      // conditionally render modal or window alert
                    } else {
                      addToRoster(player);
                      handleClick(player);
                    }
                  // } else {
                  //   window.alert(
                  //     "You have reached the roster limit of 6 players."
                  //   );
                  // }
                }
              }
              >
                {/* // changed id to player.player in order to use all of the player object and not only id */}
                {active === player.player.id ? "❤️" : "♡"}
                {/* {isLiked ? "liked" : "not liked"} */}
                {/* <Heart />  */}
              </Button>
            </CardActions>
            <Collapse 
            in={expandedPlayerIndex === index}
            timeout='auto'
            unmountOnExit
            >
              <CardContent>
                <Typography>
                  Nationality: {player.player.nationality}
                </Typography>
                <Typography>
                  Age: {player.player.age}
                </Typography>
                <Typography>
                  height: {player.player.height}
                </Typography>
                <Typography>
                  Injured: {player.player.injured ? "Yes" : "No"}
                </Typography>
                <Typography>
                  Team: {player.statistics[0].team.name}
                </Typography>
                <Typography>
                  Shots on Target: {player.statistics[0].shots.on}
                </Typography>
                <Typography>
                  Duels Won: {player.statistics[0].duels.won}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </ul>
      ))}
    </div>
  );
}



export default PlayerPool;

