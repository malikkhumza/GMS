import React from 'react'

function Footer() {
  return (
    <div className='h-max bg-[#050d15]'>
        <p className='text-5xl text-white font-bold py-[90px] px-6 md:px-[120px]'>CONTACT</p>
        
        
        <div className='pb-16  flex flex-wrap  md:justify-around '>
            
            <div className='text-white p-6'>
                <p className=' font-bold text-xl pb-4 '>Our Location</p>
                <p className=''>Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit.</p>
            </div>

            <div className='text-white p-6'>
                <p className=' font-bold text-xl pb-4 '>Working Hours</p>
                <p className='block'>Monday - Friday 8AM - 6PM</p>
                <p> Saturday - Sunday 9AM - 5PM</p>
            </div>

            
            <div className='text-white p-6'>
                <p className=' font-bold text-xl pb-4 '>Office Phone</p>
                <p className=''>+12345678</p>
            </div>

            <div className='text-white  p-6'>
                <p className=' font-bold text-xl pb-4 '>Email</p>
                <p className=''>abcd@example.com</p>
            </div>

        </div>
    </div>
  )
}

export default Footer