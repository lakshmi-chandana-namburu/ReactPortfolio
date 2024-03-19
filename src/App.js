import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; // for routing
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigate from './Navigate';
import Education from './Education';
import Skills from './Skills';
import Certifications from './Certifications';
import Projects from './Projects';

function App() {
  return (
    <BrowserRouter>
    <Navigate/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education/>}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
      <Route path="/certifications" element={<Certifications/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;