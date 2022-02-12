import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import StaffRegister from './pages/StaffRegister';
import StakeRegister from './pages/StakeRegister';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/staff-register" element={<StaffRegister />} />
        <Route path="/event-register" element={<StakeRegister />} />
      </Routes>
    </div>
  );
}

export default App;
