import axios from "axios";
import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fname:"",
    email:"",
    pass :""
  })
 
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState();
  const navigate = useNavigate();

const handleSubmit = (e) =>{
  e.preventDefault();

  let isValid = true;
  let validationErrors = {}
  if(formData.fname ==="" || formData.fname ===null){
    isValid = false;
    validationErrors.fname = "user name required"
  }
  if(formData.email ==="" || formData.email ===null){
    isValid = false;
    validationErrors.email = "user email required"
  }
  if(formData.pass ==="" || formData.pass ===null){
    isValid = false;
    validationErrors.pass = "user password required"
  }
  setErrors(validationErrors)
  setValid(isValid)

  if(Object.keys(validationErrors).length == 0){
    axios.post('http://localhost:3000/users',formData)
    .then(result=> {
      alert("Registered Successfully")
      navigate('/login')
      console.log(result);
    })
    .catch(error => console.log(error))
  }
}


  return (
    <div>
      <h2>  Registration Form</h2>
      {
        valid ? <></>:
        <span className="err">{errors.fname} {errors.email} {errors.pass}</span>
      }
        <form onSubmit={handleSubmit} >
            <label htmlFor="text">User Name : </label>
            <input type="text" name="fname" placeholder="enter user name" onChange={(e)=>setFormData({...formData,fname:e.target.value})} /><br /><br />
            <label htmlFor="text">User Email : </label>
            <input type="text" name="email" placeholder="enter user email" onChange={(e)=>setFormData({...formData,email:e.target.value})} /><br /><br />
            <label htmlFor="password">User Password : </label>
            <input type="password" name="pass" placeholder="enter user password" onChange={(e)=>setFormData({...formData, pass:e.target.value})} /><br /><br />
            <button>Register</button>
        </form>
        <p>Already have an Account ? Please <Link to='/login' >Login</Link> </p>
        </div>
  )
}

export default RegistrationForm