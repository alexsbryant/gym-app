import React from 'react';

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center text-center justify-center max-w-[800px] w-full mx-auto p-6'>
      <div className='flex flex-col gap-4'>
        <p>It's time to commit to...</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>GYM<span className='text-blue-400'>THEORY</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowledge that I may become <span className='text-blue-400 font-medium'>unbelievably swolnormous</span> and accept all risks of becoming the <span className='text-blue-400 font-medium'>biggest and best </span> version of myself, regardless of whether I can fit through doors any longer or not.</p>
      <button className='px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-150 hover:cursor-pointer'><p>Accept & Begin</p></button>
    </div>
  )
}

export default Hero;