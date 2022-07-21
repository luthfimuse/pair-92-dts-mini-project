// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Layout from './Components/Layout'
import {
  Routes, Route
} from 'react-router-dom';
import Container from '@mui/material/Container';


import Index from './Pages/Movie';
import Detail from './Pages/Movie/Detail';
import Popular from './Pages/Movie/Popular';
import TopRated from './Pages/Movie/TopRated';
import Upcoming from './Pages/Movie/Upcoming';

import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';


function App() {
  

  
  return (
    <div className="App">
      <Layout>
        < Container sx={{ mb: 8 }}>
        <Routes>
          
            <Route
              exact
              path='/'
              element={<Index />} 
            />
            <Route
              name="detail-movie"
              path='/movie/:id'
              element={<Detail />} 
            />
            < Route
            name = "popular"
            path = '/movie/popular'
            element = { < Popular /> }
            />
            < Route
            name = "upcoming"
            path = '/movie/upcoming'
            element = { < Upcoming /> }
            />
            < Route
            name = "top-rated"
            path = '/movie/top-rated'
            element = { < TopRated /> }
            />

            < Route
            name = "top-rated"
            path = '/login'
            element = { < Login /> }
            />
            < Route
            name = "top-rated"
            path = '/register'
            element = { < Register /> }
            />
           
        </Routes>
        </Container>
      </Layout>
     
    </div>
  );
}

export default App;
