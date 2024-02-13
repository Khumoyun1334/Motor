import { BiPlay } from "react-icons/bi";
import React from "react";

const Maecenas = ({ width }) => {
  return (
    <div className="">
      <div
        className={`BAG4 xl:mx-[278px] xl:w-[960px] md:w-[720px] md:ml-[-10px] md:m-auto m-auto  lg:w-[935px] flex md:h-[110px] xl:h-[96px]`}
      >
        <div className="md:flex block xl:gap-9 md:gap-3 lg:gap-7">
          <div className="xl:py-[22px] py-2">
            <p className="text-white text-[30px]  xl:ml-7 xl:py-0  ml-[80px] md:py-5 md:ml-5 lg:ml-8">
              Maecenas
            </p>
          </div>
          <div>
            <p className="text-white xl:py-6 px-4 xl:px-0 md:py-5">
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet venenatis vitae, justo.
              Nullam dictum felis eu pede mollis pretium
            </p>
          </div>
          <div className="h-full">
            <button
              style={{ transition: "all .3s" }}
              className="bg-[#B53636] hover:text-black xl:h-full lg:w-[100px] md:w-[80px] xl:w-[89px] md:h-full md:mt-0 w-full h-[100px] mt-3 flex justify-center items-center text-white"
            >
              <BiPlay size={"9  0px"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maecenas;
