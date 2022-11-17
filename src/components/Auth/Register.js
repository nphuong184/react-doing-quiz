import "./Register.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../services/apiService"
import { toast } from "react-toastify";
import { Col, Row } from "react-bootstrap";
import signupPage from "../../assets/sign-up-page.svg"
import { BsEye,BsEyeSlash } from 'react-icons/bs';
const Register = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isShowPassword,setIsShowPassword] =useState(false)

    const valideteEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async (e) => {
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
        let data = await postRegister(username, email, password)
        console.log(data, data.EC);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM)
        }

    }


    return (

        <div className="register-container">
            <Row>
                <Col lg={5} className="signup-left">
                    <p className="title">Sign up <br /> and come on in</p>
                    <img src={signupPage} />
                </Col>
                <Col lg={7} className="signup-right">
                    <div className="header">
                        <div>
                            Already have an account?
                            <Link to='/login' className="sign-up">Log in</Link>
                        </div>
                    </div>
                    <div className="content">
                        <div className="title">
                            Typeform
                            {/* <img src={logo}/> */}
                        </div>
                        <div className="welcome">
                            Get better data with conversational forms, surveys, quizzes & more.
                        </div>
                        <div className="content-form">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Nguyen Phuong"
                                        username={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>
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
                                            // type="password"
                                            placeholder="At least 8 characters"
                                            password={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {isShowPassword ? 
                                        <span className="icon-eye" onClick={()=>setIsShowPassword(false)}>
                                        < BsEye/>
                                    </span>
                                    :
                                    <span className="icon-eye" onClick={()=>setIsShowPassword(true)}>
                                        <BsEyeSlash />
                                    </span>
                                    }
                                        
                                    </div>

                                </Form.Group>
                                <Button onClick={(e) => handleLogin(e)} className="w-100" variant="dark" type="submit">
                                    Create my account
                                </Button>
                            </Form>
                        </div>
                        <div className="back">
                            <span onClick={() => { navigate("/") }}>&#60;&#60; Go to Home Page</span>
                        </div>
                    </div></Col>
            </Row>
        </div>
    )
}

export default Register;