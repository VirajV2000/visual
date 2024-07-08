import logo from './logo.svg';
import './App.css';
import BarChart from './component/BarChart';
import Navbar from './component/Navbar';
import { generateRandomArray } from './functions/generateRandomArray';
import { useState } from 'react';
import { DataProvider } from './DataContext';

function App() {
  // const [data, setData] = useState(generateRandomArray(10, 10, 150));

  // const randomizeArray = () => {
  //   setData(generateRandomArray(10, 10, 150));
  // };
  return (
    <DataProvider>
    <Navbar />
      <BarChart />
    </DataProvider>
  );
}

export default App;
