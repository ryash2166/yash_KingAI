import React from "react";
import logo from "../../assets/logo.png";
import creadits from "../../assets/credits.png";
import Button from "../Common/Button";
import New from "../../assets/new.png";

const Navbar = () => {
  return (
    <div className="bg-[#0d1116] sticky top-0 z-20">
      <header className="h-[68px] w-full px-5">
        <div className="flex h-full justify-between items-center">
          <div className="flex h-full items-center">
            <img src={logo} alt="Logo" className="w-9 h-9 max-sm:w-7 max-sm:h-7" />
            <h1 className="text-xl text-white h-9 flex items-center ml-2">Archiks88 AI</h1>
          </div>
          <div className="flex items-center h-full">
            <div className="flex cursor-pointer justify-center items-center flex-row rounded-[10em] h-9 px-5 bg-[#ffffff14] leading-9 text-sm mr-5 max-md:hidden">
              <img src={creadits} alt="" width={16} height={16} />
              <span className="ml-1 gradient-text text-transparent align-middle">
                Sign in for free credits
              </span>
            </div>
            <div className="mr-5 relative max-sm:hidden">
              <Button
                className="bg-[linear-gradient(135deg,#52ffba_9.27%,#23faec_46.96%,#0af_88.5%)]"
                title="API Calls"
              />
              <img
                src={New}
                alt=""
                className="w-[27px] h-4 absolute -top-[6px] -right-[15px] new-tag"
              />
            </div>
            <Button
              className="bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] px-6 hover:!bg-[linear-gradient(89.86deg,#81d100,#56d69a,#1aaad6)]"
              title="Sign In"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
