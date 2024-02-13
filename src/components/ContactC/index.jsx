import React from "react";

function ContactC() {
  return (
    <div className="py-[200px]">
      <div className="flex justify-center">
        <img
          src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
          alt=""
        />
      </div>
      <div>
        <p className="text-[24px] text-center m-5 text-[#3c4043]">
          Xatolik yuz berdi.
        </p>
        <p className="text-center text-[12px] m-5">
          Bu sahifa Google Xaritalarni noto‘g‘ri yukladi. Texnik ma’lumotlar
          olish uchun JavaScript konsolini ko‘ring.
        </p>
      </div>
    </div>
  );
}

export default ContactC;
