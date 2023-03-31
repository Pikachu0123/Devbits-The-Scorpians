import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  
  
  const[Show,setShow]=useState();
  const { loginWithRedirect,isAuthenticated,isLoading,user,logout} = useAuth0();
  return (
    <div>
        <section className="navbar-ng">
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <a class="navbar-brand" href="#">Stocksby</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    onClick={()=>setShow(!Show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${Show?"Show":""}`} id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
      </ul>
      {/* <li> */}
        <div>
        {isAuthenticated &&
        <p className="Loggi">{user.email}</p>}
        </div>
      {/* </li> */}
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <Link to='/Register'> */}
          {/* <button class="btn btn-outline-primary" type="submit">Sign up</button> */}
        {/* </Link> */}
        {/* <button class="btn btn-outline-primary" type="submit" onClick={() => loginWithRedirect()}>Log in</button> */}
        {isAuthenticated ?<button class="btn btn-outline-primary" type="submit" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>:        <button class="btn btn-outline-primary" type="submit" onClick={() => loginWithRedirect()}>Log in</button>
}
      </form>
    </div>
  </div>
</nav>
      </section>
    </div>
  );
};

export default Navbar;
