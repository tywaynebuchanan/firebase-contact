import React,{useEffect, useState} from 'react'
import { Link,useLocation} from 'react-router-dom'

const Navbar = () => {
    const [isActive,setisActive] = useState("Home")
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname === "/"){
            setisActive("Home")
        }else if(location.pathname === "/about"){
            setisActive("About")
        }else if(location.pathname === "/add"){
            setisActive("Add Contact")
        }
    },[location])

    
    const navitems = [

        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Add Contact",
            path: "/add"
        },
        
        {
            id: 3,
            name: "About",
            path: "/about"
        },
    ]
  return (
    <nav className="navbar is-ligh" role="navigation" aria-label="main navigation">
    <div className="container">
    <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        {
            navitems.map(link=>(
                <Link to ={link.path} key = {link.id} className={`button ${isActive === link.name ? "is-info" : "is-light"}`}
                onClick = {()=>setisActive(link.name)}
                >
                  {link.name}
            </Link>     
            ))
        }
       
        </div>
      </div>
    </div>


  </div>
    </div>
 
</nav>
  )
}

export default Navbar