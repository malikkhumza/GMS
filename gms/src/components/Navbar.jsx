import React from 'react'
// import { useState } from 'react'

// const [color,setcolor]=useState(false)
// const changebg = () =>{
//     if(window.scrollY >= h-screen){
//         setcolor(true)
//     }else{
//         setcolor(false)
//     }
// }
// window.addEventListener('scroll', changebg)

function Navbar() {
  return (
    <div className='fixed bg-[#050d15]  w-full md:px-10 h-20 justify-between shadow  flex items-center text-white'
    >
        <div className='px-[20px] text-xl md:text-2xl font-bold'>
            <h3>Araam</h3>
        </div>
            <ul className='md:flex hidden  '>
                <li className='md:font-semibold md:mx-[27px] cursor-pointer'>Home</li>
                <li className='md:font-semibold md:mx-[27px] cursor-pointer'>Services</li>
                <li className='md:font-semibold md:mx-[27px] cursor-pointer'>Pricing</li>
                <li className='md:font-semibold md:mx-[27px] cursor-pointer'>Plans</li>
                <li className='md:font-semibold md:mx-[27px] cursor-pointer'>About Us</li>
            </ul>
        <div className='hidden md:block px-2 py-2 bg-indigo-700 rounded-2xl font-bold text-white cursor-pointer'>
            LogIn/SignUp</div>
            <div className='md:hidden'>
                <a className='text-4xl px-4 font-bold ' href="#">&#8801;</a>
            </div>
    </div>
  )
}

export default Navbar