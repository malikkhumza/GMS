import React from "react";

function Pricing() {
  return (
    <div className="bg-[#050d15] h-[1300px] md:h-[830px]">
      <div className="p-8">
        <p className="text-yellow-400 py-10 font-semibold flex justify-center">
          Pricing
        </p>
        <p className="flex justify-center font-bold text-4xl mb-4 text-white">
          Our Prices
        </p>
      </div>

      {/* pricing starts here */}
      <div className="md:flex md:p-10  ">

        <div className="px-6">
          <div className="">
            <div className="text-white font-bold flex justify-between text-2xl">
              <p>Grave Maintainance</p>
              <p>0$</p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-white font-thin py-2 text-[20px]">
              Lorem ipsum dolor sit ammus Lorem ipsum dolor sit amet recusandae
              dolores atque totam eius delectus.
            </p>
          </div>

          <div className="pt-8 ">
            <div className="text-white font-bold flex justify-between  text-2xl">
              <p>Flowering</p>
              <p>0$</p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-white font-thin py-2 text-[20px]">
              Lorem ipsum dolor sit ammus Lorem ipsum dolor sit amet recusandae
              dolores atque totam eius delectus.
            </p>
          </div>

          <div className="pt-8 ">
            <div className="text-white font-bold flex justify-between  text-2xl">
              <p>Food Services</p>
              <p>0$</p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-white font-thin py-2 text-[20px]">
              Lorem ipsum dolor sit ammus Lorem ipsum dolor sit amet recusandae
              dolores atque totam eius delectus.
            </p>
          </div>

          
        </div>


        <div className="px-6">
          <div className="">
            <div className="text-white font-bold flex justify-between text-2xl">
              <p>Seating Services</p>
              <p>0$</p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-white font-thin py-2 text-[20px]">
              Lorem ipsum dolor sit ammus Lorem ipsum dolor sit amet recusandae
              dolores atque totam eius delectus.
            </p>
          </div>

          <div className="pt-8 ">
            <div className="text-white font-bold flex justify-between  text-2xl">
              <p>Grave Digging</p>
              <p>0$</p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-white font-thin py-2 text-[20px]">
              Lorem ipsum dolor sit ammus Lorem ipsum dolor sit amet recusandae
              dolores atque totam eius delectus.
            </p>
          </div>

          <div className="pt-8 ">
            <div className="text-white font-bold flex justify-between  text-2xl">
              <p>Kafn/Dafn</p>
              <p>0$</p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-white font-thin py-2 text-[20px]">
              Lorem ipsum dolor sit ammus Lorem ipsum dolor sit amet recusandae
              dolores atque totam eius delectus.
            </p>
          </div>

          


        </div>

      </div>
    </div>
  );
}

export default Pricing;
