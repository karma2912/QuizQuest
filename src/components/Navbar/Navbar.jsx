import React, { useState } from "react";
import img from "./qlogo.jpg"
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [modal,setModal] = useState(false)
  const toggleButton =()=>{
    setModal(!modal)
  }
  return (
    <>
      <header className={`text-black w-full body-font ${props.color} position sticky top-0 z-40 md:h-[5rem] h-[4rem]`}>
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex justify-between title-font font-medium items-center w-full text-gray-900 md:mb-0">
            <div className="flex justify-center p-3 items-center">
            <img src={img}
              className="w-9 h-9 text-white rounded-full"
            />            
            <span className="ml-3 text-xl">QuizQuest</span>
            </div>
            <i className="fa-solid fa-bars text-xl p-4" onClick={toggleButton}></i>
         </a>
         {modal && 
           <div className={`text-black w-full body-font ${props.color} position sticky top-0 z-40 h-[12rem] `}>
            <nav className="flex flex-col text-lg font-serif items-start p-3 w-full">
            <Link className="pb-1 mb-2 pl-2 border-l-2 border-b-2 border-black w-full hover:text-gray-900 " to="/">Home</Link>
            <Link className="pb-1 mb-2 pl-2 border-l-2 border-b-2 border-black w-full hover:text-gray-900 " >Subjects</Link>
            <Link className="pb-1 mb-2 pl-2 border-l-2 border-b-2 border-black w-full hover:text-gray-900 " to="/test">Test</Link>
            <Link className="pb-1 mb-2 pl-2 border-l-2 border-b-2 border-black w-full hover:text-gray-900 ">Help</Link>
          </nav>
          </div>}
          <nav className="md:ml-auto md:mr-auto md:flex hidden flex-wrap items-center text-base justify-center font-bold">
            <Link className="mr-10 ml-10 hover:text-gray-900" to="/">Home</Link>
            <Link className="mr-10 ml-10 hover:text-gray-900" to="/subjects" >Subjects</Link>
            <Link className="mr-10 ml-10 hover:text-gray-900" to="/test">Test</Link>
            <Link className="mr-10 ml-10 hover:text-gray-900">Help</Link>
          </nav>
          <button className="md:inline-flex hidden items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mr-2 md:mt-0">
            Login
          </button>
          <button className="md:inline-flex hidden items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 ml-2 md:mt-0">
            Register
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
