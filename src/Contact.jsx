import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let isLoggedIn = localStorage.getItem('userLoggedIn');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  })

  return (
    <div>Contact</div>
  )
}

export default Contact