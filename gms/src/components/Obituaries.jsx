import React from 'react'

function Obituaries() {
  return (
    <div className='bg-gray-200 h-max md:h-max'>
        <div>
            <p className='text-yellow-400 font-semibold flex justify-center py-6'>WE REMEMBER</p>
        <p className='text-black flex justify-center font-bold text-3xl'>RECENT OBITUARIES</p>
        </div>

        <div className='p-10 flex flex-wrap justify-around'>

        <div class="max-w-sm mb-6 border border-gray-200  shadow bg-white">
        <a href="#">
          <img class="" src="/public/img/1.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 flex justify-center text-2xl font-bold tracking-tight text-gray-900">
              Roma Dee
            </h5>
          </a>
          <p class="mb-3  text-yellow-600 font-semibold flex justify-center">
            Dec 25,1876 - April 11,1948 
          </p>
        </div>
      </div>

      <div class="max-w-sm mb-6 border border-gray-200  shadow bg-white">
        <a href="#">
          <img class="" src="/public/img/2.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 flex justify-center text-2xl font-bold tracking-tight text-gray-900">
              Salay Breh
            </h5>
          </a>
          <p class="mb-3  text-yellow-600 font-semibold flex justify-center">
            Dec 25,1876 - April 11,1948 
          </p>
        </div>
      </div>

      <div class="max-w-sm mb-6 border border-gray-200  shadow bg-white">
        <a href="#">
          <img class="" src="/public/img/3.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 flex justify-center text-2xl font-bold tracking-tight text-gray-900">
              Kim Oo
            </h5>
          </a>
          <p class="mb-3  text-yellow-600 font-semibold flex justify-center">
            Dec 25,1876 - April 11,1948 
          </p>
        </div>
      </div>

        </div>

    </div>
  )
}

export default Obituaries