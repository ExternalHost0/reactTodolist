import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NewTodo from './components/NewToDo'

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='flex flex-col items-center w-full h-full p-5'>
        <NewTodo/>
      </div>
    </div>
  )
}

export default App
