import React from "react";
import Aud from "../../img/welcome-img.png";

function Audi({ title, desc }) {
  return (
    <div className="md:mt-[-353px] mt-[-500px] lg:mt-[-290px] xl:mt-[-300px] MT">
      <div className="md:flex xl:w-[65%] items-center lg:w-[90%] md:w-[90%] md:m-auto lg:m-auto xl:m-auto">
        <div className="md:w-[55%] w-full xl:mt-[-0px] lg:mt-[30px]">
          <img src={Aud} alt="" />
        </div>
        <div className="md:w-[45%] w-[90%] m-auto xl:mt-[-40px] lg:mt-[-30px] md:mt-[-50px] xl:ml-10">
          <div className="md:leading-[50px]  leading-8 mt-3">
            <p className="text-[#b53636] md:text-[36px] text-[27px]">{title}</p>
            <p className="uppercase md:text-[42px] xl:text-[45px]  text-[40px] text-white mt-0 lg:text-[58px]">
              {desc}
            </p>
          </div>
          <div>
            <p className="text-white mt-3 font-mediumx xl:text-[16px]">
              Motor is free Bootstrap v3.3.4 responsive web template provided by
              <span className="text-[#3CF]">templatemo.</span>{" "}
              <span className="text-[#6F6]">com</span> website. You can
              download, modify and use this for your website projects.
            </p>
          </div>

          <div className="hover:text-[#917c7c] text-white font-bold mt-3">
            READ MORE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audi;
