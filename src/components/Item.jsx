import React from 'react'
import { useState, useRef } from 'react'
import {AiFillDelete, AiFillEdit, AiFillSave} from "react-icons/ai"

function Item({ data, onRemove, onUpdate }) {

  const [editEnable, seteditEnable] = useState(false)

  const nameRef = useRef();
  const descriptionRef = useRef();
  const timeRef = useRef();

  function toggleeditEnable() {
    seteditEnable(editEnable => !editEnable)
  }

  function handleSave() {
    seteditEnable(false);
    onUpdate({
      title: nameRef.current.value,
      description: descriptionRef.current.value,
      completetime: timeRef.current.value
    });

  }

  function formatTime(date) {
    if (!date) {
      return ("No time choosen.")
    } 
    var minute = date.slice(date.indexOf(":"))
    var hour = date.slice(0, date.indexOf(":"))
    if (hour == 0) {
      hour = 0
      hour += 12
      date = hour + minute
      return(date + "AM")
    }
    if (hour == 12) {
      date = hour + minute
      return(date + "PM")
    }
    if (hour > 12) {
      hour -= 12
      date = hour + minute
      return (date + "PM")
    } else {
      date += "AM"
      return (date)
    }
  }

  return (
    <div className='flex flex-row w-6/12 h-auto bg-slate-200 dark:bg-stone-700 mb-5 rounded-lg shadow-md'>
      <div className='flex flex-col ml-3 pt-2 w-[310px]'>
      {editEnable ? (
        <>
          <input className='text-xl p-1 rounded-lg font-medium focus:ring-2 ring-blue-500 outline-none' type="text" defaultValue={data.title} ref={nameRef} />
          <textarea className='mt-2 mb-2 p-1 text-md rounded-lg focus:ring-2 ring-blue-500 outline-none' type="text" defaultValue={data.description} ref={descriptionRef} />
        </>
      ) : (
        <>
          <p className='text-xl p-1 font-medium dark:text-stone-100'>{data.title}</p>
          <p className='mt-2 mb-2 p-1 text-md dark:text-stone-200'>{data.description}</p>
        </>
      )}
      </div>
      <div className='flex flex-col justify-center items-center ml-auto'>
        <p className='dark:text-stone-200'>Finish by:</p>
        {editEnable ? (
          <input className='mt-2 font-bold rounded-lg focus:ring-2 ring-blue-500 outline-none' type="time" defaultValue={data.completetime} ref={timeRef} />
        ) : (
          <p className='mt-2 font-bold dark:text-stone-50'>{formatTime(data.completetime)}</p>
        )}
      </div>

      <div className='flex flex-row ml-20 mb-1 items-end'>
        {!editEnable ? (
          <button className='bg-blue-500 hover:bg-blue-700 rounded-md p-2' onClick={toggleeditEnable}>
            <AiFillEdit/>
          </button>
        ) : (
          <button className='bg-yellow-500 hover:bg-yellow-700 rounded-md p-2' onClick={handleSave}>
            <AiFillSave/>
          </button>
        )}
        <button className='bg-red-500 hover:bg-red-700 rounded-md ml-2 p-2 mr-2' onClick={() => onRemove()} >
          <AiFillDelete/>
        </button>
      </div>
    </div>
  )
}

export default Item
