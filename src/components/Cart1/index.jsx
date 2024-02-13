import React from "react";
import CartImg from "../../img/about/2.jpg";

function Cart1() {
  return (
    <div>
      <div className="lg:flex md:mx-[30px] mx-0 lg:mx-[46px] xl:mx-[280px] xl:mt-[-0px] lg:mt-6">
        <div className=" lg:w-[50%] md:w-[60%] w-[90%] m-auto md:m-0 lg:h-[440px] xl:h-[426px] md:h-[390px]">
          <img className="w-full h-full" src={CartImg} alt="" />
        </div>
        <div className="bg-white lg:w-[50%] md:w-[60%] w-[90%] xl:m-0 m-auto xl:p-[29px] md:m-0 lg:m-0 md:p-[30px] py-[20px] px-7">
          <div>
            <p className="text-[30px] font-bold text-[#333]">ONE COLUMN</p>
            <p className="text-[15px] mt-2 font-normal text-justify leading-[23px]">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio.
            </p>
            <p className="mt-2 text-[15px] text-justify leading-[23px]">
              s Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
              velit.
            </p>

            <button
              style={{ transition: "all .3s" }}
              className="p-4 px-[30px] text-start text-[20px] uppercase border-l-[8px] text-white hover:bg-black hover:text-[#d54a4a] border-black bg-[#d54a4a] mt-3"
            >
              Duised sitDamet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart1;
