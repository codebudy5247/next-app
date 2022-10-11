import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import useWindowResize from "../hooks/useWindowResize";

const FAQsPage: NextPage = () => {
  const router = useRouter();

  const onCompanyTextClick = useCallback(() => {
    router.push("/about-page");
  }, [router]);

  const onFrameContainer7Click = useCallback(() => {
    router.push("/contact-us-track-your-order");
  }, [router]);

  const onAboutUsOurClick = useCallback(() => {
    router.push("/f-a-qs-page");
  }, [router]);

  const windowSize = useWindowResize();

  return (
    <>
      {Number(windowSize?.width <= 475) ? (
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
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[0px_0px_30px] items-center justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">01</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[206px] shrink-0">
                    When is the best time to relocate?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios9.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-col p-[30px_0px] items-start justify-start gap-[20px]">
                <div className="w-[303px] flex flex-row items-start justify-between">
                  <div className="flex flex-row items-start justify-start gap-[20px]">
                    <b className="relative inline-block">02</b>
                    <div className="relative text-lg font-semibold font-open-sans text-teal-100 inline-block w-[200px] shrink-0">
                      When should I contact relocation companies for estimates?
                    </div>
                  </div>
                  <img
                    className="relative w-[32px] h-[32px] shrink-0"
                    alt=""
                    src="../arrow-forward-ios10.svg"
                  />
                </div>
                <div className="relative text-base leading-[150%] font-open-sans text-gray-1000 inline-block w-[303px]">
                  Try to provide moving companies with as much notice as
                  possible, especially if you are moving during the summer
                  months (mid-May to mid-September) or at the beginning or end
                  of a month (regardless of the season). We recommend making
                  arrangements at least four to six weeks before your desired
                  moving date. This will increase your likelihood of securing
                  the pickup and delivery dates you desire. Add even more time
                  to make a decision if you are obligated by your employer to
                  submit estimates for approval.
                </div>
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">03</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[202px] shrink-0">
                    How could your company's prices differ from others?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios11.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">04</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[203px] shrink-0">
                    There are major differences between the movers’ estimated
                    volumes. How do I deal with this?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios12.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">05</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[192px] shrink-0">
                    What are the do’s and dont’s when it comes to moving?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios13.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">06</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[191px] shrink-0">
                    How are transportation charges calculated?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios14.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">07</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[195px] shrink-0">
                    How should I pay and what are the payment methods?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios15.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
                  <b className="relative inline-block">08</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[718px] shrink-0">
                    What is an inventory?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios16.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">10</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[202px] shrink-0">
                    Can I pack anything in the drawers of my dresser or desk?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios17.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">11</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[207px] shrink-0">
                    Will the relocators pack all the boxes?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios18.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">12</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[203px] shrink-0">
                    What should I do with my jewellery and other valuable items?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios19.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">13</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[197px] shrink-0">
                    How do I prepare my appliances for moving?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios20.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">14</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[204px] shrink-0">
                    How will white glove packers and movers protect my
                    upholstered furniture?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios21.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">15</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[204px] shrink-0">
                    Am I protected against loss or damage while my goods are in
                    transit?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios22.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">16</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[207px] shrink-0">
                    How do I prepare my home and myself for move day?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0 opacity-[0.3]"
                  alt=""
                  src="../arrow-forward-ios23.svg"
                />
              </div>
              <div className="w-[303px] flex flex-row p-[30px_0px_0px] box-border items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">17</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[208px] shrink-0">
                    How will I know where my shipment is once it leaves my home?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios24.svg"
                />
              </div>
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
                <img
                  className="relative w-[24px] h-[24px] shrink-0 hidden"
                  alt=""
                  src="../arrow-right-alt7.svg"
                />
                <img
                  className="relative w-[21.84px] h-[14px] shrink-0"
                  alt=""
                  src="../group-6915.svg"
                />
              </div>
            </div>
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
      ) : (
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
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[0px_0px_30px] items-center justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">01</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[206px] shrink-0">
                    When is the best time to relocate?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios9.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-col p-[30px_0px] items-start justify-start gap-[20px]">
                <div className="w-[303px] flex flex-row items-start justify-between">
                  <div className="flex flex-row items-start justify-start gap-[20px]">
                    <b className="relative inline-block">02</b>
                    <div className="relative text-lg font-semibold font-open-sans text-teal-100 inline-block w-[200px] shrink-0">
                      When should I contact relocation companies for estimates?
                    </div>
                  </div>
                  <img
                    className="relative w-[32px] h-[32px] shrink-0"
                    alt=""
                    src="../arrow-forward-ios10.svg"
                  />
                </div>
                <div className="relative text-base leading-[150%] font-open-sans text-gray-1000 inline-block w-[303px]">
                  Try to provide moving companies with as much notice as
                  possible, especially if you are moving during the summer
                  months (mid-May to mid-September) or at the beginning or end
                  of a month (regardless of the season). We recommend making
                  arrangements at least four to six weeks before your desired
                  moving date. This will increase your likelihood of securing
                  the pickup and delivery dates you desire. Add even more time
                  to make a decision if you are obligated by your employer to
                  submit estimates for approval.
                </div>
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">03</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[202px] shrink-0">
                    How could your company's prices differ from others?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios11.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">04</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[203px] shrink-0">
                    There are major differences between the movers’ estimated
                    volumes. How do I deal with this?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios12.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">05</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[192px] shrink-0">
                    What are the do’s and dont’s when it comes to moving?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios13.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">06</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[191px] shrink-0">
                    How are transportation charges calculated?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios14.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">07</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[195px] shrink-0">
                    How should I pay and what are the payment methods?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios15.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
                  <b className="relative inline-block">08</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[718px] shrink-0">
                    What is an inventory?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios16.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">10</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[202px] shrink-0">
                    Can I pack anything in the drawers of my dresser or desk?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios17.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">11</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[207px] shrink-0">
                    Will the relocators pack all the boxes?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios18.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">12</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[203px] shrink-0">
                    What should I do with my jewellery and other valuable items?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios19.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">13</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[197px] shrink-0">
                    How do I prepare my appliances for moving?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios20.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">14</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[204px] shrink-0">
                    How will white glove packers and movers protect my
                    upholstered furniture?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios21.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">15</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[204px] shrink-0">
                    Am I protected against loss or damage while my goods are in
                    transit?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios22.svg"
                />
              </div>
              <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[303px] flex flex-row p-[30px_0px] items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">16</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[207px] shrink-0">
                    How do I prepare my home and myself for move day?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0 opacity-[0.3]"
                  alt=""
                  src="../arrow-forward-ios23.svg"
                />
              </div>
              <div className="w-[303px] flex flex-row p-[30px_0px_0px] box-border items-start justify-between">
                <div className="w-[303px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
                  <b className="relative inline-block">17</b>
                  <div className="relative text-lg font-semibold font-open-sans text-gray-1200 inline-block w-[208px] shrink-0">
                    How will I know where my shipment is once it leaves my home?
                  </div>
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios24.svg"
                />
              </div>
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
                <img
                  className="relative w-[24px] h-[24px] shrink-0 hidden"
                  alt=""
                  src="../arrow-right-alt7.svg"
                />
                <img
                  className="relative w-[21.84px] h-[14px] shrink-0"
                  alt=""
                  src="../group-6915.svg"
                />
              </div>
            </div>
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
      )}
    </>
  );
};

export default FAQsPage;
