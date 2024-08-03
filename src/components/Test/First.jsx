import React, { useContext, useEffect } from 'react'
import Second from './Second'
import QuizState from '../context/QuizState'
import QuizContext from '../context/QuizContext'

const First = () => {
  const context = useContext(QuizContext)
  const {question,answer_a,answer_b,answer_c,answer_d,delayedFunction} = context
 const i = 0;
 useEffect(()=>{
  delayedFunction(i)
 },[])
 console.log(question)
  return (
    <>
    <Second/>
    </>
  )
}

export default First
