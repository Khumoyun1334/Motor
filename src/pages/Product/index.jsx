import React from "react";
import Audi from "../../components/Audi";
import Cart4 from "../../components/Cart4";
import Category from "../../components/Category";
import Maecenas from "../../components/Maecenas";
import Loadeed from "../../components/Loadeed";
import Navbar from "../../components/Navbar";

function Product() {
  return (
    <div>
      {/* <Navbar /> */}
      <Loadeed />
      <Audi title={"WE LOVE YOUR"} desc={"SATISFACTION"} />
      <Cart4 />
      <Category />
      <div className="w-[91%]  m-auto md:m-auto lg:m-auto xl:m-0">
        <Maecenas />
      </div>
    </div>
  );
}

export default Product;
