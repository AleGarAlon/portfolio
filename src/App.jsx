import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutmePage from './pages/AboutMePage';
import Proyect3Page from './pages/Proyect3Page';
import Proyect2Page from './pages/Proyect2Page';
import Proyect1Page from './pages/Proyect1Page';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AboutMe" element={<AboutmePage/>}/>
        <Route path="/Proyect1" element={<Proyect1Page/>}/>
        <Route path="/Proyect2" element={<Proyect2Page/>}/>
        <Route path="/Proyect3" element={<Proyect3Page/>}/>
        <Route path="/*" element={<h1>404 Page not found</h1>}/>
      </Routes> 
    </div>
  )
}

export default App
