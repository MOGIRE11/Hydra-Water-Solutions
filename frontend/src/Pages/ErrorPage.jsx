import { Link } from "react-router-dom"; 

function ErrorPage() {
  return (
    <div className="mt-16 min-h-[80vh] flex items-center flex-col justify-center max-w-[1440px] mx-auto">
      <h1 className="font-bold text-4xl text-center mb-2">Ooops !</h1>
      <h1 className="text-blue-800 text-4xl font-bold text-center mb-2 ">
        Nothing
      </h1>
      <h1 className="text-4xl font-bold text-black text-center">
        Here <span className="text-green-500">...</span>
      </h1>
      <p className=" text-sm  lg:text-base  text-center w-1/2 mx-auto my-8">
        We can&apos;t seem to find the page you are looking for. Try going back
        to the previous page or contact us for more information.
      </p>

      <button className="bg-green-500 py-2 px-6 rounded-md  text-white mx-auto flex items-center justify-evenly">
        <i className="fa-solid fa-arrow-left-long mr-2"></i>
        <Link to="/"> Go Back Home</Link>
      </button>
    </div>
  );
}

export default ErrorPage