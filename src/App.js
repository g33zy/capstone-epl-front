import React from 'react';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import League from './components/League';
// import store from './redux/store'



function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        
       
        <Router />
        <Footer />
      </BrowserRouter>
    // </Provider>
  );
}

export default App;






