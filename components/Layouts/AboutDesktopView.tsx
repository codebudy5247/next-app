import React from "react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
const AboutDesktopView = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contact-us-page");
  }, [router]);

  const onAboutUsOurClick = useCallback(() => {
    router.push("/f-a-qs-page");
  }, [router]);
  return (
    <div className="relative bg-white w-full h-[7933px] overflow-hidden text-left text-xl text-white font-open-sans">
      <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[1920px] h-[940px]" />
      <img
        className="absolute top-[449px] left-[0px] w-[2125.99px] h-[491px]"
        alt=""
        src="../group-87.svg"
      />
      <div className="absolute top-[692px] left-[883px] hidden flex-col p-[0px_20px] box-border items-center justify-center gap-[20px] text-center text-teal-100">
        <div className="relative font-semibold inline-block">Scroll Down</div>
        <img
          className="relative w-[24.32px] h-[14px] shrink-0"
          alt=""
          src="../group-694.svg"
        />
      </div>
      <div className="absolute top-[348px] left-[675px] flex flex-col items-center justify-start gap-[30px] text-center text-6xl font-poppins">
        <b className="relative leading-[130%] inline-block w-[571px]">
          <span>{`The easiest way to move your goods with `}</span>
          <span className="text-gold">White Gloves</span>
        </b>
        <div className="relative text-xl font-semibold font-open-sans text-teal-100 inline-block">
          Anything | Anytime | Anyware
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[1920px] flex flex-row p-[10px_300px] box-border items-center justify-between text-lg font-fedra-sans-std">
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-[145.71px] h-[60px] shrink-0 overflow-hidden"
            alt=""
            src="../frame4.svg"
          />
        </div>
        <div className="flex flex-row p-[10px_3px] box-border items-center justify-start gap-[60px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="flex flex-row p-[16px] box-border items-center justify-start">
              <div
                className="relative inline-block cursor-pointer"
                onClick={onHomeTextClick}
              >
                Home
              </div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[5px] text-teal-100">
              <div className="relative font-medium inline-block">Company</div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right6.svg"
                />
              </div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[5px]">
              <div className="relative inline-block">Services</div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right7.svg"
                />
              </div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start">
              <div className="relative inline-block">Careers</div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[10px]">
              <div
                className="relative inline-block cursor-pointer"
                onClick={onContactTextClick}
              >
                Contact
              </div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right7.svg"
                />
              </div>
            </div>
          </div>
          <div className="rounded-[10px] bg-gray-1600 flex flex-row p-[16px] box-border items-center justify-center gap-[10px]">
            <img
              className="relative w-[24px] h-[24px] shrink-0"
              alt=""
              src="../location-on2.svg"
            />
            <div className="relative font-medium inline-block">
              Track Your Order
            </div>
          </div>
          <img
            className="relative w-[32px] h-[32px] shrink-0"
            alt=""
            src="../menu2.svg"
          />
        </div>
      </div>
      <div className="absolute top-[7268px] left-[0px] w-[1920px] h-[665px] text-sm">
        <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[1920px] h-[665px]" />
        <img
          className="absolute h-[89.55%] w-[31.36%] top-[964.27%] right-[59.73%] bottom-[-953.82%] left-[8.91%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src="../group-542.svg"
        />
        <img
          className="absolute top-[135px] left-[337.1px] w-[1246.79px] h-[496px]"
          alt=""
          src="../world-map-bg2.svg"
        />
        <div className="absolute top-[544.59px] left-[300px] w-[1319px] h-[70px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-1400 w-[1319px] h-[1px]" />
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
                    src="../facebook1.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[16px] h-[16px] shrink-0"
                    alt=""
                    src="../instagram1.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-col p-[10px] items-center justify-center">
                  <img
                    className="relative w-[18px] h-[16px] shrink-0"
                    alt=""
                    src="../twitter1.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-col items-center justify-center">
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
                    src="../whatsapp4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[100px] left-[300px] w-[1066px] h-[405px] text-xl">
          <div className="absolute top-[0px] left-[477px] w-[589px] h-[284px] text-gray-1200">
            <div className="absolute top-[0px] left-[497px] w-[92px] h-[222px]">
              <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
                Company
              </div>
              <div
                className="absolute top-[47px] left-[0px] text-sm leading-[250%] font-semibold text-white inline-block cursor-pointer"
                onClick={onAboutUsOurClick}
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
                    <span className="text-gray-1200">Toll Free:</span>
                  </span>
                  <span>
                    <span className="font-semibold font-open-sans">{` `}</span>
                    <span>1800 1209 7225</span>
                  </span>
                </p>
                <p className="m-[0]">
                  <span className="font-semibold">
                    <span className="text-gray-1200">Email:</span>
                    <span> inquiry@whiteglove.co.in</span>
                  </span>
                </p>
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[200px] h-[81.59px] overflow-hidden"
              alt=""
              src="../frame5.svg"
            />
          </div>
          <div className="absolute top-[314px] left-[477px] rounded-[20px] bg-gray-1500 w-[589px] flex flex-row p-[20px_30px] box-border items-center justify-center gap-[25px] text-base">
            <div className="relative font-semibold inline-block w-[132px] shrink-0">
              Subscribe to our Newsletter
            </div>
            <div className="w-[354px] shrink-0 flex flex-row items-center justify-start gap-[20px] text-sm text-gray-1200">
              <div className="rounded-[10px] bg-gray-1700 [border:1px_solid_#22567f] box-border relative w-[197px] shrink-0 overflow-hidden flex flex-row p-[16px] items-center justify-start">
                <div className="relative font-semibold inline-block">
                  Email Id
                </div>
              </div>
              <div className="rounded-[10px] bg-gold flex flex-row p-[16px] box-border items-center justify-center gap-[16px] text-gray-1700">
                <div className="relative font-semibold inline-block">
                  Subscribe
                </div>
                <img
                  className="relative w-[21.84px] h-[14px] shrink-0"
                  alt=""
                  src="../group-695.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[457px] left-[1571px] rounded-[10px] bg-gold w-[48px] h-[48px] flex flex-row items-center justify-center">
          <img
            className="relative w-[16px] h-[16px] shrink-0"
            alt=""
            src="../arrow-upward.svg"
          />
        </div>
      </div>
      <div className="absolute top-[3912px] left-[500px] flex flex-col items-center justify-start gap-[100px] text-center text-5xl text-gray-1700 font-poppins">
        <b className="relative leading-[130%] inline-block">
          How White Glove Works
        </b>
        <div className="flex flex-row items-center justify-start gap-[100px] text-3xl text-white">
          <img
            className="relative w-[516px] h-[517px] shrink-0"
            alt=""
            src="../group-75.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-[20px] bg-teal-100 w-[68px] shrink-0 flex flex-col p-[10px] box-border items-center justify-center">
                <b className="relative inline-block">01</b>
              </div>
              <b className="relative text-2xl leading-[130%] inline-block text-teal-100 text-left w-[196px] shrink-0">
                Share your Requirement
              </b>
            </div>
            <div className="relative text-xl leading-[130%] font-semibold font-open-sans text-gray-1100 text-left inline-block w-[314px]">
              White Glove specializes in offering corporate shifting services,
              tailor-made for specific categories of goods. Share your
              requirements.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[940px] left-[-6px] w-[2469.59px] h-[2772px] text-3xl text-gray-700 font-poppins">
        <div className="absolute top-[0px] left-[6px] bg-gray-200 w-[1920px] h-[2772px]" />
        <img
          className="absolute top-[0px] left-[1024px] w-[1445.59px] h-[400.93px]"
          alt=""
          src="../group-78.svg"
        />
        <div className="absolute top-[200px] left-[306px] flex flex-col items-start justify-start gap-[20px]">
          <div className="border-t-[0px_solid_#f7c600] border-r-[0px_solid_#f7c600] border-b-[0px_solid_#f7c600] border-l-[5px_solid_#f7c600] box-border relative w-[289px] flex flex-row p-[10px_30px] items-center justify-start text-teal-100">
            <b className="relative inline-block">Our Culture</b>
          </div>
          <div className="flex flex-row p-[10px_30px] box-border items-center justify-start">
            <div className="relative font-medium inline-block">Our Mission</div>
          </div>
          <div className="flex flex-row p-[10px_30px] box-border items-center justify-start">
            <div className="relative font-medium inline-block">{`Drive & Vision`}</div>
          </div>
          <div className="flex flex-row p-[10px_30px] box-border items-center justify-start">
            <div className="relative font-medium inline-block">Our Values</div>
          </div>
        </div>
        <div className="absolute top-[200px] left-[922px] flex flex-col items-start justify-center gap-[300px] text-5xl text-teal-100">
          <div className="relative w-[366px] h-[386px] shrink-0">
            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[30px]">
              <img
                className="relative w-[119.03px] h-[120px] shrink-0"
                alt=""
                src="../group-82.svg"
              />
              <div className="flex flex-row items-center justify-start">
                <b className="relative leading-[130%] inline-block">
                  Our Culture
                </b>
              </div>
              <img
                className="relative w-[36.24px] h-[23px] shrink-0"
                alt=""
                src="../group-696.svg"
              />
              <div className="relative text-xl leading-[130%] font-semibold font-open-sans text-gray-1000 inline-block w-[366px]">
                White Glove specializes in offering corporate shifting services,
                tailor-made for specific categories of goods. Share your
                requirements.
              </div>
            </div>
          </div>
          <div className="relative w-[366px] h-[336px] shrink-0">
            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[30px]">
              <img
                className="relative w-[126.68px] h-[120px] shrink-0"
                alt=""
                src="../group-83.svg"
              />
              <div className="flex flex-row items-center justify-start">
                <b className="relative leading-[130%] inline-block">
                  Our Mission
                </b>
              </div>
              <div className="relative text-xl leading-[130%] font-semibold font-open-sans text-gray-1000 inline-block w-[366px]">
                White Glove specializes in offering corporate shifting services,
                tailor-made for specific categories of goods. Share your
                requirements.
              </div>
            </div>
          </div>
          <div className="relative w-[366px] h-[336px] shrink-0">
            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[30px]">
              <img
                className="relative w-[144.07px] h-[120px] shrink-0"
                alt=""
                src="../group-85.svg"
              />
              <div className="flex flex-row items-center justify-start">
                <b className="relative leading-[130%] inline-block">{`Drive & Vision`}</b>
              </div>
              <div className="relative text-xl leading-[130%] font-semibold font-open-sans text-gray-1000 inline-block w-[366px]">
                White Glove specializes in offering corporate shifting services,
                tailor-made for specific categories of goods. Share your
                requirements.
              </div>
            </div>
          </div>
          <div className="relative w-[366px] h-[414px] shrink-0">
            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[30px]">
              <img
                className="relative w-[134.81px] h-[120px] shrink-0 overflow-hidden"
                alt=""
                src="../frame6.svg"
              />
              <div className="flex flex-row items-center justify-start">
                <b className="relative leading-[130%] inline-block">
                  Our Values
                </b>
              </div>
              <div className="relative text-[inherit] leading-[130%] font-semibold font-inherit text-gray-1000 inline-block w-[366px]">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  White Glove specializes in offering corporate shifting
                  services, tailor-made for specific categories of goods. Share
                  your requirements.
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  &nbsp;
                </p>
                <ul className="m-[0] pl-[27px]">
                  <li className="mb-[0px]">Heartiness</li>
                  <li>Chase Progress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[775px] left-[6px] w-[306px] h-[171px]"
          alt=""
          src="../vector.svg"
        />
        <img
          className="absolute top-[125.41px] left-[1472.69px] w-[157.9px] h-[149.58px]"
          alt=""
          src="../group-44.svg"
        />
      </div>
      <div className="absolute top-[4821px] left-[0px] bg-white w-[1920px] h-[1110px]" />
      <div className="absolute top-[5747px] left-[1065px] hidden flex-row p-[10px_0px] box-border items-center justify-start gap-[10px]">
        <div className="relative leading-[150%] font-semibold inline-block">
          Read More
        </div>
        <img
          className="relative w-[8.24px] h-[14px] shrink-0"
          alt=""
          src="../arrow-forward-ios.svg"
        />
      </div>
      <div className="absolute top-[5170px] left-[0px] bg-teal-100 w-[1920px] h-[1410px]" />
      <div className="absolute top-[5345px] left-[555px] flex flex-col items-start justify-start gap-[50px] text-6xl">
        <b className="relative inline-block w-[512px]">
          About White Glove Packers and Movers
        </b>
        <div className="relative text-xl leading-[150%] inline-block w-[811px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`FLITTE launched White Glove in February 2019 with much needed standardization of various parameters including safety, accountability, professionalism and unmatched service experience at affordable rates for packers and movers. `}</p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            &nbsp;
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`Operates as a shifting service platform where customers can search for a tailor-made solution for their relocation needs. Our mission is to make every shifting happening in India be a hassle-free experience to bring in customer delight. The most hassle-free move booking experience is made possible by the true instant relocation charge auto-quoting engine developed. `}</p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            &nbsp;
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`This technological marvel calculates your move quote after you enter your move details. The system-generated quote makes the pricing completely transparent.The additional option of customizing the quote online truly demonstrates that customer is indeed, where the customer is encouraged to benefit from the dynamic pricing nature of the packers and movers industry. `}</p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            &nbsp;
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`Unlike a marketplace where your requirement is passed over to any vendor, We truly cares about your move and deploys specially trained teams for the service execution. Teams are trained on best practices followed in packing, unpacking, handling, transportation, safety, etiquette and operating technology. `}</p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            &nbsp;
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`May it be house shifting or vehicle shifting, the teams are well equipped and trained to safely handle your belongings during loading, unloading and transportation. `}</p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            &nbsp;
          </p>
          <p className="m-[0]">
            As the flagship product of FLITTE Logistics Services Private
            Limited, White Glove is the ultimate one-stop solution for your
            queries such as “best packers and movers for house shifting”,
            “trusted and safe truck hire for house and office shifting”, “who is
            the most trusted packers and movers in India”, etc.
          </p>
        </div>
      </div>
      <div className="absolute top-[6780px] left-[300px] rounded-[20px] bg-gray-1700 w-[1321px] flex flex-row p-[100px] box-border items-center justify-between text-5xl font-poppins">
        <div className="rounded-[20px] flex flex-col items-start justify-center gap-[10px]">
          <div className="relative leading-[130%] font-medium inline-block">
            Are you planning to relocate?
          </div>
          <div className="relative text-xl leading-[130%] font-medium font-fedra-sans-std text-gray-1000 inline-block">
            Let’s discuss further with our expert.
          </div>
        </div>
        <div className="rounded-[10px] bg-gold flex flex-row p-[20px_40px] box-border items-center justify-start gap-[20px] text-xl text-gray-1700 font-open-sans">
          <div className="relative font-semibold inline-block">Let’s Talk</div>
          <img
            className="relative w-[24px] h-[24px] shrink-0 hidden"
            alt=""
            src="../arrow-right-alt4.svg"
          />
          <img
            className="relative w-[21.84px] h-[14px] shrink-0"
            alt=""
            src="../group-697.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[4771px] left-[470px] w-[981px] h-[474px] object-cover"
        alt=""
        src="../container-img-1@2x.png"
      />
      {/* <div className="absolute top-[77px] left-[765px] rounded-[10px] bg-white shadow-[0px_0px_20px_rgba(67,_159,_217,_0.08)] w-[182px] flex flex-col p-[20px_2px] box-border items-start justify-center text-center text-sm text-gray-1700">
        <div className="bg-gray-200 w-[180px] flex flex-row p-[16px_30px] box-border items-center justify-start text-left text-teal-100">
          <div className="relative font-semibold inline-block">About US</div>
        </div>
        <div className="w-[180px] flex flex-row p-[16px_30px] box-border items-center justify-start">
          <div className="relative font-semibold inline-block">Our Clients</div>
        </div>
        <div className="bg-white w-[180px] flex flex-row p-[16px_30px] box-border items-center justify-start">
          <div className="relative font-semibold inline-block">FAQs</div>
        </div>
        <div className="w-[180px] flex flex-row p-[16px_30px] box-border items-center justify-start">
          <div className="relative font-semibold inline-block">Blogs</div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutDesktopView;
