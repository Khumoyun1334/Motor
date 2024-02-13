import React from "react";
import Img from "../../img/gallery/0.jpg";
import Img2 from "../../img/gallery/1.jpg";
import CartStyle5 from "./CartStyle5";

function Cart5() {
  const data = [
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img2,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img2,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img2,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img2,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img2,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
      price: "$2.264.000",
    },
    {
      title: "S Class",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img2,
      price: "$2.264.000",
    },
  ];
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 mt-8 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:m-auto xl:mt-[30px] xl:w-[63%]  w-[70%] mx-3 md:w-[96%] md:mt-7 lg:w-[94%] md:m-auto   gap-6">
          {data.map((elem, ind) => (
            <CartStyle5
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

export default Cart5;
