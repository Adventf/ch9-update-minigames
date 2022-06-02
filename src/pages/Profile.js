import React, { useState, useEffect, useContext } from "react";
import { db } from '../services/firebase-config';
import { collection, getDocs } from "firebase/firestore";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import "../Profile.css"


const Profile = () => {
  const loginUsername = useContext(UserContext)
  const [curUser, setCurUser] = useState({})
  const usersCollectionRef = collection(db, "users")
  
  useEffect(() => {
    const getUsers= async () => {
        const data = await getDocs(usersCollectionRef)
        let allUsers = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
        setCurUser(allUsers.find(x => x.email == loginUsername))
        console.log("loginusername "+ loginUsername)
    }
    getUsers()
  }, [])
  
  return (
    <div className="container">
      <form className="profileCard">
        <h1 className="profileTitle">Username: {curUser.username}</h1>
        <p className="profileText mt-5">Email: {curUser.email}</p>
        <p className="profileText">Score: {curUser.score}</p>
        <p className="profileText mb-5">Rank: {curUser.rank}</p>
        <div className="btnContainer">
          <Link to="/Editprofile">
            <button className="profileButton">Edit</button>
          </Link>
          <Link to="/leaderboard">
            <button className="profileButton">All Players</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Profile;
