import React from "react";
import Img from "../../img/about/4.jpg";
import Img2 from "../../img/services-1.jpg";
import CartStyle2 from "./CartStyle2";

function Cart3() {
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
      img: Img2,
      price: "$2.264.000",
      mt: 30,
    },
    {
      title: "TWO COLUMNS",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img2,
      price: "$2.264.000",
      mt: 30,
    },
  ];
  return (
    <div>
      <div>
        <div className="lg:grid lg:grid-cols-3 md:w-[500px] w-[90%] m-auto lg:w-[930px] xl:w-[960px] md:grid md:grid-cols md:mx-[30px] bg-white mt-9  p-[30px] xl:mx-[280px] lg:mx-[50px] md:p-[40px] p-[30px  ] gap-[30px] ">
          {data.map((elem, ind) => (
            <CartStyle2
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

export default Cart3;
