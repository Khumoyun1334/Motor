import React from "react";
import Siv from "../../components/Suv";
import Carusel from "../../components/Carusel";
import ServiceC from "../../components/ServiceC";
import CustomService from "../../components/CustomService";
import Cart3 from "../../components/Cart3";
import Maecenas from "../../components/Maecenas";
import Loadeed from "../../components/Loadeed";
import Navbar from "../../components/Navbar";

function Service() {
  return (
    <div>
      <Loadeed />
      <Carusel />
      <ServiceC />
      <CustomService />
      <Cart3 />
      <div className="w-[91%]  m-auto md:m-auto lg:m-auto xl:m-0">
        <Maecenas />
      </div>
    </div>
  );
}

export default Service;
