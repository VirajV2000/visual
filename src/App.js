import logo from './logo.svg';
import './App.css';
import BarChart from './component/BarChart';
import Navbar from './component/Navbar';

function App() {
  const data=[5,15,20,25,30,35,55,80,69,58];
  return (
    <>
    <Navbar />
      <BarChart data={data}/>
    </>
  );
}

export default App;
