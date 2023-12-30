import React from "react";

function Services() {
  return (
    <div className="bg-[#050d15] pb-6">
      <div class="p-10 text-center text-white">
        <h1 class="mb-4 text-5npxl font-bold">Services</h1>
        <h1 class="text-xl">Here are the services we provide</h1>
      </div>

      {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}

      {/* <p className="text-white text-2xl font-bold flex justify-center mt-10">Monthly Services</p> */}
      <section
        id="Projects"
        class="mx-auto mb-5 mt-10 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3"
      >

        
        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
        <div class="w-72 rounded-xl bg-white shadow-md duration-500    hover:shadow-xl">
          <a href="#">
            <img
            src="/public/img/img52.jpg"
            alt="Product"
              class="h-80 w-72 rounded-t-xl object-cover"
            />
            <div class="w-72 px-4 py-3">
               <span class="text-black font-bold mr-3 uppercase text-sm">0$</span> 
              <p class="block truncate text-lg font-bold capitalize text-black">
                Grave Maintainance
              </p>
              <div class="flex items-center">
                <p class="my-3 cursor-auto text-md font-semibold text-black">
                  Cleaning the grave and removing unnecessary things
                </p>

                {/*<!-- <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del> -->
          <!--<div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>-->*/}
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 1 - Ends Here  --> */}

        {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
        <div class="w-72 rounded-xl bg-white shadow-md duration-500  hover:shadow-xl">
          <a href="#">
            <img
            src="/public/img/img10.jpg"
              alt="Product"
              class="h-80 w-72 rounded-t-xl object-cover"
            />
            <div class="w-72 px-4 py-3">
            <span class="text-black font-bold mr-3 uppercase text-sm">0$</span> 

              <p class="block truncate text-lg font-bold capitalize text-black">
                Flowering
              </p>
              <div class="flex items-center">
                <p class="my-3 cursor-auto text-md font-semibold text-black">
                  Putting fresh flowers and scent on the grave
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 2- Ends Here  --> */}

        {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
        <div class="w-72 rounded-xl bg-white shadow-md duration-500  hover:shadow-xl">
          <a href="#">
            <img
              src="/public/img/img11.jpg"
              alt="Product"
              class="h-80 w-72 rounded-t-xl object-cover"
            />
            <div class="w-72 px-4 py-3">
            <span class="text-black font-bold mr-3 uppercase text-sm">0$</span> 

              <p class="block truncate text-lg font-bold capitalize text-black">
                Disaster Management
              </p>
              <div class="flex items-center">
                <p class="my-3 cursor-auto text-md font-semibold text-black">
                  Maintaining Graves in case of natural disaster. Floods, earthquake etc
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 3 - Ends Here  --> */}

        {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
        <div class="w-72 rounded-xl bg-white shadow-md duration-500  hover:shadow-xl">
          <a href="#">
            <img
            src="/public/img/img9.jpg"
            alt="Product"
              class="h-80 w-72 rounded-t-xl object-cover"
            />
            <div class="w-72 px-4 py-3">
            <span class="text-black font-bold mr-3 uppercase text-sm">0$</span> 

              <p class="block truncate text-lg font-bold capitalize text-black">
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

              <p class="block truncate text-lg font-bold capitalize text-black">
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

              <p class="block truncate text-lg font-bold capitalize text-black">
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

export default Services;
