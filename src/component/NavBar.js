import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledCollapse, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase-config";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
    backHome();
  };

  let navigate = useNavigate();
  const backHome = () => {
    let path = `/`;
    navigate(path);
  };

  const renderAuthButton = () => {
    console.log("nav user:" + user);
    if (user == null) {
      return (
        <div class="navAuth">
          <NavItem className="px-2">
            <Link to="/login">LOGIN</Link>
          </NavItem>
          <NavItem className="text-center text-md-right">
            <Link to="/register">REGISTER</Link>
          </NavItem>
        </div>
      );
    } else {
      return (
        <div class="navAuth">
          <NavItem className="px-2">
            <Link to="/profile">Welcome, {user?.email}</Link>
          </NavItem>
          <NavItem className="text-center text-md-right">
            <Link to="/" onClick={logout}>
              LOGOUT
            </Link>
          </NavItem>
        </div>
      );
    }
  };

  return (
    <Navbar className="navbar" dark expand="lg">
      <NavbarBrand href="/">LOGO</NavbarBrand>
      <NavItem className="px-2 list-unstyled">
        <Link to="/leaderboard">LEADERBOARD</Link>
      </NavItem>
      <NavbarToggler id="toggler" />
      <UncontrolledCollapse toggler="#toggler" navbar>
        <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
          {renderAuthButton()}
        </Nav>
      </UncontrolledCollapse>
    </Navbar>
  );
};

export default NavBar;
