import React, { useState } from 'react'
import Home from './Home';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername('');
        setPassword('');
        setIsLoggedIn(false);
        console.log('Username:', username);
        console.log('Password:', password);
    };


    return (
        <>
        {isLoggedIn ? (
            <section className='mt-5 mb-5'>
                <div className="container">
                    <div className="login_form pt-5 pb-5">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src="./image/login.jpg" style={{ width: '100%' }} alt="" />
                            </div>
                            <div className="col-6">
                                <h2 className='fw-bold mb-5'>Login</h2>
                                <form action="#" onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                                    <div>
                                        <label htmlFor="username">Username/Email:</label>
                                        <input
                                            type="text"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button type="submit">Login</button>
                                        <button>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ):(
                <>
                <Home />
                </>
            )}
        </>
    )
}


export default Login