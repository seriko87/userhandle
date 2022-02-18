import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ForgotPassword from './pages/forgotPass/ForgotPassword';
import Home from './pages/home/Home';
import Error from './pages/error/Error';

function App() {
  const currentUser = true;
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="register"
          element={!currentUser ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="login"
          element={!currentUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="forgot-password"
          element={!currentUser ? <ForgotPassword /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
