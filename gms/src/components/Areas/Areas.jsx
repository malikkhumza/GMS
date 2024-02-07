import React from "react";
import { NavLink } from "react-router-dom";

function Areas() {
  return (
    <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 justify-center justify-items-center bg-gray-900 py-40 font-KeplerStd ">
      <div class="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/lahore'
        class="">
          <div class="group-hover:scale-110 w-full h-80   bg-[url('/img/7.jpg')] bg-cover bg-center duration-500"></div>
          <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span class="text-xl font-bold">LAHORE</span>
            <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </NavLink>
      </div>

      <div class="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/islamabad'
        class="">
          <div class="group-hover:scale-110 w-full h-80   bg-[url('/img/5.jpg')] bg-cover bg-center duration-500"></div>
          <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span class="text-xl font-bold">ISLAMABAD</span>
            <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </NavLink>
      </div>

      <div class="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/karachi'
        class="">
          <div class="group-hover:scale-110 w-full h-80   bg-[url('/img/8.jpg')] bg-cover bg-center duration-500"></div>
          <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span class="text-xl font-bold">Karachi</span>
            <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </NavLink>
      </div>

      <div class="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/peshawar'
        class="">
          <div class="group-hover:scale-110 w-full h-80   bg-[url('/img/9.jpg')] bg-cover bg-center duration-500"></div>
          <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span class="text-xl font-bold">Peshawar</span>
            <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </NavLink>
      </div>

      <div class="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/rawalpindi'
        class="">
          <div class="group-hover:scale-110 w-full h-80   bg-[url('/img/10.jpg')] bg-cover  duration-500"></div>
          <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span class="text-xl font-bold">RAWALPINDI</span>
            <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </NavLink>
      </div>

      <div class="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/multan'
        class="">
          <div class="group-hover:scale-110 w-full h-80   bg-[url('/img/11.jpg')] bg-cover  duration-500"></div>
          <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span class="text-xl font-bold">MULTAN</span>
            <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Areas;
