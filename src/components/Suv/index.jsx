import React from "react";
import Ass from "../../img/about/1.jpg";

function Siv() {
  return (
    <div className="xl:mx- md:mx-11 mx-10 ">
      <div style={{ width: "100%" }}>
        <div>
          <div class=" md:flex block">
            <div class="thumb xl:w-[40%]  md:w-[40%] lg:w-[30%] w-full">
              <img src={Ass} alt="" />
            </div>
            <div className="xl:w-[100%] md:w-[60%] lg:w-[70%] w-full">
              <div className="md:leading-[50px] leading-8 ">
                <p className="text-[#b53636] md:text-[30px] mt-3 text-[27px]">
                  PERFORMANCE
                </p>
                <p className="uppercase md:text-[45px] text-[30px] text-white">
                  FOR THE SPEED
                </p>
              </div>
              <div>
                <p className="text-white mt-3 font-normal text-[13px] md:text-[14px] xl:text-[15px] md:font-light">
                  Motor is free Bootstrap v3.3.4 responsive web template
                  provided by <span className="text-[#3CF]">templatemo.</span>{" "}
                  <span className="text-[#6F6]">com</span> website. You can
                  download, modify and use this for your website projects.
                  Please tell your friends about our templates. Thank you for
                  visiting. Have fun!s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Siv;
