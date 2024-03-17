import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Eccomerce from './components/Eccomerce';
import Internal from './components/Internal';
import Blog from './components/Blog'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/eccomerce" element={<Eccomerce />} />

          <Route exact path="/internalTool" element={<Internal />} />

          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </Router>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </div>
  );
}

export default App;
