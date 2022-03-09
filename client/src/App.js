import { Routes, Route, Navigate } from 'react-router-dom';

import Main from './Pages/Main';
import Login from './Pages/Auth/LogIn';
import Register from './Pages/Auth/Register';
import Confirmation from './Pages/Auth/Confirmation';
import NotFound from './Pages/NotFound';
import Confirmed from './Pages/Auth/Confirmed';

import { State } from './Context/Provider';

function App() {
  const { user } = State();

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Main /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/" replace /> : <Register />}
      />

      <Route
        path="/60EOGThYDupS2FEwd8NB"
        /* random urls for confirmation pages :D*/
        element={user ? <Navigate to="/" replace /> : <Confirmation />}
      />
      <Route
        path="/heZio6J2uPFuCTZvpfEH"
        /* random urls for confirmation pages :D*/
        element={user ? <Navigate to="/login" replace /> : <Confirmed />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
