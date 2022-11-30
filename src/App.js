import logo from './logo.svg';
import './App.css';
import ReceipList from './Component/ReceipList';
import SearchReceip from './Component/SearchReceip';
import { Route, Routes } from 'react-router-dom';
import Details from './Component/Details';
import Home from './Component/Home';
import MovieList from './Component/Movie/MovieList';

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
      <Route path='/' element={
        <div><SearchReceip/>
        <ReceipList/></div>
      }/>
       <Route path='/:idreceip' element={
        <Details/>
      }/> 
      <Route path="/movielist" element={<MovieList/>} />
      </Routes>
    </div>
  );
}

export default App;
