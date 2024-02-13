import React from "react";
import Plus from "../../../img/plus.png";

function CartStyle6({ img, price, title, desc }) {
  return (
    <div className="mt-3">
      <div className=" p-2 bg-white">
        <div className="">
          <div>
            <img className="w-full " src={img} alt="" />
          </div>
          <div>
            <p className="text-[14px] font-bold">{desc}</p>
          </div>
          <hr className="mt-4" />
          <div className="flex justify-between mt-3">
            <div>
              <p className="text-[14px] font-bold">{price}</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[12px] text-[#B4B4B4] font-bold">
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

export default CartStyle6;
