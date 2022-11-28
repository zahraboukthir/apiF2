import logo from './logo.svg';
import './App.css';
import ReceipList from './Component/ReceipList';
import SearchReceip from './Component/SearchReceip';
import { Route, Routes } from 'react-router-dom';
import Details from './Component/Details';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={
        <div><SearchReceip/>
        <ReceipList/></div>
      }/>
       <Route path='/:idreceip' element={
        <Details/>
      }/> 
      </Routes>
    </div>
  );
}

export default App;
