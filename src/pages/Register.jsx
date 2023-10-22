import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {

const {registerUser,updateUser}= useContext(AuthContext);





    const handleRegister = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo,email,password)
        registerUser(email,password).then(result=>{
            console.log(result.user)
            updateUser(name,photo)
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="lg:w-2/6 md:w-1/2 mx-auto max-w-7xl min-h-screen ">
        <div className="hero-content">
          <div className="card w-full shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Url of your photo" name="photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center mb-10">Already Have An Account ? <Link className="text-blue-600 font-bold" to='/login'>Log In </Link>here</p>
          </div>
        </div>
      </div>
    );
};

export default Register;