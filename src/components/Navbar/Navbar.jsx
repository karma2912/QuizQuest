import React from "react";
import img from "./qlogo.jpg"
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <header className={`text-black w-full body-font ${props.color} position sticky top-0 z-40`}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={img}
              className="w-9 h-9 text-white rounded-full"
            />            
            <span className="ml-3 text-xl">QuizQuest</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
            <Link className="mr-10 ml-10 hover:text-gray-900" to="/">Home</Link>
            <Link className="mr-10 ml-10 hover:text-gray-900" to="/subjects" >Subjects</Link>
            <Link className="mr-10 ml-10 hover:text-gray-900" to="/test">Test</Link>
            <Link className="mr-10 ml-10 hover:text-gray-900">Help</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mr-2 md:mt-0">
            Login
          </button>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 ml-2 md:mt-0">
            Register
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
