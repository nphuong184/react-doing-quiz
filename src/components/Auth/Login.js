import "./Login.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
// import logo from "./../../../public/download.svg"

const Login = (props) => {
    const [email,setEmail] = useState();
    const [password,setPassword] =useState();
    
    const handleLogin = () =>{
        alert("login")
    }

    return (
        <div className="login-container">
            <div className="header">
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
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                             type="password" placeholder="At least 8 characters" 
                             password={password}
                             onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <p className="forgot">Forgot password?</p>
                        <Button onClick={()=>handleLogin()} className="w-100" variant="dark" type="submit">
                            Log in to Typeform
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;