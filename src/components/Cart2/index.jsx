import React from "react";
import Img from "../../img/about/4.jpg";
import Img2 from "../../img/about/3.jpg";

import CartStyle from "./CartStyle";

function Cart2() {
  const data = [
    {
      title: "TWO COLUMNS",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img2,
      price: "$2.264.000",
    },
    {
      title: "TWO COLUMNS",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
      price: "$2.264.000",
      mt: 30,
    },
  ];
  return (
    <div>
      <div>
        <div className="lg:grid lg:grid-cols-2 md:w-[500px] lg:w-[930px] xl:w-[960px] xl:gap-[50px] w-[90%] m-auto md:grid md:grid-cols-1 md:mx-[30px] bg-white mt-9  xl:mx-[280px] lg:mx-[50px] md:p-[40px] p-[30px] gap-[30px] ">
          {data.map((elem, ind) => (
            <CartStyle
              key={ind + 1}
              title={elem.title}
              img={elem.img}
              desc={elem.desc}
              price={elem.price}
              mt={elem.mt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart2;
