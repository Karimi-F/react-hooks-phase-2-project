import React from "react";
import "../Styles/Login.css"

function Login(){

const [username, setUsername] = React.useState('');
const [password, setPassword] = React.useState('');
// const [error, setError] = React.useState('');

function handleUsernameChange(event){
    setUsername(event.target.value);
}

function handlePasswordChange(event){
    setPassword(event.target.value);
}

function handleSubmit (event){
    event.preventDefault();
}

// if(!username || !password){
//     setError('Please enter both username and password.');
//     return;
// }

// if (username === 'user' && password === 'password'){
//     setError('');
//     alert('Login Succeful');
// }else{
//     setError('You\'ve entered the wrong username or password. Try again.');
// }

    return(
        <>
        <div className="login">
            
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-area-container">
                <div className="form-area">
                <label>Username: </label>
                <input
                type="text"
                className="input-area"
                // value={}
                placeholder="Enter your username"
                onChange={handleUsernameChange}
                required
                />
                </div>
                <div className="form-area">
                <label>Password: </label>
                <input
                type="text"
                className="input-area"
                // value={}
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                required
                />
                </div>
                </div>
                
                <div className="submit-btn-container" >
                <button className="submit-btn" type="submit">Login</button>
                </div>
                
            </form>
            </div>
            <p className="welcome">Yaaaaaay! Welcome back! Your flashcards missed you.</p>
        </>
        
    )
}

export default Login;