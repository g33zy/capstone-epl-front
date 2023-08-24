import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
// import Details from './containers/Details'
// import Listing from './containers/Listing'
import cookie from 'cookie'
import Login from './components/Login'
// import AddListing from './containers/AddListing'

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Test from './components/test'
import PlayerPool from './components/PlayerPool'
// import Players from './containers/AddPlayers'
import Players from './components/Players'
import Roster from './components/Roster'
import Parent from './components/Parent'
import League from './components/League'
// import Search from './components/Search'
// import Import from './containers/Import'
// import Switch from 'react-router'


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

//   Write ProtectedRoute function here
const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;

    return (
        checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
    )

}


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            {/* <Route path="/test" element={<Test/>} /> */}
            {/* <Route path="/playerpool" element={<PlayerPool/>} /> */}
            {/* <Route path="/roster/:id" element={<ProtectedRoute component={Roster} /> } /> */}
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} /> } />
            <Route path="/playerpool" element={<ProtectedRoute component={PlayerPool} /> } />
            <Route path="/players" element={<Players/>} />
            <Route path="/roster" element={<ProtectedRoute component={Roster} /> } />
            {/* <Route path="/search" element={<Search/>} /> */}
            {/* <Route path="/roster" element={<Roster/>} /> */}
             {/* <Route path="/parent" element={<Parent/>} /> */}
             {/* <Route path="/league" element={<League/>} /> */}

            
            
            {/* <Route path="/details/:id" element={<Details/>} /> */}
            {/* <Route path="/add" element={<ProtectedRoute component={AddListing} />} /> */}
            {/* <Route path="/import" component={Import} /> */}
        </Routes>
    );
};

export default Router;