import logo from './logo.svg';
import './App.css';
import BarChart from './component/BarChart';
import Navbar from './component/Navbar';
import { generateRandomArray } from './functions/generateRandomArray';
import { useState } from 'react';
import { DataProvider } from './DataContext';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage';

function App() {
  // const [data, setData] = useState(generateRandomArray(10, 10, 150));

  // const randomizeArray = () => {
  //   setData(generateRandomArray(10, 10, 150));
  // };
  return (
    <DataProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' exact element={<LandingPage/>}/>
          <Route path="/sort" element={<BarChart/>}/>
          <Route path="/search" element={BarChart}/>
          </Routes>
      </Router>
   
    </DataProvider>
  );
}

export default App;
