import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../services/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../services/firebase-config";
import "./Pages.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { email: email, password: password, rank: 0, score: 0, username: username });
    register(email, password);
    routeChange();
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };

  return (
    <div className="register-box">
      <h1>REGISTER</h1>
      <Form>
        <FormGroup className="px-4">
          <Label for="Username">Username</Label>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} name="username" type="string" autoComplete="username" required />
        </FormGroup>
        <FormGroup className="px-4">
          <Label for="Email">Email</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" autoComplete="email" required />
        </FormGroup>
        <FormGroup className="px-4">
          <Label for="Password">Password</Label>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" autoComplete="password" required />
        </FormGroup>
        <Button className="btnAuth" onClick={createUser}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
