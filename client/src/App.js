import { Routes, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Login from './Pages/Auth/LogIn';
import Register from './Pages/Auth/Register';

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
