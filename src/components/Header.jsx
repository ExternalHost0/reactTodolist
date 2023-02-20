import React, { useEffect } from 'react'
import { useState } from 'react'
import { BsMoonFill, BsSunFill } from "react-icons/bs"

export default function Header() {
  const [darkmode, setDarkMode] = useState(false)
  
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  useEffect(() => {
    document.body.classList.toggle("dark", darkmode);
  }, [darkmode])

  return (
    <header className="flex flex-row w-full items-center p-5">
      <p className="text-4xl font-bold dark:text-white">The <span className='block underline transition-none'>Simple</span> Todo List</p>
      <div className='flex self-start ml-auto items-center'>
        <button className='ml-auto hover:drop-shadow-md' onClick={toggleDarkMode}>
          {darkmode ? (
            <BsMoonFill size={25} className="fill-white"/>
          ) : (
            <BsSunFill size={30} className="fill-black"/>
          )}
        </button>
        <p className="text-xl ml-10 mr-5 self-center dark:text-white">By Hayden &rarr; </p>
        <a className="self-start " href='https://github.com/ExternalHost0' target="/">
          <img className="w-16 rounded-2xl hover:ring-[3px] hover:ring-offset-2 ring-0 ring-orange-500 ring-offset-0 ring-offset-gray-100 dark:ring-offset-stone-900" src='https://avatars.githubusercontent.com/u/60586305?v=4'/>
        </a>
      </div>
    </header>
    
  )
}
