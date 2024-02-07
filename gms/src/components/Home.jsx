import React from "react";


function Home() {
  return (
    <div className=' w-full '>
      <div className="h-screen ">
        <div
          className=" w-full    h-full bg-[url('/img/6.jpg')]  flex bg-fixed bg-center justify-center items-center bg-cover bg-no-repeat bg-[#050d15]  "
        >
          <div className="">
            <div className="justify-center  flex mb-5 items-center">
              <p className="px-10 mt-24 font-Sans  text-[#D5A021]  text-[15px] ">
                FUNERAL HOME SERVICES
              </p>
            </div>
            <div className="justify-center items-center px-10 md:ml-6 px">
              <p className=" text-white font-KeplerStd font-bold text-center  leading-none  flex text-[70px]">
                Funeral plans to help you do right by your family
              </p>
            </div>
            <div className="justify-center flex">
              <button className="text-white  px-10 py-3 mt-8 bg-[#D5A021] rounded-md hover:bg-[#050d15] ease-in-out duration-500">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-screen flex bg-[#050d15]  w-full ">
        <img
          className="lg:ml-auto lg:items-center  lg:h-[530px] lg:w-[600px] hidden lg:block lg:p-10 lg:mt-[60px] lg:rounded "
          src="/public/img/img2.jpeg"
          alt=""
          srcset=""
        />
      
      <div className="space-y-4  px-6  mt-24  w-full  ">
        <h2 className="text-[#D5A021] font-bold text-[20px]">About Us</h2>
        <p className="text-4xl font-extrabold font-KeplerStd text-[50px] leading-none text-white py-4">
          We Provide Funeral Ceremonies
        </p>
        <p className="text-white space-y-3  max-h-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias non accusamus minima voluptatibus tempore temporibus eaque ipsam quis sed placeat, facilis earum id reprehenderit, cum hic adipisci modi. Maiores, earum?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime deleniti tempore facere illum harum! Nobis obcaecati quia, deserunt debitis modi provident iure commodi magnam ea sequi mollitia maiores ducimus?
        </p>
       
      <div className="mt-[10px] mb-[20px] py-4 flex items-center">
        <img className="h-24 rounded-full w-24 " 
        src="/public/img/img4.jpg" alt="" srcset="" />
        <div>
        <p className="text-white text-2xl font-bold  px-[15px]">Malik Humza </p>
        <p className="text-white px-[15px] ">CEO OF THE COMPANY</p>
      </div></div>
      </div>
      </div>

      <div className='bg-gray-200 h-max md:h-max  w-full  '>
        <div>
            <p className='text-[#D5A021] font-semibold flex justify-center py-6'>WE REMEMBER</p>
        <p className='text-black flex justify-center font-bold font-KeplerStd  text-3xl'>RECENT OBITUARIES</p>
        </div>

        <div className='p-10 flex flex-wrap justify-around'>

        <div class="max-w-sm mb-6 border border-gray-200  shadow bg-white">
        <a href="#">
          <img class="" src="/public/img/1.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 flex  font-KeplerStd justify-center text-2xl font-bold tracking-tight text-gray-900">
              Roma Dee
            </h5>
          </a>
          <p class="mb-3  text-[#D5A021] font-semibold flex justify-center">
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
            <h5 class="mb-2  font-KeplerStd flex justify-center text-2xl font-bold tracking-tight text-gray-900">
              Salay Breh
            </h5>
          </a>
          <p class="mb-3  text-[#D5A021] font-semibold flex justify-center">
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
            <h5 class="mb-2  font-KeplerStd flex justify-center text-2xl font-bold tracking-tight text-gray-900">
              Kim Oo
            </h5>
          </a>
          <p class="mb-3 text-[#D5A021] font-semibold flex justify-center">
            Dec 25,1876 - April 11,1948 
          </p>
        </div>
      </div>

        </div>

    </div>
    </div>
  );
}

export default Home;
