import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page" >
            <h1>Droom</h1>
            <h2>Find Your Droom Job!</h2>
            <div className="links">
                <Link>Sign In</Link>
                <Link to="/onboarding" >Register</Link>
            </div>
        </div>
    )
}

export default LandingPage;