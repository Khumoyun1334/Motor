import React from "react";
import Audi from "../../components/Audi";
import GalleryC from "../../components/GalleryC";
import Cart5 from "../../components/Cart5";
import Maecenas from "../../components/Maecenas";
import Loadeed from "../../components/Loadeed";
import Navbar from "../../components/Navbar";

function Gallery() {
  return (
    <div>
      <Loadeed />
      <Audi title={"PERFORMANCE"} desc={"AUTO"} />
      <GalleryC />
      <Cart5 />
      <div className="w-[91%]  m-auto md:m-auto lg:m-auto xl:m-0">
        <Maecenas />
      </div>
    </div>
  );
}

export default Gallery;
