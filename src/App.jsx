import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import First from "./components/Test/First";
import Home from "./components/Home/Home";
import Subjects from "./components/SubjectList/Subjects";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          key="home"
          element={
            <>
              <Navbar color="bg-yellow-200"/>
              <div className="h-screen w-full max-w-full ">
                <Home/>
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
              <div className="bg-red-200 h-screen w-full max-w-full flex justify-center items-center">
                <First/>
              </div>
            </>
          }
        />
        <Route
          path="/subjects"
          key="subjects"
          element={
            <>
              <Navbar color="bg-indigo-400" />
              <div className="bg-indigo-300 h-full w-full max-w-full flex justify-center">
                <Subjects/>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
