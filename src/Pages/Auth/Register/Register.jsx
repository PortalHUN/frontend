import './Register.scss';

const Register = ()=>{
    return (
        <div className="register">
            <form>
                <div className="input">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                </div>

                <div className="input">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email"/>
                </div>

                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password"/>
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
}



export default Register;