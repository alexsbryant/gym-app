import React, { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/exercises.js'

function Header({ index, title, description }) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

const Generator = () => {

const [showModal, setShowModal] = useState(false)
const [poison, setPoison] = useState('individual')
const [muscles, setMuscles] = useState([])
const [goals, setGoals] = useState('strength_power')

function toggleModal() {
  setShowModal(!showModal)
}

useEffect(() => {
  console.log(`current type is: ${poison}`)
}, [poison])

  return (
    <section>
      <SectionWrapper
        header={"generate your workout"}
        title={["It's", "Work", "o'clock"]}
      >

          {/* SECTION ONE - SPLIT */}

        <Header
          index={'01'}
          title={'Pick your poison'}
          description={'Select the workout you wish to endure.'}
        />
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {Object.keys(WORKOUTS).map((type, typeIndex) => (
            <button 
              onClick={() => {
                setPoison(type)
              }}
              className={'bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg cursor-pointer' + (type === poison ? ' border-blue-600' : ' border-blue-400')} 
              key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_', " ")}</p>
            </button>
          ))}
        </div>

            {/* SECTION TWO - MUSCLES */}

        <Header
          index={'02'}
          title={'Choose your targets'}
          description={'Select the muscles to go to work on.'}
        />
        <div className='bg-slate-950 border border-solid border-blue-400 hover:border-blue-600 rounded-lg flex flex-col'>
          <button onClick={toggleModal} className='relative p-3 flex items-center justify-center cursor-pointer'>
            <p>Select muscle groups</p>
            <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
          </button>
          {showModal && (
            <div>modal</div>
          )}
        </div>

          {/* SECTION THREE - SCHEMES */}

        <Header
          index={'03'}
          title={"Decided how you'll grow"}
          description={'Select your ultimate objective.'}
        />
        <div className='grid grid-cols-3 gap-4'>
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
            <button className='bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg cursor-pointer' key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
            </button>
          ))}
        </div>

      </SectionWrapper>
    </section>
  )
}

export default Generator