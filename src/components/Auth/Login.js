import "./Login.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {postLogin} from "../services/apiService"
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isShowPassword,setIsShowPassword] =useState(false)

    const dispatch = useDispatch();

    const valideteEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async(e) => {
        e.preventDefault()

        // validate
        const isValidEmail = valideteEmail(email);

        if (!isValidEmail) {
          toast.error("Invalid email");
          return;
        }
    
        if (!password) {
          toast.error("Invalid password");
          return;
        }
        // subimit api
        let data = await postLogin(email,password)
        console.log(data,data.EC);
        if(data && data.EC ===0){
            dispatch(doLogin(data));
            toast.success(data.EM);
            navigate('/')
        } 

        if(data && +data.EC !== 0 ){
            toast.error(data.EM)
        }

    }


    return (
        
        <div className="login-container">
            <div className="header">
                <div>
                    Don't have an account yet?
                    <Link to="/register" className="btn sign-up" >Sign up</Link>
                </div>
            </div>
            <div className="content">
                <div className="title">
                    Typeform
                    {/* <img src={logo}/> */}
                </div>
                <div className="welcome">
                    Hello, who’s this?
                </div>
                <div className="content-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="nphuong.1841@gmail.com"
                                email={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div className="input-password">    
                                        <Form.Control
                                            type={isShowPassword ? "text" : "password"}
                                            placeholder="At least 8 characters"
                                            password={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {isShowPassword ? 
                                        <span className="icon-eye" onClick={()=>setIsShowPassword(false)}>
                                        < AiFillEye/>
                                    </span>
                                    :
                                    <span className="icon-eye" onClick={()=>setIsShowPassword(true)}>
                                        <AiFillEyeInvisible />
                                    </span>
                                    }
                                    </div>
                                </Form.Group>
                                    
                        <p className="forgot">Forgot password?</p>
                        <Button onClick={(e) => handleLogin(e)} className="w-100" variant="dark" type="submit">
                            Log in to Typeform
                        </Button>
                    </Form>
                </div>
                <div className="back">
                    <span onClick={()=>{navigate("/")}}>&#60;&#60; Go to Home Page</span>
                </div>
            </div>
        </div>
    )
}

export default Login;