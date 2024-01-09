/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        pass: ""
    })

    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        let validationErrors = {}
        if (formData.email === "" || formData.email === null) {
            isValid = false;
            validationErrors.email = "user email required"
        }
        if (formData.pass === "" || formData.pass === null) {
            isValid = false;
            validationErrors.pass = "user password required"
        }
        axios.get('http://localhost:3000/users')
            .then(result => {
                result.data.map(user => {
                    if (user.email === formData.email) {
                        if (user.pass === formData.pass) {
                            alert("Login Successfully")
                            navigate('/')
                            localStorage.setItem('userLoggedIn', true);
                        } 
                    }else {
                        isValid = false;
                        validationErrors.pass = "Incorrect password"
                    }
                })
            })
        setErrors(validationErrors)
        setValid(isValid)
    }
    
    return (
        <div>
            <h2>LoginForm</h2>
            {
                valid ? <></> :
                    <span className="err">{errors.email} {errors.pass}</span>
            }
            <form onSubmit={handleSubmit} >
                <label htmlFor="text">Email : </label>
                <input type="text" name="email" placeholder="enter user email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} /><br /><br />

                <label htmlFor="password">Password : </label>
                <input type="password" name="pass" placeholder="enter user password" onChange={(e) => setFormData({ ...formData, pass: e.target.value })} /><br /><br />

                <button>Login</button>
            </form>
            <p>Don't have an Account ? Please <Link to='/register' >Sign Up</Link> </p>
        </div>
    )
}

export default LoginForm