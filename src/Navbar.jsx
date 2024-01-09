import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav">
            <Link to={'/'} >Home</Link>
            <Link to={'/about'} >About</Link>
            <Link to={'/contact'} >Contact</Link>
            {
                localStorage.getItem('userLoggedIn') ? <button onClick={() => { localStorage.removeItem('userLoggedIn'); window.location.replace('/')}} >Logout</button> :
                <Link to={'/login'} ><button>Login</button></Link>
            }
        </div>
    )
}

export default Navbar