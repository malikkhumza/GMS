import React from "react";

function Servicesland() {
  return (
    <div className="h-max md:h-[830px] bg-slate-200 ">
      <div className="py-10">
        <p className="text-yellow-400 font-semibold flex justify-center mt-08 py-6">
          WHAT WE OFFER
        </p>
        <p className="text-5xl flex justify-center font-bold">
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
        <a href="#">
          <img class="w-full" src="/public/img/img6.jpg" alt="" />
        </a>
        <div class="p-5 ">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              One Time Services
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, nam.
          </p>
        </div>
      </div>
      <div class=" max-w-sm mb-6  border border-gray-200  shadow bg-white">
        <a href="#">
          <img class="" src="/public/img/img7.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Monthly Services
            </h5>
          </a>
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
