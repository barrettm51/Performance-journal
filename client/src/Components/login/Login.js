
function Login({ handleLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const { email } = e.target.elements;

        handleLogin(email.value);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <label>Email Address (no password required):</label>
                <input type="email" name="email" id="email" placeholder="ex: yourname@email.com"></input>
                <input type="submit" value="Login" ></input>
            </form>
        </div>
    );
}

export default Login;