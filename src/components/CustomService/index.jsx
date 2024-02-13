import { BiPlusMedical } from "react-icons/bi";
import React from "react";

function CustomService() {
  return (
    <div>
      <div className="bg-white  md:w-[93%] w-[90%] lg:w-[90%] xl:w-[63%]  m-auto mt-9 md:p-9 p-3">
        <div>
          <p className="text-[33px] text-[#333333] font-bold text-center ">
            Customer Services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid mt-8 md:grid-cols-2 gap-5">
          <div className="bg-[#F5F5F5] p-5">
            <div className="flex gap-3">
              <div className="w-[30px] h-[30px] bg-[#D54A4A] flex justify-center items-center text-white">
                <BiPlusMedical />
              </div>
              <p className="text-[20px] font-bold">MORBI ACCUMSAN</p>
            </div>
            <div>
              <p className="text-[14px] mt-4">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagiittis sem nibh id elit. Duis sed odio sit amet
                nibh.a sit amet mauris um auctor, nisi elit. Morbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio.
              </p>
            </div>
          </div>
          <div className="bg-[#F5F5F5] p-5">
            <div className="flex gap-3">
              <div className="w-[30px] h-[30px] bg-[#D54A4A] flex justify-center items-center text-white">
                <BiPlusMedical />
              </div>
              <p className="text-[20px] font-bold">GRAVITA VELIT</p>
            </div>
            <div>
              <p className="text-[14px] mt-4">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagiittis sem nibh id elit. Duis sed odio sit amet
                nibh.a sit amet mauris um auctor, nisi elit. Morbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio.
              </p>
            </div>
          </div>
          <div className="bg-[#F5F5F5] p-5">
            <div className="flex gap-3">
              <div className="w-[30px] h-[30px] bg-[#D54A4A] flex justify-center items-center text-white">
                <BiPlusMedical />
              </div>
              <p className="text-[20px] font-bold">AENEAN CONSEQUAT</p>
            </div>
            <div>
              <p className="text-[14px] mt-4">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagiittis sem nibh id elit. Duis sed odio sit amet
                nibh.a sit amet mauris um auctor, nisi elit. Morbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio.
              </p>
            </div>
          </div>
          <div className="bg-[#F5F5F5] p-5">
            <div className="flex gap-3">
              <div className="w-[30px] h-[30px] bg-[#D54A4A] flex justify-center items-center text-white">
                <BiPlusMedical />
              </div>
              <p className="text-[20px] font-bold">DUIS SEDODIO</p>
            </div>
            <div>
              <p className="text-[14px] mt-4">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagiittis sem nibh id elit. Duis sed odio sit amet
                nibh.a sit amet mauris um auctor, nisi elit. Morbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomService;
