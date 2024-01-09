import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const About = () => {
  let navigate = useNavigate();
  let isLoggedIn = localStorage.getItem('userLoggedIn');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  })

  return (
    <div>About</div>
  )
}

export default About