import React, { useEffect, useState } from "react";
import Img from "../../img/4-1.jpg";

export default () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    const time = setTimeout(() => {
      setLoad(false);
    }, 800);
  }, []);
  if (load) {
    return (
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
    );
  }
};
