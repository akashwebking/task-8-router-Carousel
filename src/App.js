
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Project';
import Contact from './Contact';
import{BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Project' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
          
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
