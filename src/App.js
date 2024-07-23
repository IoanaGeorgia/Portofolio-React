import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Eccomerce from './components/Eccomerce';
import Internal from './components/Internal';
import Blog from './components/Blog';
import PlantShop from './components/PlantShop';
import Gallery from './components/Gallery'


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/eccomerce" element={<Eccomerce />} />

          <Route exact path="/internalTool" element={<Internal />} />

          <Route exact path="/blog" element={<Blog />} />

          <Route exact path='/plantShop' element={<PlantShop />} />

          <Route exact path='/gallery' element = {<Gallery />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
