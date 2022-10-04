import React, { Fragment, useState, useCallback } from "react";
import { useRouter } from "next/router";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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
export default function FAQ() {
    const router = useRouter();

  const onClick = useCallback(() => {
    router.push("/f-a-qs-page");
  }, [router]);
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="absolute top-[5309px] left-[0px] w-[1920px] h-[1110px] text-xl">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1920px] h-[1110px]" />
      <div className="absolute top-[100px] left-[555px] flex flex-col items-center justify-start gap-[100px]">
        <b className="relative text-6xl inline-block text-center">
          FAQ about Packers and Movers
        </b>
        <div className="flex flex-col items-start justify-start text-gray-1300">
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[810px] relative w-[810px] items-center">
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
                  className="py-4 sm:py-8 border-b-2 border-[#E4E4E4] primaryText font-bold text-xl sm:text-2xl"
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
                  className="py-4 sm:py-8 border-b-2 border-[#E4E4E4] primaryText font-bold text-xl sm:text-2xl"
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
                  className="py-4 sm:py-8 border-b-2 border-[#E4E4E4] primaryText font-bold text-xl sm:text-2xl"
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
        </div>
        <div className="rounded-[10px] [border:1px_solid_#439fd9] box-border relative flex flex-row p-[30px_40px] items-center justify-start gap-[20px] text-teal-100">
          <div className="relative inline-block" onClick={onClick}>View all FAQs</div>
          <img
            className="relative w-[24px] h-[24px] shrink-0 hidden"
            alt=""
            src="../arrow-right-alt10.svg"
          />
          <img
            className="relative w-[25.32px] h-[16px] shrink-0"
            alt=""
            src="../group-6911.svg"
          />
        </div>
      </div>
    </div>
  );
}
