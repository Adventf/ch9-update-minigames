import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase-config";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./pages/Home/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Editprofile from "./pages/Editprofile.js";
import GameList from "./pages/GameList";
import GameDetail from "./pages/GameDetail/GameDetail";
import GameSuit from "./pages/GameSuit/GameSuit";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import InputScore from "./pages/Leaderboard/InputScore";

export const UserContext = createContext();

function App() {
  const [username, setUsername] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setUsername(currentUser.email.toString());
    console.log("email sekarang " + currentUser.email.toString());
    console.log("user sekarang " + username);
  });

  return (
    <UserContext.Provider value={username}>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/editprofile" element={<Editprofile />} />
            <Route exact path="/gamelist" element={<GameList />} />
            <Route exact path="/gamedetail" element={<GameDetail />} />
            <Route exact path="/gamesuit" element={<GameSuit />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
            <Route exact path="/inputscore" element={<InputScore />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
