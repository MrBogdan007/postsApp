import {Link, useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate()
  const navigatePost = () => {
    navigate('/posts')
  }
  return (
   <div className="header">
   <div onClick={navigatePost} className="header__logo">
   <span className="header__logo_1" >Posts </span> 
   <span className="header__logo_2"> App</span>
</div>
    <div className='header-nav'>
      <nav>
      <Link to={"/users"}>Users</Link>
      <Link to={"/posts"}>Posts</Link>
      <Link to={"/about"}>About us</Link>
      <Link to={"/contact"}>Contact us</Link>
      </nav>
    </div>
    </div>
  )
}

export default Navbar