import { Routes, Route, Link, Navigate } from 'react-router-dom'; // Import Navigate
import Nav from "./components/Nav";
import Home from './pages/Home';
const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        {/* Redirect from '/' to '/home' */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default App;
