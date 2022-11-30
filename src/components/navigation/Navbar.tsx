import {Link} from "react-router-dom"
const Navbar = () => {
  return (
   <div className="header">
   <div className="header__logo">
   <span className="header__logo_1" >Posts</span>
   <span className="header__logo_2">App</span>
</div>
    <div className='header-nav'>
      <nav>
      <Link to={"/users"}>Users</Link>
      <Link to={"/"}>Posts</Link>
      <Link to={"/contact"}>About us</Link>
      <Link to={"/users"}>Contact us</Link>
      </nav>
    </div>
    </div>
  )
}

export default Navbar