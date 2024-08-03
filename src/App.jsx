import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import First from "./components/Test/First";
import Home from "./components/Home/Home";
import Subjects from "./components/SubjectList/Subjects";
import Footer from "./components/Footer/Footer";
import QuizState from "./components/context/QuizState";

const App = () => {
  return (
    <>
    <QuizState>
      <Routes>
        <Route
          path="/"
          key="home"
          element={
            <>
              <Navbar color="bg-yellow-200"/>
              <div className="h-screen w-full max-w-full ">
                <Home/>
              <Footer/>
              </div>
            </>
          }
        />
        <Route
          path="/test"
          key="test"
          element={
            <>
              <Navbar color="bg-red-400"/>
              <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center">
                <First/>
              </div>
              <Footer/>
            </>
          }
        />
        <Route
          path="/subjects"
          key="subjects"
          element={
            <>
              <Navbar color="bg-indigo-400" />
              <div className="bg-white h-full w-full max-w-full flex justify-center">
                <Subjects/>
              </div>
              <Footer/>
            </>
          }
        />
      </Routes>
      </QuizState>
    </>
  );
};

export default App;
