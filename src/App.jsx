import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';


const App = () => {
  return (
    <Routes>
      {/* route for main country list page */}
      <Route path="/" element={<Home />} />

      {/* route for detailed country view */}
      <Route path="/country/:name" element={<CountryPage />} />
    </Routes>
  );
};

export default App;
