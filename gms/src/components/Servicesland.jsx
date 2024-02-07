import React from "react";
import { NavLink } from "react-router-dom";

function Servicesland() {
  return (
    <div className="h-max  w-full    bg-gray-900 py-12 ">
      <div className="pt-20">
        <p className="text-[#D5A021] font-semibold flex justify-center py-6">
          WHAT WE OFFER
        </p>
        <p className="text-5xl flex  font-KeplerStd justify-center font-bold text-white pb-4">
          Explore Services
        </p>
      </div>

      <div className=" flex md:justify-evenly md:mt-6  flex-wrap justify-center">
      {/* <div class="max-w-sm mb-6 border border-gray-200  shadow bg-white">
        <a href="#">
          <img class="" src="/public/img/img5.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Grave Maintainance
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, nam.
          </p>
        </div> */}
      {/* </div> */}
      <div class=" max-w-sm mb-6 border border-gray-200   shadow bg-white">
        <NavLink to="/onetime">
          <img class="w-full" src="/public/img/img6.jpg" alt="" />
        </NavLink>
        <div class="p-5 ">
          <NavLink to="Onetime">
            <h5 class="mb-2 text-2xl font-KeplerStd  font-bold tracking-tight text-gray-900">
              One Time Services
            </h5>
          </NavLink>
          <p class="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, nam.
          </p>
        </div>
      </div>
      <div class=" max-w-sm mb-6  border border-gray-200  shadow bg-white">
        <NavLink to="/monthly">
          <img class="" src="/public/img/img7.jpg" alt="" />
        </NavLink>
        <div class="p-5">
          <NavLink to="monthly">
            <h5 class="mb-2 text-2xl font-KeplerStd  font-bold tracking-tight text-gray-900">
              Monthly Services
            </h5>
          </NavLink>
          <p class="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, nam.
          </p>
        </div>
      </div>
      </div>

      
    </div>
    
  );
}

export default Servicesland;
