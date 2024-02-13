import React from "react";
import Cart1 from "../../components/Cart1";
import Cart2 from "../../components/Cart2";
import Cart3 from "../../components/Cart3";
import Carusel from "../../components/Carusel";
import Maecenas from "../../components/Maecenas";
import Loadeed from "../../components/Loadeed";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div>
      <div>
        <Loadeed />
        <Carusel />
        <Cart1 />
        <Cart2 />
        <Cart3 />
        <div className="w-[91%]  m-auto md:m-auto lg:m-auto xl:m-0">
          <Maecenas />
        </div>
      </div>
    </div>
  );
}

export default Home;
