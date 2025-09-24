import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Frontend from './sections/Frontend'
import Art from './sections/Art'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />

      <section className='min-h-screen' />
      <section className='min-h-screen' />
      <Frontend />
      <Art />
      <section className='min-h-screen' />
      <section className='min-h-screen' />


    </div>
  )
}

export default App