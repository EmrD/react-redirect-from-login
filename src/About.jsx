import { useState, useEffect } from "react";

function About() {
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const login = queryParams.get('login');
        if (login === 'true') {
            setLoginSuccessful(true);
        }
    }, []);

    const handleLogin = () => {
        window.location.href = "/login?redirect=about";
    }

    return (
        <>
            <div>
                About page
            </div>
            {loginSuccessful && (
                <div>Login Successful</div>
            )}
            {!loginSuccessful && (
                <button onClick={handleLogin} id="loginb">
                    Login
                </button>
            )}
        </>
    );
}

export default About;
