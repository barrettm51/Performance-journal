
function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Email Address (no password required):</label>
                <input type="email" name="email" id="email" placeholder="ex: yourname@email.com"></input>
                <input type="submit" value="Login" ></input>
            </form>
        </div>
    );
}

export default Login;