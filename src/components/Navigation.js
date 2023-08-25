// original nav code

// import React from 'react'
// import { AppBar, Toolbar, IconButton, 
//   Typography, Drawer
// } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu'
// import { Link, useNavigate } from 'react-router-dom'
// import cookie from "cookie";

// const Navigation = () => {
//     const navigate = useNavigate();
//     const [isDrawerOpen, setDrawerOpen] = useState(false);

//     const toggleDrawer = () => {
//         setDrawerOpen(!isDrawerOpen);
//       };

//     const cookies = cookie.parse(document.cookie);
    
//     return (
//         <AppBar position="relative" sx={{bgcolor:'#A0C3FF'}}>
//             <Toolbar>
//                 <IconButton color="inherit" onClick={toggleDrawer}>
//                     <MenuIcon />
//                 </IconButton>
//                 <Typography variant="h6" style={{ flexGrow: "1" }}>
//                     EPL Top 20
//                 </Typography>
//                 <ul className="nav-list" style={{fontFamily: "monospace", display: 'flex', gap: '20px', flexWrap: 'nowrap', alignContent: 'normal', justifyContent: 'normal', alignItems: 'normal', listStyle: "inside", paddingInline: '10px', paddingLeft: '30px', paddingRight: '30px'}} >
//                     <li className="nav-list-item" style={{listStyle: "none",}}> 
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li className="nav-list-item" style={{listStyle: "none"}}>
//                         <Link to="/dashboard">Dashboard</Link>
//                     </li>
//                     <li className="nav-list-item" style={{listStyle: "none"}}>
//                         <Link to="/playerpool">Player Pool</Link>
//                     </li>
//                     <li className="nav-list-item" style={{listStyle: "none"}}>
//                         <Link to="/roster">Roster</Link>
//                     </li>
//                     <li className="nav-list-item" style={{listStyle: "none"}}>
//                         <Link to="/register">Register</Link>
//                     </li>
                   
//                     {/* <li className="nav-list-item" style={{listStyle: "none"}}>
//                         <Link to="/players">Players</Link>
//                     </li> */}
//                     {cookies.loggedIn ? <li
//                         className="nav-list-item"
//                         onClick={() => {
//                             document.cookie = cookie.serialize("loggedIn", null, {
//                                 maxAge: 0,
//                                 });
//                             document.cookie = "token= ;"
//                                 navigate("/");
//                         }} style={{cursor: 'pointer', textDecoration: 'underline', listStyle: 'none'}}
//                     >
//                         Logout
//                     </li> : <li className="nav-list-item" style={{listStyle: "none"}}>
//                         <Link to="/login">Login</Link>
//                     </li> }
                    
                    
//                 </ul>
//             </Toolbar>
//             <footer>
  
// </footer>
//         </AppBar>
//     )



   
// }



// export default Navigation






// code with drawer 

// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, useNavigate } from 'react-router-dom';
// import cookie from 'cookie';

// const Navigation = () => {
//   const navigate = useNavigate();
//   const [isDrawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   const cookies = cookie.parse(document.cookie);

//   return (
//     <AppBar position="relative" sx={{ bgcolor: '#A0C3FF' }}>
//       <Toolbar>
//         <IconButton color="inherit" onClick={toggleDrawer}>
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" style={{ flexGrow: '1' }}>
//           EPL Top 20
//         </Typography>
//         {cookies.loggedIn ? (
//           <ul
//             className="nav-list"
//             style={{
//               fontFamily: 'monospace',
//               listStyle: 'none',
//               display: 'flex',
//               gap: '20px',
//             }}
//           >
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/playerpool">Player Pool</Link>
//             </li>
//             <li>
//               <Link to="/roster">Roster</Link>
//             </li>
//             <li
//               onClick={() => {
//                 document.cookie = cookie.serialize('loggedIn', null, {
//                   maxAge: 0,
//                 });
//                 document.cookie = 'token= ;';
//                 navigate('/');
//               }}
//               style={{ cursor: 'pointer', textDecoration: 'underline' }}
//             >
//               Logout
//             </li>
//           </ul>
//         ) : (
//           <ul
//             className="nav-list"
//             style={{
//               fontFamily: 'monospace',
//               listStyle: 'none',
//               display: 'none', // Hide in desktop view
//               gap: '20px',
//             }}
//           >
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         )}
//       </Toolbar>
//       <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer}>
//         <List>
//           <ListItem button component={Link} to="/">
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button component={Link} to="/dashboard">
//             <ListItemText primary="Dashboard" />
//           </ListItem>
//           <ListItem button component={Link} to="/playerpool">
//             <ListItemText primary="Player Pool" />
//           </ListItem>
//           <ListItem button component={Link} to="/roster">
//             <ListItemText primary="Roster" />
//           </ListItem>
//           {!cookies.loggedIn && (
//             <ListItem button component={Link} to="/login">
//               <ListItemText primary="Login" />
//             </ListItem>
//           )}
//         </List>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Navigation;



// hamburger mobile attempt

// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, useNavigate } from 'react-router-dom';
// import cookie from 'cookie';

// const Navigation = () => {
//   const navigate = useNavigate();
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const isMobileView = useMediaQuery(useTheme().breakpoints.down('sm'));

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   const cookies = cookie.parse(document.cookie);

//   return (
//     <AppBar position="relative" sx={{ bgcolor: '#A0C3FF' }}>
//       <Toolbar>
//         {isMobileView ? (
//           <IconButton color="inherit" onClick={toggleDrawer}>
//             <MenuIcon />
//           </IconButton>
//         ) : (
//           <ul
//             className="nav-list"
//             style={{
//               fontFamily: 'monospace',
//               listStyle: 'none',
//               display: 'flex',
//               gap: '20px',
//             }}
//           >
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/playerpool">Player Pool</Link>
//             </li>
//             <li>
//               <Link to="/roster">Roster</Link>
//             </li>
//             {cookies.loggedIn ? (
//               <li
//                 onClick={() => {
//                   document.cookie = cookie.serialize('loggedIn', null, {
//                     maxAge: 0,
//                   });
//                   document.cookie = 'token= ;';
//                   navigate('/');
//                 }}
//                 style={{ cursor: 'pointer', textDecoration: 'underline' }}
//               >
//                 Logout
//               </li>
//             ) : (
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//             )}
//           </ul>
//         )}
//         <Typography variant="h6" style={{ flexGrow: '1' }}>
//           EPL Top 20
//         </Typography>
//       </Toolbar>
//       <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer}>
//         <List>
//           <ListItem button component={Link} to="/">
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button component={Link} to="/dashboard">
//             <ListItemText primary="Dashboard" />
//           </ListItem>
//           <ListItem button component={Link} to="/playerpool">
//             <ListItemText primary="Player Pool" />
//           </ListItem>
//           <ListItem button component={Link} to="/roster">
//             <ListItemText primary="Roster" />
//           </ListItem>
//           {!cookies.loggedIn && (
//             <ListItem button component={Link} to="/login">
//               <ListItemText primary="Login" />
//             </ListItem>
//           )}
//           {cookies.loggedIn && (
//             <ListItem
//               button
//               onClick={() => {
//                 document.cookie = cookie.serialize('loggedIn', null, {
//                   maxAge: 0,
//                 });
//                 document.cookie = 'token= ;';
//                 navigate('/');
//               }}
//             >
//               <ListItemText primary="Logout" />
//             </ListItem>
//           )}
//         </List>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Navigation;


import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import cookie from 'cookie';

const Navigation = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobileView = useMediaQuery(useTheme().breakpoints.down('sm'));

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const cookies = cookie.parse(document.cookie);

  return (
    <AppBar position="relative" sx={{ bgcolor: '#A0C3FF' }}>
      <Toolbar>
        {isMobileView ? (
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <Typography
              variant="h6"
              style={{ flexGrow: '1', textAlign: 'left' }}
            >
              EPL Top 20
            </Typography>
            <ul
              className="nav-list"
              style={{
                fontFamily: 'monospace',
                listStyle: 'none',
                display: 'flex',
                gap: '20px',
              }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/playerpool">Player Pool</Link>
              </li>
              <li>
                <Link to="/roster">Roster</Link>
              </li>
              {cookies.loggedIn ? (
                <li
                  onClick={() => {
                    document.cookie = cookie.serialize('loggedIn', null, {
                      maxAge: 0,
                    });
                    document.cookie = 'token= ;';
                    navigate('/');
                  }}
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Logout
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </>
        )}
      </Toolbar>
      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/playerpool">
            <ListItemText primary="Player Pool" />
          </ListItem>
          <ListItem button component={Link} to="/roster">
            <ListItemText primary="Roster" />
          </ListItem>
          {!cookies.loggedIn && (
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
          )}
          {cookies.loggedIn && (
            <ListItem
              button
              onClick={() => {
                document.cookie = cookie.serialize('loggedIn', null, {
                  maxAge: 0,
                });
                document.cookie = 'token= ;';
                navigate('/');
              }}
            >
              <ListItemText primary="Logout" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navigation;

