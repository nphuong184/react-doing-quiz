import "./Login.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {postLogin} from "../services/apiService"
import { toast } from "react-toastify";

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async(e) => {
        e.preventDefault()

        // validate

        // subimit api
        let data = await postLogin(email,password)
        console.log(data,data.EC);
        if(data && data.EC ===0){
            toast.success(data.EM)
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
                    <button className="sign-up">Sign up</button>
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
                            <Form.Control
                                type="password" placeholder="At least 8 characters"
                                password={password}
                                onChange={(e) => setPassword(e.target.value)} />
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