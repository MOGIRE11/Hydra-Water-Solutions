import { NavLink } from "react-router-dom"; 
function ErrorPage() {
  return (
    <div className="mt-16 min-h-screen">
      <h1 className="font-bold text-4xl text-center mb-2">Ooops !</h1>
      <h1 className="text-blue-800 text-4xl font-bold text-center mb-2 ">
        Nothing
      </h1>
      <h1 className="text-4xl font-bold text-black text-center">
        Here <span className="text-green-500">...</span>
      </h1>
      <p className=" text-sm  lg:text-base  text-center w-1/2 mx-auto my-8">
        We can't seem to find the page you are looking for. Try going back to
        the previous page or contact us for more information.
      </p>

      <button className="bg-green-500 py-2 px-4 rounded-md text-center text-white mx-auto flex"> <NavLink to="/"> Go Back Home</NavLink>
      </button>
    </div>
  );
}

export default ErrorPage