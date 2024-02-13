import React from "react";
import GalleryH from "../../img/gallery-header.jpg";

function GalleryC() {
  return (
    <div>
      <div className="mt-[130px] xl:mt-[50px]">
        <p className="text-[30px] text-center">
          DONEC PEDE JUSTO FRINGILLA ULPUTATE EGET
        </p>
        <p className="text-center mt-7 w-[90%] md:w-[90%] lg:w-[66%] m-auto">
          Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </div>
      <div className="flex justify-center mt-7 mx-4">
        <img src={GalleryH} alt="" />
      </div>
    </div>
  );
}

export default GalleryC;
