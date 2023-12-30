import React from "react";

function Main() {
  return (
    <>
      <div className="h-screen">
        <div
          className="w-full h-full flex bg-fixed bg-center justify-center items-center bg-cover bg-no-repeat "
          style={{
            backgroundImage: "url(/img/img8.png)",
          }}
        >
          <div>
            <div className="justify-center flex mb-5 ">
              <p className="px-10 font-semibold text-yellow-400  text-[15px] ">
                FUNERAL HOME SERVICES
              </p>
            </div>
            <div className="justify-center items-center px-10 md:ml-6 px">
              <p className=" text-white font-extrabold text-justify font-serif flex text-[40px]">
                Funeral plans to help you do right by your family
              </p>
            </div>
            <div className="justify-center flex">
              <button className="text-white  px-5 py-2 mt-5 bg-yellow-600 font-bold rounded-lg">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-screen flex bg-[#050d15] ">
        <img
          className="lg:ml-auto lg:items-center  lg:h-[530px] lg:w-[600px] hidden lg:block lg:p-10 lg:mt-[60px] lg:rounded "
          src="/public/img/img2.jpeg"
          alt=""
          srcset=""
        />
      
      <div className="space-y-4 px-6 mt-24">
        <h2 className="text-yellow-400 text-[15px]">About Us</h2>
        <p className="text-4xl font-bold text-white py-2">
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
    </>
  );
}

export default Main;
