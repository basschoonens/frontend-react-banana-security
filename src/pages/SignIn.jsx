import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const {login} = useContext(AuthContext);
    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form>
                <label htmlFor="username">Gebruikersnaam</label>
                <input type="text" id="username" name="username" required/>
                <label htmlFor="password">Wachtwoord</label>
                <input type="password" id="password" name="password" required/>
                <button>Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;