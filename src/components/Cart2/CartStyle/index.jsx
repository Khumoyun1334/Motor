import React from "react";

function CartStyle({ img, price, title, mt }) {
  return (
    <div>
      <div>
        <div className={`mt-[${mt}px] md:mt-0 lg:mt-0 xl:mt-0`}>
          <div>
            <p className="text-[20px] font-bold py-3 text-[#333]">{title}</p>
          </div>
          <div>
            <img className="w-full" src={img} alt="" />
          </div>
          <div>
            <p className="text-[15px] py-[15px] font-normal ">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit.
            </p>
          </div>
          <div>
            <button
              style={{ transition: "all .3s" }}
              className="p-2 px-[27px] text-[15px] font-medium  border-l-[8px] text-white hover:bg-black hover:text-[#d54a4a] border-black bg-[#d54a4a] "
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartStyle;
