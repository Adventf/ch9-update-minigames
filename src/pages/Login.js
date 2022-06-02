import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { auth } from "../services/firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      backHome();
    } catch (error) {
      console.log(error.message);
    }
  };

  let navigate = useNavigate();
  const backHome = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div className="register-box">
      <h1>LOG IN</h1>
      <Form>
        <FormGroup className="px-4">
          <Label for="Email">Email</Label>
          <Input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} name="loginEmail" type="email" autoComplete="email" required />
        </FormGroup>
        <FormGroup className="px-4">
          <Label for="Password">Password</Label>
          <Input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} name="loginPassword" type="password" autoComplete="password" required />
        </FormGroup>
        <Button className="btnAuth" onClick={login}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
