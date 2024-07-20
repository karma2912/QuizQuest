import React from 'react'
import TimeSubmit from './TimeSubmit'
import Questions from './Questions'
import Progress from './Progress'

const Second = () => {
  return (
    <>
    <div className='h-5/6 w-11/12 bg-red-400 rounded-2xl'>
    <TimeSubmit/>
    <Questions />
    <Progress/>
    </div>
    </>
  )
}

export default Second
