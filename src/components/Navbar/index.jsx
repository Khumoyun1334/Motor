import ImgBN from "../../img/header.png";
import { IoIosMenu } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { BiMenu } from "react-icons/bi";

function Navbar({ size }) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [close, setClose] = useState(true);

  const [butt, setButt] = useState(false);

  return (
    <div className={`BAG  md:h-[85vh]  h-[100vh]`}>
      <div className="flex justify-center">
        <img className="" src={ImgBN} alt="" />
      </div>
      <div className="lg:mt-[-156px] md:mt-[-105px]">
        <div className="text-center hidden md:flex md:justify-center">
          <p className="text-[46px]  text-white md:text-[35px] xl:mt-[-1px] md:mt-[-3px] lg:mt-[18px] xl:text-[46px] lg:text-[45px] mt-1">
            MOTOR
          </p>
        </div>
        <div className=" lg:mt-[30px] xl:mt-[44px]  md:flex hidden md:gap-6 md:mt-[21px]  lg:gap-[45px] xl:gap-[55px] justify-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#b53636] uppercase WEE lg:text-[15px] text-[13px] font-thin"
                : "WEE2 uppercase text-white lg:text-[15px] text-[13px] font-thin"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#b53636] uppercase WEE lg:text-[15px] text-[13px] font-thin"
                : "WEE2 uppercase text-white lg:text-[15px] text-[13px] font-thin"
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#b53636] uppercase WEE lg:text-[15px] font-thin text-[13px]"
                : "WEE2 uppercase text-white lg:text-[15px] font-thin text-[13px]"
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#b53636] uppercase WEE lg:text-[15px] font-thin text-[13px]"
                : "WEE2 uppercase text-white lg:text-[15px] font-thin text-[13px]"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#b53636] uppercase WEE lg:text-[15px] font-thin text-[13px]"
                : "WEE2 uppercase text-white  lg:text-[15px] font-thin text-[13px]"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="w-full fixed  ">
          <div className="md:hidden fixed flex mr-[10px] text-white mt-[-57px] right-0 ">
            <div
              style={{
                backgroundColor: "rgba(218, 59, 59, 0.727)",
              }}
              className="duration-300  transition-all p-2 px-4 z-9999 mt-5 flex justify-center items-center md:pl-0 lg:pl-0 xl:pl-0"
              onClick={() => {
                setOpen(!open);
                setMenu(!menu);
              }}
            >
              {menu ? (
                <button>
                  <i class="fa fa-bars"></i>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <i class="fa fa-bars"></i>
                </button>
              )}
            </div>
          </div>
          <div className="mt-[-80px]">
            <div
              className={`w-[100px] ${
                open ? "h-[210px]" : "h-0"
              } overflow-hidden  BgWa  md:hidden mt-[82px] right-[10px] z-50 absolute duration-300 transition-all flex flex-col items-start    justify-center  gap-5 `}
            >
              <NavLink
                onClick={() => {
                  setClose(false);
                }}
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#b53636] uppercase WEE text-[12px] font-thin ml-3 mt-3"
                    : "WEE2 uppercase text-white text-[12px] font-thin ml-3 mt-3"
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  setClose(false);
                }}
                to="/product"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#b53636cc] uppercase WEE  text-[12px] font-thin ml-3"
                    : "WEE2 uppercase text-white  text-[12px] font-thin ml-3"
                }
              >
                Product
              </NavLink>
              <NavLink
                onClick={() => {
                  setClose(false);
                }}
                to="/service"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#b53636] uppercase WEE  text-[12px] font-thin ml-3"
                    : "WEE2 uppercase text-white text-[12px] font-thin ml-3"
                }
              >
                Service
              </NavLink>
              <NavLink
                onClick={() => {
                  setClose(false);
                }}
                to="/gallery"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#b53636] uppercase WEE  text-[12px] font-thin ml-3"
                    : "WEE2 uppercase text-white  text-[12px] font-thin ml-3"
                }
              >
                Gallery
              </NavLink>
              <NavLink
                onClick={() => {
                  setClose(false);
                }}
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#b53636] uppercase WEE  text-[12px] font-thin ml-3"
                    : "WEE2 uppercase text-white  text-[12px] font-thin ml-3"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex mt-[30px] justify-center md:hidden">
        <p className="text-[46px]  text-white">MOTOR</p>
      </div>
    </div>
  );
}

export default Navbar;
