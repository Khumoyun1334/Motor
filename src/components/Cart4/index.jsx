import React from "react";
import Waq from "../../img/0.jpg";
import Waq2 from "../../img/1.jpg";

function Cart4() {
  return (
    <div>
      <div className="mt-[70px] xl:mt-[30px] md:mt-[130px] ">
        <p className="text-[30px] text-center mx-4">
          DONEC PEDE JUSTO FRINGILLA ULPUTATE EGET
        </p>
        <p className="text-center mt-7 w-[90%] md:w-[91%] lg:w-[66%]  m-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque et magnis
          dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec.
        </p>
      </div>
      <div>
        <div className=" tm-overflow-hidden grid grid-cols-2 md:grid md:grid-cols-4 xl:w-[63%] w-[90%]  mt-9 m-auto">
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

export default Cart4;
