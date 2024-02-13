import { AiOutlineBehance } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";
import Futt from "../../img/copyright-bg.png";

function Futter() {
  return (
    <div className="mt-12">
      <div className="BAG5 bg-no-repeat ">
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 lg:w-[93%] md:w-[90%] w-[90%] xl:w-[63%] m-auto gap-[0px] pt-[50px]">
          <div className="w-[80%] ">
            <div>
              <p className="text-[21px] font-bold text-white">MAIN MENU</p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <p className="uppercase text-[#B4B4B4] font-bold">Home</p>
              <p className="uppercase text-[#B4B4B4] font-bold">About Us</p>
              <p className="uppercase text-[#B4B4B4] font-bold">Directory</p>
              <p className="uppercase text-[#B4B4B4] font-bold">Blog</p>
              <p className="uppercase text-[#B4B4B4] font-bold">Our Services</p>
            </div>
          </div>
          <div className="  xl:ml-[-90px] xl:w-[380px] lg:ml-[-90px] md:mt-[30px] lg:mt-0 xl:mt-0 mt-4  md:w-full ">
            <div>
              <p className="text-[21px] font-bold text-white">About Us</p>
            </div>
            <div>
              <p className="text-[#B4B4B4] text-[14px] mt-4">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet.
              </p>
              <p className="text-[#B4B4B4] text-[14px] mt-4">
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus.
              </p>
            </div>
          </div>
          <div className="w-full md:mt-[30px] lg:mt-0 xl:mt-0 mt-4">
            <div>
              <p className="text-[21px] font-bold text-white">Get Social</p>
            </div>
            <div>
              <p className="text-[#B4B4B4] text-[14px] mt-4">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante.
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              <div
                style={{ transition: "all .4s" }}
                className="p-[10px] rounded-[4px] cursor-pointer  bg-[#505050] hover:bg-[#B53636]"
              >
                <CgFacebook color="white" size={"24px"} />
              </div>
              <div
                style={{ transition: "all .4s" }}
                className="p-[10px] rounded-[4px] cursor-pointer  bg-[#505050] hover:bg-[#B53636]"
              >
                <AiOutlineTwitter color="white" size={"24px"} />
              </div>
              <div
                style={{ transition: "all .4s" }}
                className="p-[10px] rounded-[4px] cursor-pointer  bg-[#505050] hover:bg-[#B53636]"
              >
                <AiFillLinkedin color="white" size={"24px"} />
              </div>
              <div
                style={{ transition: "all .4s" }}
                className="p-[10px] rounded-[4px] cursor-pointer  bg-[#505050] hover:bg-[#B53636]"
              >
                <TfiYoutube color="white" size={"24px"} />
              </div>
              <div
                style={{ transition: "all .4s" }}
                className="p-[10px] rounded-[4px] cursor-pointer  bg-[#505050] hover:bg-[#B53636]"
              >
                <AiOutlineBehance color="white" size={"24px"} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center  text-white">
            <p>Copyright © 2084 Company Name</p>
            </div> */}
        <div
          style={{
            backgroundImage: `url(${Futt})`,
            backgroundRepeat: "no-repeat ",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="BAG6 flex justify-center items-center xl:mx-[260px ] lg:w-[96%]  lg:ml-6 xl:w-[65%] xl:ml-[255px]  lg:mx-0 xl:h-[85px] md:mt-[100px] md:h-[60px] h-[30px]  mt-[200px] xl:mt-[70px] lg:mt-[80px]"
        >
          <p className="text-white text-[12px] mt-[-150px] md:mt-1 lg:">
            Copyright © 2084 Company Name
          </p>
        </div>
      </div>
    </div>
  );
}

export default Futter;
