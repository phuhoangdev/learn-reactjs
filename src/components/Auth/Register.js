import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiServices';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const Register = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleRegister = async() => {
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

        let data = await postRegister(email, password, username);
        
        if(data && data.id != null){
            toast.success("Register Success");
            navigate('/');
        }else{
            toast.error("Register Error");
        }
    }

    return (
        <div className="container-fluid register-container">
            <div className="header text-end">
                <span>Already have an account?</span>
                <button 
                    className="btn btn-sm btn-outline-dark mx-2"
                    onClick={() => navigate('/login')}
                >Log in</button>
            </div>

            <div className="title text-center">
                Register
            </div>

            <div className="content-form col-sm-6 col-lg-3 mx-auto">
                <div className="form-group">
                    <label>Email (*)</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="form-group pass-group">
                    <label>Password (*)</label>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-control" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {showPassword ? 
                        <span 
                            className="icons-eye"
                            onClick={() => setShowPassword(false)}
                        >
                            <VscEye />
                        </span>
                        : 
                        <span 
                            className="icons-eye"
                            onClick={() => setShowPassword(true)}
                        >
                            <VscEyeClosed />
                        </span>
                    }
                    
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div>
                    <button 
                        className="btn-submit btn btn-dark"
                        onClick={() => handleRegister()}
                    >
                        Create a account
                    </button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate('/') }}>&lt;&lt; Go to homepage</span>
                </div>
            </div>
        </div>
    )

}
export default Register;