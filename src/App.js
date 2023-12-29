import './App.css';
import {Routes, Route} from "react-router-dom";
import Splashpage from "./Pages/Splashpage.tsx";
import About from "./Pages/About.tsx";
import Lost from './Pages/Lost.tsx';
import Narcy from "./Pages/Narcy.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Routes>
              <Route path="/" element={<Splashpage/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Narcy" element={<Narcy/>}/>
              <Route path="/*" element={<Lost/>} />
          </Routes>
      </header>
    </div>
  );
}

export default App;
