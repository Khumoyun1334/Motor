import React from "react";
import Img from "../../img/2.jpg";
import Img2 from "../../img/2.jpg";
import CartStyle6 from "./CartStyle6";

function Cart6() {
  const data = [
    {
      title: "S Class",
      desc: "pellentesque eu, pretium quissem",
      img: Img,
      price: "$ 20,000",
    },
    {
      title: "S Class",
      desc: "pellentesque eu, pretium quissem",
      img: Img2,
      price: "$ 20,000",
    },
    {
      title: "S Class",
      desc: "pellentesque eu, pretium quissem",
      img: Img,
      price: "$ 20,000",
    },
    {
      title: "S Class",
      desc: "pellentesque eu, pretium quissem",
      img: Img2,
      price: "$ 20,000",
    },
    {
      title: "S Class",
      desc: "pellentesque eu, pretium quissem",
      img: Img,
      price: "$ 20,000",
    },
    {
      title: "S Class",
      desc: "pellentesque eu, pretium quissem",
      img: Img2,
      price: "$ 20,000",
    },
    {
      title: "S Class",
      desc: "pellentesque eu, pretium quissem",
      img: Img,
      price: "$ 20,000",
    },
    {
      title: "S Class",
      desc: "pellentesque eu, pretium quissem",
      img: Img2,
      price: "$ 20,000",
    },
    {
      title: "S Class",
      desc: "pellentesque eu, pretium quissem",
      img: Img,
      price: "$ 20,000",
    },
  ];
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 mx-4  lg:w-[90%] WAQG w-[60%]   md:w-full md:mx-3 xl:mx-[30px] gap-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
          {data.map((elem, ind) => (
            <CartStyle6
              key={ind + 1}
              title={elem.title}
              img={elem.img}
              desc={elem.desc}
              price={elem.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart6;
