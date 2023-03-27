import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About/About';
import { Route, Routes , NavLink} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className='container'>
      {/* <Navbar />
       <NavLink to='/projects'>projects</NavLink >
      <About />
      <Projects /> */}
     
      <Routes>
        <Route path='/' element={ <Home/>}/>
        {/* <Route path='/projects' element={<Projects/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
