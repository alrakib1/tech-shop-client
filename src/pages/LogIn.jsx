import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const LogIn = () => {

  const {signInUser, signInWithGoogle, updateUser  } = useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // sign in user

    signInUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // google signIN

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      
      const name = result.user.displayName;
      const photo = result.user.photoURL;
      updateUser(name,photo)
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/6 mx-auto max-w-7xl min-h-screen">
        <div className="hero-content">
          <div className="card w-full shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div
            className="flex justify-center items-center mb-4 bg-white w-3/4 mx-auto rounded-md cursor-pointer border"
            onClick={handleGoogleSignIn}
          >
            <img
              className="w-[30px] mr-2"
              src="https://i.ibb.co/pxk7F8v/Google-Icons-09-512.webp"
              alt=""
            />
            <p className="text-black font-semibold"> Sign in with Google</p>
          </div>
          <p className="text-center mb-6">
            New Here ?{" "}
            <Link className="text-blue-600 font-bold" to="/register">
              Register
            </Link>{" "}
            now
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
