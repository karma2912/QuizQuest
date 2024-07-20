import React, { useEffect, useState } from "react";

const Questions = () => {

  const [questions,setQuestions] = useState([])
  const [answer_a,setAnswer_a] = useState([])
  const [answer_b,setAnswer_b] = useState([])
  const [answer_c,setAnswer_c] = useState([])
  const [answer_d,setAnswer_d] = useState([])
  const [isActiveA,setIsActiveA] = useState(false)
  const [isActiveB,setIsActiveB] = useState(false)
  const [isActiveC,setIsActiveC] = useState(false)
  const [isActiveD,setIsActiveD] = useState(false)
  const func = async ()=>{
      const response = await fetch("https://quizapi.io/api/v1/questions?apiKey=j87NUPidsGhnLrWiOwqxD8kaGHulwIN98rUpltZg&limit=10&category=devops")
      const json = await response.json()
      setQuestions(json[0].question)
      const answers = await json[0].answers
      setAnswer_a(json[0].answers.answer_a)
      setAnswer_b(json[0].answers.answer_b)
      setAnswer_c(json[0].answers.answer_c)
      setAnswer_d(json[0].answers.answer_d)
      console.log(json[0].correct_answer)
      if(json[0].correct_answer === null){
        setIsActiveD(true)
      }
      if(json[0].correct_answer === "answer_a"){
        setIsActiveA(true)
      }
      if(json[0].correct_answer === "answer_b"){
        setIsActiveB(true)
      }
      if(json[0].correct_answer === "answer_c"){
        setIsActiveC(true)
      }
      if(json[0].correct_answer === "answer_d"){
        setIsActiveD(true)
      }
  }
  useEffect(()=>{
    func()
    // setIsActive(true)
  },[])

  return (
    <>
      <div className="flex justify-between m-12">
        <div className="question-part h-80 w-[70rem] bg-white">
          <div className="question">
            <div className="p-1 font-medium text-xl">Question 1 of 10</div>
            <div className="mt-4 p-2 font-semibold">
              {questions}
            </div>
            <div />
            <div className="options mt-12 font-semibold">
              <div className="flex justify-around ">
                <div className={`${isActiveA ? "w-[18rem] border-2 p-2 bg-green-300 mb-2 rounded-2xl text-wrap" : "w-[18rem] border-2 p-2 mb-2 bg-red-300 rounded-2xl text-wrap"}`}>
                  A. {answer_a}
                </div>
                <div className={`${isActiveB ? "w-[18rem] border-2 p-2 bg-green-300 mb-2 rounded-2xl text-wrap" : "w-[18rem] border-2 bg-red-300 p-2 mb-2 rounded-2xl text-wrap"}`}>
                  B. {answer_b}
                </div>
              </div>
              <div className="flex justify-around">
                <div className={`${isActiveC ? "w-[18rem] border-2 p-2 bg-green-300 mb-2 rounded-2xl text-wrap" : "w-[18rem] border-2 bg-red-300 p-2 mb-2 rounded-2xl text-wrap"}`}>
                  C. {answer_c}
                </div>
                <div className={`${isActiveD ? "w-[18rem] border-2 p-2 bg-green-300 mb-2 rounded-2xl text-wrap" : "w-[18rem] border-2 bg-red-300 p-2 mb-2 rounded-2xl text-wrap"}`}>
                  D. {answer_d}
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
