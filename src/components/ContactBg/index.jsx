import React from "react";

function ContactBg() {
  return (
    <div className="xl:mx-[280px] lg:mx-[50px] md:mx-[26px] ">
      <div className="BAG7 md:p-[30px] p-[25px]">
        <div>
          <div>
            <p className="text-[24px] font-bold">Contact Us</p>
          </div>
          <div>
            <p className="text-[14px] mt-2">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Drbi accumsan ipsum velit.
            </p>
          </div>
        </div>
        <div className="block lg:flex w-full  gap-7 mt-5">
          <div className="w-[100%] lg:w-[40%] flex flex-col gap-4">
            <input className="IN1" type="text" placeholder="NAME" />
            <input className="IN1" type="text" placeholder="EMAIL" />
            <input className="IN1" type="text" placeholder="SUBJECT" />
          </div>
          <div className="w-[100%] lg:w-[60%]">
            <textarea
              className="IN2 mt-4 lg:mt-0"
              placeholder="MESSAGE"
              name="postContent"
              rows={6}
              cols={50}
            />
          </div>
        </div>
        <div>
          <button className="buy lg:w-[38.8%] mt-4 w-full">SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
}

export default ContactBg;
