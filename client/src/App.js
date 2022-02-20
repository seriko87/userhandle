import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Error from './pages/Error';
import { GlobalContext } from './context/context';
import { useContext } from 'react';

function App() {
  const { user } = useContext(GlobalContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route
          path="forgot-password"
          element={!user ? <ForgotPassword /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
