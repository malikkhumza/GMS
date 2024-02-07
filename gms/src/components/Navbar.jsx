import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStateChange = (state) => {
    setIsNavOpen(state.isOpen);
  };
  const handleCloseMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div
      className={`fixed ${
        showBackground ? "bg-[#050d15]" : "bg-transparent"
      }   w-full   lg:h-28 h-20 md:px-10 justify-between  z-50  flex items-center text-white`}
    >
      <div className="px-[20px]   text-3xl cursor-pointer   font-semibold font-sans">
        <h3>ARAAM</h3>
      </div>
      <ul className="lg:text-lg lg:flex hidden  ">
        <li className="hover:scale-105 ">
          <NavLink
            to=""
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              } hover:scale-105 hover:text-[#D5A021] duration-300 ease-in-out md:font-semibold md:mx-[27px] cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  `
            }
          >
            HOME
          </NavLink>
        </li>

        <li className="hover:scale-105">
          {/* <NavLink
            to="/services"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              }  md:mx-[27px] cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            SERVICES
          </NavLink> */}

          <div class="">
      <div class="group relative inline-block ">
        
        <NavLink
            to="/services"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              }  md:mx-[27px] flex cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            SERVICES
            <svg className=" w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
          </NavLink>
          
        <ul class="absolute hidden pt-1 text-white group-hover:block bg-[#050d15] w-max text-sm">
          <li class="">
            <NavLink to='/onetime' className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]" >One Time Services</NavLink>
          </li>
          <li class="">
            <NavLink to='/monthly' className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]" >Monthly Services</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
        </li>

        <li className="hover:scale-105">
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              } md:mx-[27px]  cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            PRICING
          </NavLink>
        </li>

        <li className="hover:scale-105">
          <NavLink
            to="/plans"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              }  md:mx-[27px] cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            PLANS
          </NavLink>
        </li>

            <div class="group relative inline-block  ">
        <li className="hover:scale-105 onClick={handleClick} ">
          <NavLink
            to="/areas"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              }  md:mx-[27px] flex cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            SERVICE AREAS
            <svg className=" w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
          </NavLink>

          <ul class="absolute hidden pt-1 text-white group-hover:block w-full bg-[#050d15] text-sm">
          <li class="">
            <NavLink to='/lahore' className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]" >Lahore</NavLink>
          </li>
          <li class="">
            <NavLink to='/islamabad' className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]" >Islamabad</NavLink>
          </li>
          <li class="">
            <NavLink to='/karachi' className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]" >Karachi</NavLink>
          </li>
          <li class="">
            <NavLink to='/peshawar' className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]" >Peshawar</NavLink>
          </li>
          <li class="">
            <NavLink to='/rawalpindi' className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]" >Rawalpindi</NavLink>
          </li>
          <li class="">
            <NavLink to='/multan' className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]" >Multan</NavLink>
          </li>
          
        </ul>

        </li>
        </div>
      </ul>
      {/* <div className='hidden md:block px-2 py-2 bg-indigo-700 rounded-2xl font-bold text-white cursor-pointer'>
            LogIn/SignUp</div>
            <div className='md:hidden'>
                <a className='text-4xl px-4 font-bold ' href="#">&#8801;</a>
            </div> */}

      <div className="lg:flex lg:items-center hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7 font-bold fill-[#D5A021] stroke-[#D5A021]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <div className=" px-5">
          <span className="font-semibold text-2xl leading-normal font-KeplerStd  hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer">
            090078601
          </span>
          <p className="text-[#D5A021]">Call Us 24/7</p>
        </div>
      </div>

      <section className="MOBILE-MENU flex  lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2 p-3 cursor-pointer "
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8  bg-gray-600"></span>
          <span className="block h-0.5 w-8  bg-gray-600"></span>
          <span className="block h-0.5 w-8  bg-gray-600"></span>
        </div>

        <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} `}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-white cursor-pointer "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul
            className="flex flex-col items-center justify-between min-h-[250px]"
            onStateChange={handleStateChange}
            isOpen={isNavOpen}
          >
            <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                to=""
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline`
                }
                onClick={() => handleCloseMenu()}
              >
                HOME
              </NavLink>
            </li>
            <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline`
                }
                to="/services"
                onClick={() => handleCloseMenu()}
              >
                SERVICES
              </NavLink>
            </li>
            <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                onClick={() => handleCloseMenu()}
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline`
                }
                to="/pricing"
              >
                PRICING
              </NavLink>
            </li>
            <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                onClick={() => handleCloseMenu()}
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline `
                }
                to="/plans"
              >
                PLANS
              </NavLink>
            </li>
            <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                onClick={() => handleCloseMenu()}
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline`
                }
                to="/areas"
              >
                SERVICE AREAS
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        right: 0;
        background: #050d15;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
