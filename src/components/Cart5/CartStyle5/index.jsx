import React from "react";
import Plus from "../../../img/plus.png";

function CartStyle5({ img, price, title }) {
  return (
    <div>
      <div className=" p-2 bg-white">
        <div className="">
          <div>
            <img className="w-full " src={img} alt="" />
          </div>
          <div className="flex justify-between mx-3 mt-3">
            <div>
              <p className="text-[14px] font-bold">{title}</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[12px] hover:text-[#B53636] text-[#B4B4B4] font-bold">
                  View More
                </p>
              </div>
              <div>
                <img src={Plus} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartStyle5;
