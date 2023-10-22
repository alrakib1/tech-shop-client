
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-7xl mx-auto">
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div className="flex flex-col items-center space-y-4">
        <img className="w-2/4" src="../images/error.svg" alt="error" />
        <NavLink to="/">
          <p className="mt-8 text-center bg-gray-500 hover:bg-blue-600 p-2 rounded-md text-white  mx-auto">Please Go Back</p>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
