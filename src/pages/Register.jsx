import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";

const Register = () => {
  const { registerUser, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:;<>,.?~]).{6,}$/;

    if (password.length < 6) {
      Swal.fire("Error!", "Password Must be 6 character or more", "warning");
      return;
    } else if (!passwordRegex.test(password)) {
      Swal.fire(
        "Error!",
        "Password should have at least one Capital letter and one Special character",
        "warning"
      );
      return;
    }
    // register or create an user

    registerUser(email, password)
      .then((result) => {
        Swal.fire(
          "Success!",
          "User registered successfully",
          "success"
        );
        console.log(result.user);
        updateUser(name, photo);
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="lg:w-2/6 md:w-1/2 mx-auto max-w-7xl min-h-screen ">
      <Helmet>
          <title>TechLand || Register</title>
        </Helmet>
      <div className="hero-content">
        <div className="card w-full shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Url of your photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-10">
            Already Have An Account ?{" "}
            <Link className="text-blue-600 font-bold" to="/login">
              Log In{" "}
            </Link>
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
