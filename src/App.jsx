// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './index.css'
import CrossIcon from './components/icons/CrossIcon.jsx'
import MoonIcon from './components/icons/MoonIcon.jsx'

function App() {
  

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen bg-gray-300">
      <header className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1
            className="uppercase text-3xl font-semibold text-white tracking-[0.3em]">Todos</h1>  
          <button><MoonIcon fill={''}/></button>
        </div>
       
        <form
          className="flex bg-white rounded-md overflow-hidden py-4 px-4 gap-4 items-center my-3">
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input type="text" className="w-full text-gray-400 ourline-none" placeholder="create new todo" />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md">
        <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
          <button  className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className="text-gray-600 grow">complete online javascript</p>
          <button className="flex-none "><CrossIcon/></button>
        </article>
        <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
          <button  className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className="text-gray-600 grow">complete online javascript</p>
          <button className="flex-none "><CrossIcon/></button>
        </article>
        <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
          <button  className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className="text-gray-600 grow">complete online javascript</p>
          <button className="flex-none "><CrossIcon/></button>
        </article>
        <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
          <button  className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className="text-gray-600 grow">complete online javascript</p>
          <button className="flex-none "><CrossIcon/></button>
        </article>
        <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
          <button  className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className="text-gray-600 grow">complete online javascript</p>
          <button className="flex-none "><CrossIcon/></button>
        </article>
        <section className="py-4 mx-4 flex justify-between">
          <span className="text-gray-400">5 items left</span>
          <button className="text-gray-400">clear completed</button>
        </section>
        </div>
        
      </main>
      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center bg-white rounded-md p-4 gap-4">
          <button className="text-blue-600">all</button>
          <button className="hover:text-blue-600">active</button>
          <button className="hover:text-blue-600">completed</button>
        </div>
         
        </section>
        <p className="text-center py-4">drag and drop later</p>
    </div>
  )
}

export default App
