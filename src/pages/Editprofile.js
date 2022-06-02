import React, { useState, useEffect, useContext } from "react";
import { db } from '../services/firebase-config';
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import "../Profile.css"

const Editprofile = () => {
  
  const loginUsername = useContext(UserContext)
  const [curUser, setCurUser] = useState({})
  const [curEmail, setCurEmail] = useState("")
  const [curPassword, setCurPassword] = useState("")

  const usersCollectionRef = collection(db, "users")


    const updateUser = async (id) => {
        const userDoc = doc(db, "users", id)
        if(curEmail!==""){
          const newEmail = { email: curEmail }
          await updateDoc(userDoc, newEmail)
        }
        if(curPassword!==""){
          const newPassword = { password: curPassword }
          await updateDoc(userDoc, newPassword)
        }
        else {
          alert("Invalid entry")
        }
    }

    useEffect(() => {
      const getUsers= async () => {
          const data = await getDocs(usersCollectionRef)
          let allUsers = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
          setCurUser(allUsers.find(x => x.email == loginUsername))
      }
      getUsers()
    }, [])
    
  //   const handleChange = (e) => {
  //     e.preventDefault();
  //     let target = e.target;
  //     let value = target.value;

  //     setCurEmail(value)
  //     console.log(curEmail);
  // };


    return (
      <div className="container">
        <form className="profileCard">
          <h1 className="profileTitle">Username: {curUser.username}</h1>
          <div className="profileText mt-5">
            <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input 
              type="text" 
              name="email" 
              placeholder={curUser.email} 
              value={curEmail}
              // onChange={(e) => handleChange(e)}
              onChange={(e) => {setCurEmail(e.target.value)}}
              />
          </div>
          <div className="profileText mt-2 mb-5">
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              placeholder="*****" 
              value={curPassword}
              // onChange={(e) => handleChange(e)}
              onChange={(e) => {setCurPassword(e.target.value)}}
              />
          </div>

          <div className="btnContainer">
            <Link to="/profile">
              <button className="profileButton" onClick={()=>{updateUser(curUser.id)}}>Submit</button>
            </Link>
          </div>
        </form>
      </div>
    );
  };
  export default Editprofile;
  