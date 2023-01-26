import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home/home.jsx';
import Job from '../src/components/Job/job.jsx';
import Apprenticeships from '../src/components/Apprenticeships/apprenticeships.jsx'
import Nav from '../src/components/Nav/nav.jsx'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/job' element={<Job />}></Route>
        <Route path='/apprenticeships' element={<Apprenticeships />}></Route>
      </Routes>
    </div>
  );
}

export default App;
