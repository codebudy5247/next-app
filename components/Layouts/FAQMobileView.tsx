import React,{Fragment,useState} from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    MobileNav,
  } from "@material-tailwind/react";
import MobileNavBar from '../MobileNavBar';

  function Icon(id: any, open: any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 14"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
const FAQMobileView = () => {
    const [open, setOpen] = useState(1);
    const [accordionColor,setAccodionColor] = useState('black')
    const handleOpen = (value: number,color?:string) => {
      setOpen(open === value ? 0 : value);
      setAccodionColor(accordionColor! === color! ? accordionColor! : color!)
    };
  return (
   <>
    <div className="relative bg-white w-full h-[3888px] overflow-hidden text-left text-xl text-white font-fedra-sans-std">
            <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[376px] h-[240px]" />
            <img
              className="absolute top-[0px] left-[94.96px] w-[186.04px] h-[255.19px]"
              alt=""
              src="../group-54.svg"
            />
            <div className="absolute top-[726px] left-[567px] rounded-[10px] bg-white hidden flex-row p-[16px_40px] box-border items-center justify-center text-turquoise font-open-sans">
              <div className="relative font-semibold inline-block">
                Save this progress
              </div>
            </div>
            <div className="absolute top-[2668px] left-[0px] w-[375px] h-[1220px] text-base">
              <div className="absolute top-[0px] left-[0px] bg-gray-1600 w-[375px] h-[1220px]" />
              <div className="absolute top-[50px] left-[36px] flex flex-col items-start justify-start gap-[30px]">
                <img
                  className="relative w-[171.59px] h-[70px] shrink-0 overflow-hidden"
                  alt=""
                  src="../frame10.svg"
                />
                <div className="relative w-[255px] h-[183px] shrink-0">
                  <div className="absolute top-[44px] left-[0px] leading-[150%] inline-block w-[255px]">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">
                      22/18, 2nd Floor, Row B1,Opp. C2 Gate, Near Ansal
                      Corporate Plaza,
                    </p>
                    <p className="m-[0]">Gurgaon, India, 122017</p>
                  </div>
                  <b className="absolute top-[0px] left-[0px] text-lg leading-[150%] inline-block">
                    Head Office
                  </b>
                  <div className="absolute top-[127px] left-[0px] leading-[200%] inline-block">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">
                      <span className="text-gray-1100">Toll Free:</span>
                      <span> 1800 1209 7225</span>
                    </p>
                    <p className="m-[0]">
                      <span className="text-gray-1100">Email:</span>
                      <span> inquiry@whiteglove.co.in</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[373px] left-[36px] flex flex-col items-start justify-start gap-[30px] text-lg text-gray-1100">
                <div className="flex flex-row items-start justify-start gap-[40px]">
                  <div className="relative w-[107px] h-[100px] shrink-0">
                    <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                      Our Divisions
                    </div>
                    <div className="absolute top-[30px] left-[0px] text-base leading-[250%] text-white inline-block">
                      <p className="[margin-block-start:0] [margin-block-end:0px]">
                        White Glove
                      </p>
                      <p className="m-[0]">FLITTE Logistics</p>
                    </div>
                  </div>
                  <div className="relative w-[106px] h-[100px] shrink-0">
                    <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                      Contact Us
                    </div>
                    <div className="absolute top-[30px] left-[0px] text-base leading-[250%] text-white inline-block">
                      <p className="[margin-block-start:0] [margin-block-end:0px]">
                        Get In Touch
                      </p>
                      <p className="m-[0]">Global Network</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[40px]">
                  <div className="relative w-[170px] h-[205px] shrink-0">
                    <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                      Services
                    </div>
                    <div className="absolute top-[30px] left-[0px] text-base leading-[250%] text-white inline-block">
                      <p className="[margin-block-start:0] [margin-block-end:0px]">
                        Domestic Relocation
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:0px]">
                        Vehicle shifting
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:0px]">
                        International Relocation
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:0px]">
                        Corporate Relocation
                      </p>
                      <p className="m-[0]">Storage</p>
                    </div>
                  </div>
                  <div className="relative w-[76px] h-[205px] shrink-0">
                    <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                      Company
                    </div>
                    <div className="absolute top-[30px] left-[0px] text-base leading-[250%] text-white inline-block">
                      <p className="[margin-block-start:0] [margin-block-end:0px]">
                        About Us
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:0px]">
                        Our Clients
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:0px]">
                        FAQs
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:0px]">
                        Careers
                      </p>
                      <p className="m-[0]">Blogs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[758px] left-[16px] rounded-[20px] bg-gray-1500 w-[343px] flex flex-col p-[20px_40px] box-border items-center justify-start gap-[25px]">
                <div className="relative text-lg leading-[140%] font-medium inline-block">
                  Subscribe to our Newsletter
                </div>
                <div className="rounded-[10px] bg-gray-1600 [border:1px_solid_#22567f] box-border relative w-[303px] overflow-hidden flex flex-row p-[16px] items-center justify-center text-gray-1100">
                  <div className="relative inline-block">Email Id</div>
                </div>
                <div className="rounded-[10px] bg-gold w-[303px] flex flex-row p-[16px] box-border items-center justify-center gap-[16px] text-gray-1600">
                  <div className="relative font-medium inline-block">
                    Subscribe
                  </div>
                  <img
                    className="relative w-[21.84px] h-[14px] shrink-0"
                    alt=""
                    src="../group-695.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[1020px] left-[16px] flex flex-col items-center justify-start gap-[20px]">
                <div className="relative bg-gray-1300 w-[343px] h-[1px] shrink-0" />
                <div className="flex flex-row items-center justify-start gap-[30px]">
                  <div className="flex flex-row p-[10px_0px] box-border items-center justify-start">
                    <div className="relative inline-block">Privacy Policy</div>
                  </div>
                  <div className="flex flex-row p-[10px_0px] box-border items-center justify-start">
                    <div className="relative inline-block">{`Terms & Conditions`}</div>
                  </div>
                </div>
                <div className="relative text-sm inline-block">
                  Copyright © 2022 White Glove, All Rights Reserved
                </div>
                <div className="flex flex-row items-start justify-start gap-[20px]">
                  <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[36px] h-[36px] shrink-0 flex flex-row p-[10px] items-center justify-center">
                    <img
                      className="relative w-[9.08px] h-[16px] shrink-0"
                      alt=""
                      src="../facebook.svg"
                    />
                  </div>
                  <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[36px] h-[36px] shrink-0 flex flex-row items-center justify-center">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0"
                      alt=""
                      src="../instagram.svg"
                    />
                  </div>
                  <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[36px] h-[36px] shrink-0 flex flex-col p-[10px] items-center justify-center">
                    <img
                      className="relative w-[18px] h-[16px] shrink-0"
                      alt=""
                      src="../twitter.svg"
                    />
                  </div>
                  <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[36px] h-[36px] shrink-0 flex flex-col items-center justify-center">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0"
                      alt=""
                      src="../linkedin4.svg"
                    />
                  </div>
                  <div className="rounded-[5px] [border:1px_solid_#d9d9d9] box-border relative w-[32px] h-[32px] shrink-0 hidden flex-col items-center justify-center">
                    <img
                      className="relative w-[16.09px] h-[16px] shrink-0"
                      alt=""
                      src="../whatsapp.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[76px] left-[44px] flex flex-row items-center justify-start gap-[20px] text-2xl text-gray-1600 font-poppins">
              <img
                className="relative w-[54.75px] h-[48px] shrink-0"
                alt=""
                src="../group-67.svg"
              />
              <div className="flex flex-col items-start justify-center">
                <b className="relative leading-[115%] inline-block w-[212px]">
                  Frequently Asked Questions
                </b>
              </div>
            </div>
            <div className="absolute top-[152px] left-[16px] rounded-[20px] bg-white w-[343px] flex flex-col p-[20px] box-border items-start justify-start text-gray-400 font-poppins">
            <Fragment>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(1,'blue')}
                  className="py-2 sm:py-4 border-b-2 border-[#E4E4E4] secondaryText text-lg sm:text-2xl"
                  style={{ borderStyle: "hidden", backgroundColor: "white" }}
                >
                  When is the best time to relocate?
                </AccordionHeader>
                <AccordionBody
                  className="text-[#3c3c43] text-md"
                  style={{ color: "gray" }}
                >
                  Try to provide moving companies with as much notice as
                  possible, especially if you are moving during the summer
                  months (mid-May to mid-September) or at the beginning or end
                  of a month (regardless of the season). We recommend making
                  arrangements at least four to six weeks before your desired
                  moving date. This will increase your likelihood of securing
                  the pickup and delivery dates you desire. Add even more time
                  to make a decision if you are obligated by your employer to
                  submit estimates for approval.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="py-2 sm:py-4 border-b-2 border-[#E4E4E4] secondaryText  text-xl sm:text-2xl"
                  style={{ borderStyle: "hidden", backgroundColor: "white" }}
                >
                  When is the best time to relocate?
                </AccordionHeader>
                <AccordionBody
                  className="text-[#3c3c43] text-md"
                  style={{ color: "gray" }}
                >
                  Try to provide moving companies with as much notice as
                  possible, especially if you are moving during the summer
                  months (mid-May to mid-September) or at the beginning or end
                  of a month (regardless of the season). We recommend making
                  arrangements at least four to six weeks before your desired
                  moving date. This will increase your likelihood of securing
                  the pickup and delivery dates you desire. Add even more time
                  to make a decision if you are obligated by your employer to
                  submit estimates for approval.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="py-2 sm:py-4 border-b-2 border-[#E4E4E4] secondaryText text-xl sm:text-2xl"
                  style={{ borderStyle: "hidden", backgroundColor: "white" }}
                >
                  When is the best time to relocate?
                </AccordionHeader>
                <AccordionBody
                  className="text-[#3c3c43] text-md"
                  style={{ color: "gray" }}
                >
                  Try to provide moving companies with as much notice as
                  possible, especially if you are moving during the summer
                  months (mid-May to mid-September) or at the beginning or end
                  of a month (regardless of the season). We recommend making
                  arrangements at least four to six weeks before your desired
                  moving date. This will increase your likelihood of securing
                  the pickup and delivery dates you desire. Add even more time
                  to make a decision if you are obligated by your employer to
                  submit estimates for approval.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="py-2 sm:py-4 border-b-2 border-[#E4E4E4] secondaryText text-xl sm:text-2xl"
                  style={{ borderStyle: "hidden", backgroundColor: "white" }}
                >
                When is the best time to relocate?
                </AccordionHeader>
                <AccordionBody
                  className="text-[#3c3c43] text-md"
                  style={{ color: "gray" }}
                >
                  Try to provide moving companies with as much notice as
                  possible, especially if you are moving during the summer
                  months (mid-May to mid-September) or at the beginning or end
                  of a month (regardless of the season). We recommend making
                  arrangements at least four to six weeks before your desired
                  moving date. This will increase your likelihood of securing
                  the pickup and delivery dates you desire. Add even more time
                  to make a decision if you are obligated by your employer to
                  submit estimates for approval.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className="py-2 sm:py-4 border-b-2 border-[#E4E4E4] secondaryText text-xl sm:text-2xl"
                  style={{ borderStyle: "hidden", backgroundColor: "white" }}
                >
                When is the best time to relocate?
                </AccordionHeader>
                <AccordionBody
                  className="text-[#3c3c43] text-md"
                  style={{ color: "gray" }}
                >
                  Try to provide moving companies with as much notice as
                  possible, especially if you are moving during the summer
                  months (mid-May to mid-September) or at the beginning or end
                  of a month (regardless of the season). We recommend making
                  arrangements at least four to six weeks before your desired
                  moving date. This will increase your likelihood of securing
                  the pickup and delivery dates you desire. Add even more time
                  to make a decision if you are obligated by your employer to
                  submit estimates for approval.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="py-2 sm:py-4 border-b-2 border-[#E4E4E4] secondaryText text-xl sm:text-2xl"
                  style={{ borderStyle: "hidden", backgroundColor: "white" }}
                >
                When is the best time to relocate?
                </AccordionHeader>
                <AccordionBody
                  className="text-[#3c3c43] text-md"
                  style={{ color: "gray" }}
                >
                  Try to provide moving companies with as much notice as
                  possible, especially if you are moving during the summer
                  months (mid-May to mid-September) or at the beginning or end
                  of a month (regardless of the season). We recommend making
                  arrangements at least four to six weeks before your desired
                  moving date. This will increase your likelihood of securing
                  the pickup and delivery dates you desire. Add even more time
                  to make a decision if you are obligated by your employer to
                  submit estimates for approval.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(7)}
                  className="py-2 sm:py-4 border-b-2 border-[#E4E4E4] secondaryText text-xl sm:text-2xl"
                  style={{ borderStyle: "hidden", backgroundColor: "white" }}
                >
                When is the best time to relocate?
                </AccordionHeader>
                <AccordionBody
                  className="text-[#3c3c43] text-md"
                  style={{ color: "gray" }}
                >
                  Try to provide moving companies with as much notice as
                  possible, especially if you are moving during the summer
                  months (mid-May to mid-September) or at the beginning or end
                  of a month (regardless of the season). We recommend making
                  arrangements at least four to six weeks before your desired
                  moving date. This will increase your likelihood of securing
                  the pickup and delivery dates you desire. Add even more time
                  to make a decision if you are obligated by your employer to
                  submit estimates for approval.
                </AccordionBody>
              </Accordion>
          </Fragment>
            </div>
            <div className="absolute top-[2414px] left-[16px] rounded-[20px] bg-gray-1600 w-[343px] flex flex-col p-[30px] box-border items-center justify-start gap-[20px] text-center text-2xl">
              <div className="rounded-[20px] flex flex-col items-center justify-start gap-[10px]">
                <div className="relative leading-[130%] font-medium inline-block w-[287px]">
                  Any Questions?
                </div>
                <div className="relative text-lg leading-[130%] font-medium text-gray-900 inline-block w-[211px]">
                  Consult with and Expert
                </div>
              </div>
              <div className="rounded-[10px] bg-gold w-[303px] flex flex-row p-[20px_0px] box-border items-center justify-center gap-[20px] text-left text-lg text-gray-1600 font-open-sans">
                <div className="relative font-semibold inline-block">
                  Let’s Talk
                </div>
                {/* <img
                  className="relative w-[24px] h-[24px] shrink-0 hidden"
                  alt=""
                  src="../arrow-right-alt7.svg"
                /> */}
                <img
                  className="relative w-[21.84px] h-[14px] shrink-0"
                  alt=""
                  src="../group-6915.svg"
                />
              </div>
            </div>
            {/* <MobileNavBar /> */}
            <div className="absolute top-[0px] left-[0px] bg-white w-[375px] h-[56px] flex flex-row p-[25px_16px] box-border items-center justify-between text-base text-gray-1600">
              <div className="flex flex-row items-center justify-start">
                <img
                  className="relative w-[77.71px] h-[32px] shrink-0 overflow-hidden"
                  alt=""
                  src="../frame11.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <img
                    className="relative w-[20px] h-[20px] shrink-0"
                    alt=""
                    src="../location-on5.svg"
                  />
                  <div className="relative leading-[130%] font-medium inline-block">
                    Track
                  </div>
                </div>
                <div className="flex flex-row p-[10px_3px] box-border items-center justify-start gap-[20px] text-xl text-gray-1400 font-inter">
                  <div className="relative hidden">Ravi Kharinta</div>
                  <img
                    className="relative w-[32px] h-[32px] shrink-0"
                    alt=""
                    src="../menu4.svg"
                  />
                </div>
              </div>
            </div>
    </div>
   </>
  )
}

export default FAQMobileView