import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { getAuth } from "firebase/auth";
import app from "../services/firebase.config";


const Navbar = () => {
    const {user, logOutUser} = useContext(AuthContext);
    
  const auth = getAuth(app);


  const [photoURL, setPhotoURL] = useState("");
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user !== null) {
      const userPhotoURL = user.photoURL;
    const name = user.displayName;
    setUserName(name);
      setPhotoURL(userPhotoURL);
    } else {
      setPhotoURL("");
      setUserName('')
    }
  }, [auth.currentUser]);




    const navLinks = <>
    
    <li><NavLink to='/'>Home</NavLink></li>
    {
        user && <> <li><NavLink to='/add'>Add to Cart</NavLink></li>
        <li><NavLink to='/mycart'>My cart</NavLink></li>
        </>
    }
    {
        !user && <> 
        <li><NavLink to='/login'>log In</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        </>
    }
    </>
    return (
        <div className="navbar bg-base-100 mb-12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLinks
        }
      </ul>
    </div>
    <a className="normal-case text-xl font-semibold">TechLand</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        navLinks
     }
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown md:hidden dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full mb-2">
        <img src={user? photoURL : "https://i.postimg.cc/KvTcMM1G/istockphoto-1300845620-612x612.jpg"} />
        </div>
        {
        user? <p className="mr-3">{userName}</p>: ''
      }
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>{
    user ? <p onClick={()=>logOutUser()}>Log Out</p> : <Link to='/login'>Log In</Link>
   }</li>
      </ul>
    </div>
  <div className="hidden md:block">
  <div className="flex flex-col md:flex-row items-center justify-center">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex mr-2">
        <div className="w-10 rounded-full">
          <img src={user? photoURL : "https://i.postimg.cc/KvTcMM1G/istockphoto-1300845620-612x612.jpg"} />
        </div>
      </label>
      {
        user? <p className="mr-3">{userName}</p>: ''
      }
   {
    user ? <button className="btn" onClick={()=>logOutUser()}>Log Out</button> : <Link className="btn" to='/login'>Log In</Link>
   }
  </div>
  </div>
  </div>
</div>
    );
};

export default Navbar;