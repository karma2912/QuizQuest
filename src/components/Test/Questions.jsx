import React, { useEffect, useState } from "react";

const Questions = (props) => {

  return (
    <>
      <div className="flex justify-between m-12">
        <div className="question-part h-80 w-[70rem] bg-white rounded-2xl">
          <div className="question">
            <div className="p-1 font-medium text-xl">Question 1 of 10</div>
            <div className="mt-4 p-2 font-semibold">
              
            </div>
            <div />
            <div className="options mt-12 font-semibold">
              <div className="flex justify-around ">
                <div className="w-[18rem] border-2 p-2 mb-2 bg-red-300 rounded-2xl text-wrap">
                  A. 
                </div>
                <div className="w-[18rem] border-2 bg-red-300 p-2 mb-2 rounded-2xl text-wrap">
                  B. 
                </div>
              </div>
              <div className="flex justify-around">
                <div className="w-[18rem] border-2 bg-red-300 p-2 mb-2 rounded-2xl text-wrap">
                  C. 
                </div>
                <div className="w-[18rem] border-2 bg-red-300 p-2 mb-2 rounded-2xl text-wrap">
                  D. 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="circle bg-slate-400 w-[20rem] flex justify-center items-center">
          Circle Component
        </div>
      </div>
      {/* <button onClick={func}> click me!</button> */}
    </>
  );
};

export default Questions;
