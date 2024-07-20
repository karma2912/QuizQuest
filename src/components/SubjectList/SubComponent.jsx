import React from 'react'

const SubComponent = (props) => {
  return (
   <>
   <div className="component h-90 w-3/4 text-black p-3 m-5 flex flex-col sm:flex-row  border-2 bg-indigo-400 border-indigo-500 rounded-2xl hover:w-5/6 hover:transition duration-300 hover:border-4 hover:shadow-2xl hover:border-indigo-500">
   <div>
    <img src={props.img} className='h-72'>
    </img>
   </div>
        <div className="font-bold p-3 text-2xl flex flex-col">
           {props.name}
          <div className="font-normal text-xl pt-3 pb-3">by-<span className='font-medium'>{props.teacher}</span></div>
          <div>
          </div>
        </div>
      </div>
   </>
  )
}

export default SubComponent
