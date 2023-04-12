import React from 'react'
import Navigation from '../Navigation'
import ContactForm from './ContactForm'

const Contact:React.FC = () => {
  return (
    <div className='w-[75%]'>
      <Navigation />
      <div className='flex justify-center items-center h-5/6'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact