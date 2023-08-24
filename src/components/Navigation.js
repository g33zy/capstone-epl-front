import React from 'react'
import { AppBar, Toolbar, IconButton, 
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useNavigate } from 'react-router-dom'
import cookie from "cookie";

const Navigation = () => {
    const navigate = useNavigate();

    const cookies = cookie.parse(document.cookie);
    
    return (
        <AppBar position="relative" sx={{bgcolor:'#A0C3FF'}}>
            <Toolbar>
                <IconButton color="inherit" >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    EPL 
                </Typography>
                <ul className="nav-list" style={{fontFamily: "monospace", display: 'flex', gap: '20px', flexWrap: 'nowrap', alignContent: 'normal', justifyContent: 'normal', alignItems: 'normal', listStyle: "inside", paddingInline: '10px', paddingLeft: '30px', paddingRight: '30px'}} >
                    <li className="nav-list-item" style={{listStyle: "none",}}> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item" style={{listStyle: "none"}}>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-list-item" style={{listStyle: "none"}}>
                        <Link to="/playerpool">Player Pool</Link>
                    </li>
                    <li className="nav-list-item" style={{listStyle: "none"}}>
                        <Link to="/roster">Roster</Link>
                    </li>
                    <li className="nav-list-item" style={{listStyle: "none"}}>
                        <Link to="/register">Register</Link>
                    </li>
                   
                    {/* <li className="nav-list-item" style={{listStyle: "none"}}>
                        <Link to="/players">Players</Link>
                    </li> */}
                    {cookies.loggedIn ? <li
                        className="nav-list-item"
                        onClick={() => {
                            document.cookie = cookie.serialize("loggedIn", null, {
                                maxAge: 0,
                                });
                            document.cookie = "token= ;"
                                navigate("/");
                        }} style={{cursor: 'pointer', textDecoration: 'underline', listStyle: 'none'}}
                    >
                        Logout
                    </li> : <li className="nav-list-item" style={{listStyle: "none"}}>
                        <Link to="/login">Login</Link>
                    </li> }
                    
                    
                </ul>
            </Toolbar>
            <footer>
  
</footer>
        </AppBar>
    )



   
}



export default Navigation





