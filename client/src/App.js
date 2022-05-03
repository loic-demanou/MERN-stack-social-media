import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./components/profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

  const {user} = useContext(AuthContext);

  return (
    <Router>
      {/* <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes> */}
      
      <Routes>
        <Route exact path="/" element={user ? <Home/> : <Login/> } />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login/>} />
        <Route path="/register" element={user ? <Navigate to={"/"} /> :<Register/>} />
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
