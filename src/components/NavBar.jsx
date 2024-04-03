import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();

  const { loggedIn, login, logout } = useContext(AuthContext)
  console.log(loggedIn)

  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>
        {loggedIn ? (
          <div>
            <button
              type="button"
              onClick={logout}
            >
              Log out
            </button>
          </div>
        ) :
        (
          <div>
            <button
              type="button"
              onClick={login}
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => navigate('/signup')}
            >
              Registreren
            </button>
          </div>
        )}
    </nav>
  );
}

export default NavBar;