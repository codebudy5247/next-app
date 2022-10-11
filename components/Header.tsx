import React from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Dropdown from "./Dropdown";
const Header = () => {
  const router = useRouter();

  const company_dropdown_options = [
    {
      id:'1',
      href:'/about-page',
      name:'About US'
    },
    {
      id:'2',
      href:'/',
      name:'Our Client'
    },
    {
      id:'3',
      href:'/f-a-qs-page',
      name:'FAQs'
    },
    {
      id:'4',
      href:'/',
      name:'Blogs'
    },
  ]

  const contact_dropdown_options =[
    {
      id:'1',
      name:'Contact US',
      href:'contact-us-page'
    },
    {
      id:'2',
      name:'Contact US(Track Order)',
      href:'contact-us-track-your-order'
    }
  ]

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);
  const onServiceTextClick = useCallback(() => {
    router.push("/services-by-sub-category-page");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contact-us-page");
  }, [router]);
  return (
    <div className="absolute  top-[0px] left-[0px] bg-white w-[1920px] desktop:w-[1366px] flex flex-row p-[10px_300px] desktop:p-[5px_100px] box-border items-center justify-between text-lg">
      <div className="flex flex-row items-center justify-start">
        <img
          className="relative w-[145.71px] h-[60px] shrink-0 overflow-hidden"
          alt=""
          src="../frame17.svg"
        />
      </div>
      <div className="flex flex-row p-[10px_3px] box-border items-center justify-start gap-[60px]">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div className="flex flex-row p-[16px] box-border items-center justify-start text-teal-100">
            <div className="relative font-medium inline-block cursor-pointer" onClick={onHomeTextClick}>Home</div>
          </div>
          <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[5px]">
            <div
              className="relative font-medium inline-block cursor-pointer"
            >
              
             <Dropdown name="Company" company_dropdown_options={company_dropdown_options} />
            </div>
            {/* <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
              <img
                className="relative w-[10.6px] h-[10.6px] shrink-0"
                alt=""
                src="../chevron-right18.svg"
              />
            </div> */}
          </div>
           
          <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[5px]">
            <div className="relative font-medium inline-block cursor-pointer" onClick={onServiceTextClick}>Services</div>
            <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
              <img
                className="relative w-[10.6px] h-[10.6px] shrink-0"
                alt=""
                src="../chevron-right18.svg"
              />
            </div>
          </div>
          <div className="flex flex-row p-[16px] box-border items-center justify-start">
            <div className="relative font-medium inline-block cursor-pointer">Careers</div>
          </div>
          <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[10px]">
            <div
              className="relative font-medium inline-block cursor-pointer"
              onClick={onContactTextClick}
            >
            Contact Us 

            </div>
            {/* <div className="w-[40px] h-[40px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
              <img
                className="relative w-[20.6px] h-[20.6px] shrink-0"
                alt=""
                src="../chevron-right20.svg"
              />
            </div> */}
          </div>
        </div>
        <div className="rounded-[10px] bg-gray-200 flex flex-row p-[16px] box-border items-center justify-center gap-[10px]">
          <img
            className="relative w-[24px] h-[24px] shrink-0"
            alt=""
            src="../location-on7.svg"
          />
          <div className="relative font-medium inline-block">
            Track Your Order
          </div>
        </div>
        {/* <img
          className="relative w-[32px] h-[32px] shrink-0"
          alt=""
          src="../menu7.svg"
        /> */}
      </div>
    </div>
  );
};

export default Header;
