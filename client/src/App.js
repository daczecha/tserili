import { Routes, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Login from './Pages/Auth/LogIn';
import Register from './Pages/Auth/Register';
import Confirmation from './Pages/Auth/Confirmation';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
