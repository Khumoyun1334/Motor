import React from "react";
import Waq from "../../img/0.jpg";
import Waq2 from "../../img/1.jpg";

function ServiceC() {
  return (
    <div>
      <div>
        <div className=" tm-overflow-hidden grid md:mt-[50px] xl:mt-[10px] grid-cols-2 md:grid md:grid-cols-4 xl:w-[63%] w-[90%] mt-[-5px]  m-auto">
          <div className="tm-img-1-container">
            <img src={Waq} alt="Image description" />
            <p className="tm-img-1-description">Porsche</p>
          </div>
          <div className="tm-img-1-container">
            <img src={Waq2} alt="Image description" />

            <p className="tm-img-1-description">Mercedes</p>
          </div>
          <div className="tm-img-1-container">
            <img src={Waq} alt="Image description" />

            <p className="tm-img-1-description">BMW</p>
          </div>
          <div className="tm-img-1-container">
            <img src={Waq2} alt="Image description" />

            <p className="tm-img-1-description">Lexus</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceC;
