import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices';
import { toast } from 'react-toastify';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleLogin = async() => {
        //Validate
        const isValidEmail = validateEmail(email);

        if(!isValidEmail) {
            toast.error("Invalid Email")
            return;
        }

        if(!password) {
            toast.error("Invalid Password")
            return;
        }

        let data = await postLogin(email, password);
        
        if(data && data.id != null){
            toast.success("Login Success");
            navigate('/');
        }else{
            toast.error("Login Error");
        }
    }

    return (
        <div className="container-fluid login-container">
            <div className="header text-end">
                <span>Don't have an account yet?</span>
                <button 
                    className="btn btn-sm btn-outline-dark mx-2"
                    onClick={() => navigate('/register')}
                >Sign up</button>
            </div>

            <div className="title text-center">
                Login
            </div>

            <div className="welcome text-center">
                Hello, who’s this?
            </div>

            <div className="content-form col-sm-6 col-lg-3 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <span className="forgot-password">Forgot Password?</span>
                <div>
                    <button 
                        className="btn-submit btn btn-dark"
                        onClick={() => handleLogin()}
                    >
                        Log in
                    </button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate('/') }}>&lt;&lt; Go to homepage</span>
                </div>
            </div>
        </div>
    )

}
export default Login;