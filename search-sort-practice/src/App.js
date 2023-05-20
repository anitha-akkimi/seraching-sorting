
import * as React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Contaner from './components/container';
import DateWiseSorting from './components/sorting';
import NotFound from './components/notfound';

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path = '/' element={<Contaner/>}/>
      <Route exact path = "/sorting" element={<DateWiseSorting/>}/>
      <Route element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

