import { Routes, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Login from './Pages/Auth/LogIn';
import Register from './Pages/Auth/Register';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
