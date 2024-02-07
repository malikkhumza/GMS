import React from "react";
import { NavLink } from "react-router-dom";

function OneTervices() {
  return (
    <div className="bg-gray-900 py-24   w-full  ">
      <div class="p-10 text-center text-white">
        <h1 class=" text-5xl font-bold">One Time Services</h1>
        <h1 class="text-xl pt-2">Here are the services we provide</h1>
      </div>

      {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}

      {/* <p className="text-white text-2xl font-bold flex justify-center mt-10">Monthly Services</p> */}
      <section
        id="Projects"
        class="mx-auto mb-5 mt-10 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3"
      >

        
        
        {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
        <div class="w-72 rounded-xl bg-white shadow-md duration-500 hover:shadow-xl">
          <a href="#">
            <img
            src="/public/img/img9.jpg"
            alt="Product"
              class="h-80 w-72 rounded-t-xl object-cover"
            />
            <div class="w-72 px-4 py-3">
            <span class="text-black font-bold mr-3 uppercase text-sm">0$</span> 

              <p class="block truncate  font-KeplerStd text-lg font-bold capitalize text-black">
                Grave Digging
              </p>
              <div class="flex items-center">
                <p class="my-3 cursor-auto text-md font-semibold text-black">
                  Digging the grave and making is ready for burial ritual
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 4 - Ends Here  --> */}

        {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
        <div class="w-72 rounded-xl bg-white shadow-md duration-500  hover:shadow-xl">
          <a href="#">
            <img
            src="/public/img/img62.jpg"
            alt="Product"
              class="h-80 w-72 rounded-t-xl object-cover"
            />
            <div class="w-72 px-4 py-3">
            <span class="text-black font-bold mr-3 uppercase text-sm">0$</span> 

              <p class="block truncate  font-KeplerStd text-lg font-bold capitalize text-black">
                Kafn/Dafn
              </p>
              <div class="flex items-center">
                <p class="my-3 cursor-auto text-md font-semibold text-black">
                  Kafn/Dafn includes all the burial rituals when a person dies
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 5 - Ends Here  --> */}

        {/* <!--   ✅ Product card 6 - Starts Here 👇 --> */}
        <div class="w-72 rounded-xl bg-white shadow-md duration-500  hover:shadow-xl">
          <a href="#">
            <img
            src="/public/img/img72.jpg"
            alt="Product"
              class="h-80 w-72 rounded-t-xl object-cover"
            />
            <div class="w-72 px-4 py-3">
            <span class="text-black font-bold mr-3 uppercase text-sm">0$</span> 

              <p class="block truncate  font-KeplerStd text-lg font-bold capitalize text-black">
                Food And Catering
              </p>
              <div class="flex items-center">
                <p class="my-3 cursor-auto text-md font-semibold text-black">
                  Food/Catering and seating services at your doorstep
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default OneTervices;
