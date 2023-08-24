import { useEffect, useState } from 'react';

import React from 'react'
import axios from 'axios'







function Parent() {


const [stand, setStand] = useState([])



    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
        params: {
          season: '2023',
          league: '39'
        },
        headers: {
          'X-RapidAPI-Key': 'a63bc6ad19mshdff31c3ea300a83p12858ejsncbfa08be6478',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
      

      async function standings () {

      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          setStand(response.data.response) 
          console.log(response)

      } catch (error) {
          console.error(error);
      }

    }


    useEffect(() => {
        standings()
    }, [])

  return (
   <div>
    {/* {stand.map(teams => (

    ))} */}


   </div>
  )
}

export default Parent




