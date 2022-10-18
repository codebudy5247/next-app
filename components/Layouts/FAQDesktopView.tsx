import FAQ from "../FAQ";
import Header from "../Header";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React, { Fragment, useState, useCallback } from "react";

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

const FAQDesktopView = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="relative bg-white w-full h-[3494px] overflow-hidden text-left text-5xl text-gray-1600 font-poppins">
      <div className="absolute top-[100px] left-[0px] bg-gray-200 w-[1920px] h-[500px]" />
      <img
        className="absolute h-[23.91%] w-[31.72%] top-[0%] right-[12.45%] bottom-[76.09%] left-[55.83%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../group-54.svg"
      />
      <Header />
      <div className="absolute top-[297px] left-[300px] rounded-[20px] bg-white [border:2px_solid_#f1f1f1] box-border w-[1321px] flex flex-row p-[100px] items-start justify-between text-3xl text-gray-400">
        <div className="w-[1121px] shrink-0 flex flex-col items-start justify-start">
          <Fragment>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="py-4 sm:py-8 border-b-2 border-[#E4E4E4] primaryText font-bold text-xl sm:text-2xl"
                style={{ borderStyle: "hidden", backgroundColor: "white" }}
              >
                When is the best time to relocate?
              </AccordionHeader>
              <AccordionBody
                className="text-[#3c3c43] text-md"
                style={{ color: "gray" }}
              >
                Try to provide moving companies with as much notice as possible,
                especially if you are moving during the summer months (mid-May
                to mid-September) or at the beginning or end of a month
                (regardless of the season). We recommend making arrangements at
                least four to six weeks before your desired moving date. This
                will increase your likelihood of securing the pickup and
                delivery dates you desire. Add even more time to make a decision
                if you are obligated by your employer to submit estimates for
                approval.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="py-4 sm:py-8 border-b-2 border-[#E4E4E4] primaryText font-bold text-xl sm:text-2xl"
                style={{ borderStyle: "hidden", backgroundColor: "white" }}
              >
                When is the best time to relocate?
              </AccordionHeader>
              <AccordionBody
                className="text-[#3c3c43] text-md"
                style={{ color: "gray" }}
              >
                Try to provide moving companies with as much notice as possible,
                especially if you are moving during the summer months (mid-May
                to mid-September) or at the beginning or end of a month
                (regardless of the season). We recommend making arrangements at
                least four to six weeks before your desired moving date. This
                will increase your likelihood of securing the pickup and
                delivery dates you desire. Add even more time to make a decision
                if you are obligated by your employer to submit estimates for
                approval.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="py-4 sm:py-8 border-b-2 border-[#E4E4E4] primaryText font-bold text-xl sm:text-2xl"
                style={{ borderStyle: "hidden", backgroundColor: "white" }}
              >
                When is the best time to relocate?
              </AccordionHeader>
              <AccordionBody
                className="text-[#3c3c43] text-md"
                style={{ color: "gray" }}
              >
                Try to provide moving companies with as much notice as possible,
                especially if you are moving during the summer months (mid-May
                to mid-September) or at the beginning or end of a month
                (regardless of the season). We recommend making arrangements at
                least four to six weeks before your desired moving date. This
                will increase your likelihood of securing the pickup and
                delivery dates you desire. Add even more time to make a decision
                if you are obligated by your employer to submit estimates for
                approval.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="py-4 sm:py-8 border-b-2 border-[#E4E4E4] primaryText font-bold text-xl sm:text-2xl"
                style={{ borderStyle: "hidden", backgroundColor: "white" }}
              >
                When is the best time to relocate?
              </AccordionHeader>
              <AccordionBody
                className="text-[#3c3c43] text-md"
                style={{ color: "gray" }}
              >
                Try to provide moving companies with as much notice as possible,
                especially if you are moving during the summer months (mid-May
                to mid-September) or at the beginning or end of a month
                (regardless of the season). We recommend making arrangements at
                least four to six weeks before your desired moving date. This
                will increase your likelihood of securing the pickup and
                delivery dates you desire. Add even more time to make a decision
                if you are obligated by your employer to submit estimates for
                approval.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="py-4 sm:py-8 border-b-2 border-[#E4E4E4] primaryText font-bold text-xl sm:text-2xl"
                style={{ borderStyle: "hidden", backgroundColor: "white" }}
              >
                When is the best time to relocate?
              </AccordionHeader>
              <AccordionBody
                className="text-[#3c3c43] text-md"
                style={{ color: "gray" }}
              >
                Try to provide moving companies with as much notice as possible,
                especially if you are moving during the summer months (mid-May
                to mid-September) or at the beginning or end of a month
                (regardless of the season). We recommend making arrangements at
                least four to six weeks before your desired moving date. This
                will increase your likelihood of securing the pickup and
                delivery dates you desire. Add even more time to make a decision
                if you are obligated by your employer to submit estimates for
                approval.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className="py-4 sm:py-8 border-b-2 border-[#E4E4E4] primaryText font-bold text-xl sm:text-2xl"
                style={{ borderStyle: "hidden", backgroundColor: "white" }}
              >
                When is the best time to relocate?
              </AccordionHeader>
              <AccordionBody
                className="text-[#3c3c43] text-md"
                style={{ color: "gray" }}
              >
                Try to provide moving companies with as much notice as possible,
                especially if you are moving during the summer months (mid-May
                to mid-September) or at the beginning or end of a month
                (regardless of the season). We recommend making arrangements at
                least four to six weeks before your desired moving date. This
                will increase your likelihood of securing the pickup and
                delivery dates you desire. Add even more time to make a decision
                if you are obligated by your employer to submit estimates for
                approval.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(7)}
                className="py-4 sm:py-8 border-b-2 border-[#E4E4E4] primaryText font-bold text-xl sm:text-2xl"
                style={{ borderStyle: "hidden", backgroundColor: "white" }}
              >
                When is the best time to relocate?
              </AccordionHeader>
              <AccordionBody
                className="text-[#3c3c43] text-md"
                style={{ color: "gray" }}
              >
                Try to provide moving companies with as much notice as possible,
                especially if you are moving during the summer months (mid-May
                to mid-September) or at the beginning or end of a month
                (regardless of the season). We recommend making arrangements at
                least four to six weeks before your desired moving date. This
                will increase your likelihood of securing the pickup and
                delivery dates you desire. Add even more time to make a decision
                if you are obligated by your employer to submit estimates for
                approval.
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>
      </div>
      <div className="absolute top-[147px] left-[589px] flex flex-row items-center justify-start gap-[50px]">
        <img
          className="relative w-[114.07px] h-[100px] shrink-0"
          alt=""
          src="../group-67.svg"
        />
        <div className="flex flex-col items-start justify-center">
          <b className="relative leading-[130%] inline-block">
            Frequently Asked Questions
          </b>
        </div>
      </div>
      <div className="absolute top-[2441px] left-[300px] rounded-[20px] bg-gray-1600 w-[1321px] flex flex-row p-[100px] box-border items-center justify-between text-white">
        <div className="rounded-[20px] flex flex-col items-start justify-center gap-[10px]">
          <div className="relative leading-[130%] font-medium inline-block">
            Any Questions?
          </div>
          <div className="relative text-xl leading-[130%] font-medium text-gray-900 inline-block">
            Consult with an Expert
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-[20px_40px] bg-gold rounded-[10px] flex flex-row box-border items-center justify-start gap-[20px]">
          <div className="relative text-xl font-semibold font-open-sans text-gray-1600 text-left inline-block">
            Let’s Talk
          </div>
          <img
            className="relative w-[24px] h-[24px] shrink-0 hidden"
            alt=""
            src="../arrow-right-alt.svg"
          />
          <img
            className="relative w-[21.84px] h-[14px] shrink-0"
            alt=""
            src="../group-69.svg"
          />
        </button>
      </div>
      <div className="absolute top-[2829px] left-[0px] w-[1920px] h-[665px] text-sm text-white font-open-sans">
        <div className="absolute top-[0px] left-[0px] bg-gray-1600 w-[1920px] h-[665px]" />
        <img
          className="absolute h-[118.6%] w-[31.36%] top-[609.5%] right-[59.73%] bottom-[-628.1%] left-[8.91%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
        />
        <img
          className="absolute top-[135px] left-[337.1px] w-[1246.79px] h-[496px]"
          alt=""
          src="../world-map-bg.svg"
        />
        <div className="absolute top-[544.59px] left-[300px] w-[1319px] h-[70px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-1300 w-[1319px] h-[1px]" />
          <div className="absolute top-[31px] left-[0px] w-[1319px] h-[39px]">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[30px]">
              <div className="flex flex-row p-[10px_0px] box-border items-center justify-start">
                <div className="relative font-semibold inline-block">
                  Privacy Policy
                </div>
              </div>
              <div className="flex flex-row p-[10px_0px] box-border items-center justify-start">
                <div className="relative font-semibold inline-block">{`Terms & Conditions`}</div>
              </div>
            </div>
            <div className="absolute top-[10px] left-[491px] font-semibold inline-block">
              Copyright © 2022 White Glove, All Rights Reserved
            </div>
            <div className="absolute top-[4px] left-[1161px] flex flex-row items-center justify-center">
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-row p-[10px] items-center justify-center">
                  <img
                    className="relative w-[9.08px] h-[16px] shrink-0"
                    alt=""
                    src="../facebook.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[16px] h-[16px] shrink-0"
                    alt=""
                    src="../instagram.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-col p-[10px] items-center justify-center">
                  <img
                    className="relative w-[18px] h-[16px] shrink-0"
                    alt=""
                    src="../twitter.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-col items-center justify-center">
                  <img
                    className="relative w-[16px] h-[16px] shrink-0"
                    alt=""
                    src="../linkedin.svg"
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
        </div>
        <div className="absolute top-[100px] left-[300px] w-[1066px] h-[405px] text-xl">
          <div className="absolute top-[0px] left-[477px] w-[589px] h-[284px] text-gray-1100">
            <div className="absolute top-[0px] left-[497px] w-[92px] h-[222px]">
              <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
                Company
              </div>
              <div
                className="absolute top-[47px] left-[0px] text-sm leading-[250%] font-semibold text-white inline-block cursor-pointer"
                //   onClick={onAboutUsOurClick}
              >
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
            <div className="absolute top-[0px] left-[0px] w-[129px] h-[284px]">
              <div className="absolute top-[0px] left-[0px] w-[129px] h-[117px]">
                <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
                  Our Divisions
                </div>
                <div className="absolute top-[47px] left-[0px] text-sm leading-[250%] font-semibold text-white inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    White Glove
                  </p>
                  <p className="m-[0]">FLITTE Logistics</p>
                </div>
              </div>
              <div className="absolute top-[167px] left-[0px] w-[106px] h-[117px]">
                <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
                  Contact Us
                </div>
                <div className="absolute top-[47px] left-[0px] text-sm leading-[250%] font-semibold text-white inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Get In Touch
                  </p>
                  <p className="m-[0]">Global Network</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[229px] w-[168px] h-[222px]">
              <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
                Services
              </div>
              <div className="absolute top-[47px] left-[0px] text-sm leading-[250%] font-semibold text-white inline-block">
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
          </div>
          <div className="absolute top-[0px] left-[0px] w-[255px] h-[344.59px] text-sm">
            <div className="absolute top-[161.59px] left-[0px] w-[255px] h-[183px]">
              <div className="absolute top-[44px] left-[0px] leading-[150%] font-semibold inline-block w-[255px]">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  22/18, 2nd Floor, Row B1,Opp. C2 Gate, Near Ansal Corporate
                  Plaza,
                </p>
                <p className="m-[0]">Gurgaon, India, 122017</p>
              </div>
              <b className="absolute top-[0px] left-[0px] text-base leading-[150%] inline-block">
                Head Office
              </b>
              <div className="absolute top-[127px] left-[0px] leading-[200%] inline-block">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span className="font-semibold font-open-sans">
                    <span className="text-gray-1100">Toll Free:</span>
                  </span>
                  <span>
                    <span className="font-semibold font-open-sans">{` `}</span>
                    <span>1800 1209 7225</span>
                  </span>
                </p>
                <p className="m-[0]">
                  <span className="font-semibold">
                    <span className="text-gray-1100">Email:</span>
                    <span> inquiry@whiteglove.co.in</span>
                  </span>
                </p>
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[200px] h-[81.59px] overflow-hidden"
              alt=""
              src="../frame1.svg"
            />
          </div>
          <div className="absolute top-[314px] left-[477px] rounded-[20px] bg-gray-1400 w-[589px] flex flex-row p-[20px_30px] box-border items-center justify-center gap-[25px] text-base">
            <div className="relative font-semibold inline-block w-[132px] shrink-0">
              Subscribe to our Newsletter
            </div>
            <div className="w-[354px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
              <input
                className="[border:1px_solid_#22567f] bg-gray-1600 rounded-[10px] box-border relative w-[197px] shrink-0 overflow-hidden flex flex-row p-[16px] items-center justify-start"
                type="text"
                placeholder="Email Id"
              />
              <button className="cursor-pointer [border:none] p-[16px] bg-gold rounded-[10px] flex flex-row box-border items-center justify-center gap-[16px]">
                <div className="relative text-sm font-semibold font-open-sans text-gray-1600 text-left inline-block">
                  Subscribe
                </div>
                <img
                  className="relative w-[21.84px] h-[14px] shrink-0"
                  alt=""
                  src="../group-691.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="absolute top-[457px] left-[1571px] rounded-[10px] bg-gold w-[48px] h-[48px] flex flex-row items-center justify-center"
        >
          <img
            className="relative w-[16px] h-[16px] shrink-0"
            alt=""
            src="../arrow-upward.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQDesktopView;
