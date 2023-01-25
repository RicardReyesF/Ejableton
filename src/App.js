import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home/home.jsx'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
