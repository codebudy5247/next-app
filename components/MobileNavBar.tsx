import React,{useState} from "react";
import NavPopup from "../components/NavPopup"


const MobileNavBar = () => {
    const [showModal, setShowModal] = useState(false);
    
  return (
    <>
    <div className="absolute top-[0px] left-[0px] bg-white w-[375px] h-[56px] flex flex-row p-[25px_16px] box-border items-center justify-between text-base">
      <div className="flex flex-row items-center justify-start">
        <img
          className="relative w-[77.71px] h-[32px] shrink-0 overflow-hidden"
          alt=""
          src="../frame.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-start gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[5px]">
          <img
            className="relative w-[20px] h-[20px] shrink-0"
            alt=""
            src="../location-on.svg"
          />
          <div className="relative leading-[130%] font-medium inline-block">
            Track
          </div>
        </div>
        <div className="flex flex-row p-[10px_3px] box-border items-center justify-start gap-[20px] text-xl text-gray-1400 font-inter">
          <div className="relative hidden">Ravi Kharinta</div>

          <button
            className="cursor-pointer block w-full md:w-auto text-white  font-medium rounded-sm text-sm px-3 py-1.5 text-center"
            type="button"
            data-modal-toggle="top-right-modal"
            style={{border:'none',backgroundColor:'white'}}
            onClick={() =>setShowModal(true)}
          >
            <img
              className="relative w-[32px] h-[32px] shrink-0"
              alt=""
              src="../menu.svg"
            />
          </button>
        </div>
      </div>
    </div>
    <NavPopup showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default MobileNavBar;
