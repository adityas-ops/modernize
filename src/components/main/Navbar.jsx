import React from "react";

function Navbar() {
  return (
    <>
      <div className=" hidden sm:flex w-full min-h-[70px]  justify-between px-[25px] ">
        <div className="flex">
        <ul className=" flex flex-row">
          <li className="m-0 p-0">
            <button className="px-[16px] text-[20px] py-[8px] flex items-center h-full justify-center ">
              <i class="ti ti-menu-2"></i>
            </button>
          </li>
          <li className="m-0 p-0">
            <button className="px-[16px] text-[20px] py-[8px] flex items-center h-full justify-center ">
              <i class="ti ti-search"></i>
            </button>
          </li>
        </ul>
        {/* main nav */}
        <ul className="flex flex-row">
            <li className="m-0 p-0">
                <button className="text-[0.875rem] h-[70px] flex items-center justify-center px-[16px]  py-[8px]">
                    Apps
                    <i class="ti ti-chevron-down"></i>
                </button>
            </li>
            <li className="m-0 p-0">
                <button className="text-[0.875rem] h-[70px] flex items-center justify-center px-[16px]  py-[8px]">
                Chat
                </button>
            </li>
            <li className="m-0 p-0">
                <button className="text-[0.875rem] h-[70px] flex items-center justify-center px-[16px]  py-[8px]">
                Calendar
                </button>
            </li>
            <li className="m-0 p-0">
                <button className="text-[0.875rem] h-[70px] flex items-center justify-center px-[16px]  py-[8px]">
               Email
                </button>
            </li>
        </ul>
        </div>
        {/* second div */}
        <div className="flex">
            <ul className="flex flex-row">
                <li className="m-0 p-0">
                    <div className=" px-[16px]  py-[8px] h-[70px] flex items-center justify-center text-[20px]">
                        <img 
                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-en.svg"
                        className="!w-[20px] !h-[20px] bg-cover object-cover rounded-[50%]"
                        alt="a"
                        />
                    </div>
                </li>
                <li className="m-0 p-0">
                    <div className=" px-[16px] relative  py-[8px] h-[70px]  flex items-center justify-center text-[20px]">
                    <i class="ti ti-basket"></i>
                    <span className=" absolute top-[20%] right-[10%] w-[18px] text-white h-[18px] text-[12px] flex items-center justify-center rounded-[50%] bg-[#FA896B]">2</span>
                    </div>
                </li>
                <li className="m-0 p-0">
                    <div className=" px-[16px] relative  py-[8px] h-[70px]  flex items-center justify-center text-[20px]">
                    <i class="ti ti-bell-ringing"></i>
                    <div className=" h-[8px] w-[8px] bg-blue-500 rounded-[50%] absolute top-[22px] right-[9px]"/>
                    </div>
                </li>
                <li className="m-0 p-0">
                    <div className=" px-[16px] relative  py-[8px] h-[70px]  flex items-center justify-center text-[20px]">
                   <div className="w-[35px] h-[35px] rounded-[50%]">
                        <img 
                        src="/assets/user-1.jpg"
                        className=" w-full h-full object-cover rounded-[50%]"
                        alt="a"
                        />
                   </div>
                    </div>
                </li>
            </ul>
        </div>
      </div>
      {/*  for mobile view */}
      <div className="flex sm:hidden justify-between items-center px-[25px] fixed top-0 h-[70px]   w-full ">
        <div className=" py-[8px] px-[16px] text-[20px] ">
        <i class="ti ti-menu-2"></i>
        </div>
        <div className=" py-[8px] px-[16px] text-[20px] ">
        <img 
        src="/assets/logo.svg"
        className=""
        alt="as"
        />
        </div>
        <div className=" py-[8px] px-[16px] text-[20px] ">
        <i class="ti ti-dots fs-7"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
