import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = () => {
    const [question,setQuestion] = useState(null)
    const [answer_a,setAnswer_a] = useState(null)
    const [answer_b,setAnswer_b] = useState(null)
    const [answer_c,setAnswer_c] = useState(null)
    const [answer_d,setAnswer_d] = useState(null)
    const func = async ()=>{
        const response = await fetch("https://quizapi.io/api/v1/questions?apiKey=j87NUPidsGhnLrWiOwqxD8kaGHulwIN98rUpltZg&limit=10&category=linux")
        const json = response.json()
        setQuestion(json[0].question)
        const answers = json[0].answers
        setAnswer_a(json[0].answers.answer_a)
        setAnswer_b(json[0].answers.answer_b)
        setAnswer_c(json[0].answers.answer_c)
        setAnswer_d(json[0].answers.answer_d)
    }
  return (
    <NoteContext.Provider
    value={{func,question,answer_a,answer_b,answer_c,answer_d}}
  >
    {props.children}
  </NoteContext.Provider>
  )
}

export default NoteState
