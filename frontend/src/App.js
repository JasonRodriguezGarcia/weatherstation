import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Device from './components/Device';
// import DescriptionsListPage from './pages/descriptions/DescriptionsListPage';

function App() {
  return (
    <BrowserRouter>
        <Device />
      {/* <CochesSummary /> */}
      <Routes>

        <Route path="/" element={<HomePage />} />
        {/* <Route path="/descriptions" element={<DescriptionsListPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
