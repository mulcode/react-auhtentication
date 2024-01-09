import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  let isLoggedIn = localStorage.getItem('userLoggedIn');

  useEffect(() => {
      if(!isLoggedIn) {
        navigate('/login');
      }
    });
  
  return (
    <div>
      <h1>This is Home Page</h1>
       </div>
  )
}

export default Home