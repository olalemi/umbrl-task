"use client";
import { Fragment, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import Button from "./Button";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const handleNavigation = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <div className="fixed top-10 right-10 z-50">
        <Hamburger
          easing="ease-in"
          size={40}
          direction="left"
          duration={0.3}
          toggled={isOpen}
          toggle={setOpen}
          color="#000"
        />
      </div>

      <div
        className={`${
          isOpen ? "w-full" : "w-0"
        } fixed bg-white h-full top-0 right-0 z-40 transition-all ease-in duration-300`}
      >
        {isOpen && (
          <div className="flex flex-col text-center mt-40 justify-center gap-5">
            <div>
              <p className="font-normal text-base pb-5 cursor-pointer">Demos</p>
            </div>
            <div>
              <p className="font-normal text-base pb-5 cursor-pointer">Pages</p>
            </div>
            <div>
              <p className="font-normal text-base pb-5 cursor-pointer">Support</p>
            </div>
            <div>
              <p className="font-normal text-base pb-5 cursor-pointer">
               Contact
              </p>
            </div>
            <div>
              <p className="font-normal text-base pb-5 cursor-pointer">
                Sign in
              </p>
            </div>
            <div className="flex justify-center px-4">
              <div>
                <Button>Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default HamburgerMenu;
