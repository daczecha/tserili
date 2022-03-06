import { Routes, Route } from 'react-router-dom';

import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Main from './Pages/Main';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
