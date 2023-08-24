import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  // Checkbox,
  // FavoriteBorder,
  // Favorite,
  // Link,
  // Grow,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
// import Heart  from '../components/Heart'
import cookie from "cookie";
import jwtdecode from "jwt-decode";

// const handleClick = (e) => {
//   setIsClicked(true)
//   const newState = { ...state };
//   newState[e.target.name] = e.target.value;
//   setState(newState);
// };

function PlayerPool() {
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

  const fetchCurrentPlayerpool = async () => {
        
    await axios.get(`http://localhost:4001/players/playerpool/:id`,
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
      
  }
  


  const handleClick = (player) => {
    // how to save state of isLiked(heart)
    // changed id to player in order to use all of the player object and not only id
    // setPlayers(players => [...players])
    setLikedPlayers((prevPlayer) => [...prevPlayer, player]);
    setIsLiked(!isLiked);
    setActive(player.player.id);
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
      .get("http://localhost:4001/players/playerpool")
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
  

  function addToRoster(player) {
    if (playerPool.length < 6) {
        console.log(rosterCount)
      axios
        .post(
          "http://localhost:4001/players/playerpool",
          {
            firstName: player.player.firstname,
            lastName: player.player.lastname,
            goals: player.statistics[0].goals.total,
            assists: player.statistics[0].goals.assists,
            keyPasses: player.statistics[0].passes.key,
            tackles: player.statistics[0].tackles.total,
            thumbnail: player.player.photo,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          
          
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
    <div>
      {players.map((player) => (
        <ul key={player.player.id}>
          <Card sx={{ maxWidth: 200 }}>
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
              <Button size="small">Learn More</Button>
              {/* <i onClick={claimPlayer()} className={props.isClicked && props.active.id === props.id ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i> */}
              {/* <Button onClick={() => setIsClicked((prevState) => !prevState )} size="small">Claim: {claimPlayer ? </Button> */}
              <Button
                size="small"
                onClick={() => {
                  // if (rosterCount < 6) {
                    if (
                      playerPool.some(
                        (poolPlayer) =>
                          poolPlayer.thumbnail === player.player.photo &&
                          poolPlayer.user_id === jwtd.id
                      )
                    ) {
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
          </Card>
        </ul>
      ))}
    </div>
  );
}

export default PlayerPool;

// "https://api-football-v1.p.rapidapi.com/v2/players/search/{lastname}"
// get player by last name

// https://api-football-v1.p.rapidapi.com/v2/topscorers/{league_id}
// this gets the 20 best scorers from any league!

// {
//   "api": {
//       "results": 20,
//       "topscorers": [
//           {
//               "player_id": 278,
//               "player_name": "K. Mbappé",
//               "firstname": "Kylian",
//               "lastname": "Mbappé Lottin",
//               "position": "Attacker",
//               "nationality": "France",
//               "team_id": 85,
//               "team_name": "Paris Saint Germain",
//               "games": {
//                   "appearences": 29,
//                   "minutes_played": 2340
//               },
//               "goals": {
//                   "total": 33,
//                   "assists": 7,
//                   "conceded": null,
//                   "saves": 0
//               },
//               "shots": {
//                   "total": 122,
//                   "on": 68
//               },
//               "penalty": {
//                   "won": 3,
//                   "commited": null,
//                   "success": 1,
//                   "missed": 0,
//                   "saved": null
//               },
//               "cards": {
//                   "yellow": 5,
//                   "second_yellow": 0,
//                   "red": 1
//               }
//           },
//           {
//               "player_id": 3246,
//               "player_name": "N. Pépé",
//               "firstname": "Nicolas",
//               "lastname": "Pépé",
//               "position": "Attacker",
//               "nationality": "Côte d'Ivoire",
//               "team_id": 79,
//               "team_name": "Lille",
//               "games": {
//                   "appearences": 38,
//                   "minutes_played": 3332
//               },
//               "goals": {
//                   "total": 22,
//                   "assists": 11,
//                   "conceded": null,
//                   "saves": 0
//               },
//               "shots": {
//                   "total": 118,
//                   "on": 61
//               },
//               "penalty": {
//                   "won": 5,
//                   "commited": null,
//                   "success": 9,
//                   "missed": 1,
//                   "saved": null
//               },
//               "cards": {
//                   "yellow": 1,
//                   "second_yellow": 0,
//                   "red": 0
//               }
//           }
//       ]
//   }

// "https://api-football-v1.p.rapidapi.com/v2/players/team/{team_id}/{season}"
// this gets stats by team id or season

// this endpoint will return
// {
//   "api": {
//       "results": 3,
//       "players": [
//           {
//               "player_id": 276,
//               "player_name": "Neymar da Silva Santos Junior",
//               "firstname": "Neymar",
//               "lastname": "da Silva Santos Junior",
//               "number": 10,
//               "position": "Attacker",
//               "age": 27,
//               "birth_date": "05/02/1992",
//               "birth_place": "Mogi das Cruzes",
//               "birth_country": "Brazil",
//               "nationality": "Brazil",
//               "height": "175 cm",
//               "weight": "68 kg",
//               "injured": "False",
//               "rating": "8.183333",
//               "team_id": 85,
//               "team_name": "Paris Saint Germain",
//               "league": "UEFA Champions League",
//               "season": "2018-2019",
//               "captain": 0,
//               "shots": {
//                   "total": 24,
//                   "on": 16
//               },
//               "goals": {
//                   "total": 5,
//                   "conceded": 0,
//                   "assists": 2,
//                   "saves": 0
//               },
//               "passes": {
//                   "total": 262,
//                   "key": 0,
//                   "accuracy": 82
//               },
//               "tackles": {
//                   "total": 3,
//                   "blocks": 2,
//                   "interceptions": 2
//               },
//               "duels": {
//                   "total": 122,
//                   "won": 72
//               },
//               "dribbles": {
//                   "attempts": 54,
//                   "success": 32
//               },
//               "fouls": {
//                   "drawn": 34,
//                   "committed": 4
//               },
//               "cards": {
//                   "yellow": 2,
//                   "yellowred": 0,
//                   "red": 0
//               },
//               "penalty": {
//                   "won": 0,
//                   "commited": 0,
//                   "success": 0,
//                   "missed": 0,
//                   "saved": 0
//               },
//               "games": {
//                   "appearences": 6,
//                   "minutes_played": 532,
//                   "lineups": 6
//               },
//               "substitutes": {
//                   "in": 0,
//                   "out": 1,
//                   "bench": 0
//               }
//           },
//       ]
//   }
// }
