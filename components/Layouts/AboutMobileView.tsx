import React, { useState } from "react";
import NavPopup from "../NavPopup";
import { useRouter } from "next/router";

const AboutMobileView = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const letsTalk = () => {
    router.push("/contact-us-page");
  };
  return (
    <>
      <div className="relative bg-white w-full h-[5652px] overflow-hidden text-left text-2xl text-white font-fedra-sans-std">
        <div className="absolute top-[0px] left-[-46px] w-[498px] h-[478.01px] text-center font-poppins">
          <div className="absolute top-[0px] left-[46px] bg-gray-1600 w-[375px] h-[478px]" />
          <img
            className="absolute top-[363px] left-[46px] w-[498px] h-[115.01px]"
            alt=""
            src="../group-87.svg"
          />
          <div className="absolute top-[171px] left-[95px] flex flex-col items-center justify-start gap-[20px]">
            <b className="relative leading-[130%] inline-block w-[277px]">
              <span>{`The easiest way to move your goods with `}</span>
              <span className="text-gold">White Gloves</span>
            </b>
            <div className="relative text-lg font-semibold font-open-sans text-teal-100 inline-block">
              Anything | Anytime | Anyware
            </div>
          </div>
        </div>
        <div className="absolute top-[4432px] left-[0px] w-[375px] h-[1220px] text-base">
          <div className="absolute top-[0px] left-[0px] bg-gray-1600 w-[375px] h-[1220px]" />
          <div className="absolute top-[50px] left-[36px] flex flex-col items-start justify-start gap-[30px]">
            <img
              className="relative w-[171.59px] h-[70px] shrink-0 overflow-hidden"
              alt=""
              src="../frame3.svg"
            />
            <div className="relative w-[255px] h-[183px] shrink-0">
              <div className="absolute top-[44px] left-[0px] leading-[150%] inline-block w-[255px]">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  22/18, 2nd Floor, Row B1,Opp. C2 Gate, Near Ansal Corporate
                  Plaza,
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
              <div className="relative font-medium inline-block">Subscribe</div>
              <img
                className="relative w-[21.84px] h-[14px] shrink-0"
                alt=""
                src="../group-696.svg"
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
                  src="../linkedin1.svg"
                />
              </div>
              <div className="rounded-[5px] [border:1px_solid_#d9d9d9] box-border relative w-[32px] h-[32px] shrink-0 hidden flex-col items-center justify-center">
                <img
                  className="relative w-[16.09px] h-[16px] shrink-0"
                  alt=""
                  src="../whatsapp1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[478px] left-[0px] bg-gray-200 w-[375px] h-[1493px]" />
        {/* <img
            className="absolute top-[478px] left-[67px] w-[694px] h-[192.48px]"
            alt=""
            src="../group-112.svg"
          /> */}
        <div className="absolute top-[0px] left-[0px] w-[375px] h-[56px] flex flex-row p-[25px_16px] box-border items-center justify-between text-base">
          <div className="flex flex-row items-center justify-start">
            <img
              className="relative w-[77.71px] h-[32px] shrink-0 overflow-hidden"
              alt=""
              src="../frame4.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <img
                className="relative w-[20px] h-[20px] shrink-0"
                alt=""
                src="../location-on2.svg"
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
                style={{ border: "none", backgroundColor: "white" }}
                onClick={() => setShowModal(true)}
              >
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../menu1.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-[528.01px] left-[36px] w-[323px] flex flex-col items-start justify-center gap-[50px] text-teal-100 font-poppins">
          <div className="relative w-[323px] h-[295px] shrink-0">
            <div className="absolute top-[0px] left-[0px] w-[323px] flex flex-col items-start justify-start gap-[30px]">
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
                className="relative w-[34.74px] h-[20px] shrink-0 hidden"
                alt=""
                src="../group-697.svg"
              />
              <div className="relative text-lg leading-[130%] font-semibold font-open-sans text-gray-900 inline-block w-[323px]">
                White Glove specializes in offering corporate shifting services,
                tailor-made for specific categories of goods. Share your
                requirements.
              </div>
            </div>
          </div>
          <div className="relative w-[323px] h-[295px] shrink-0">
            <div className="absolute top-[0px] left-[0px] w-[323px] flex flex-col items-start justify-start gap-[30px]">
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
              <div className="relative text-lg leading-[130%] font-semibold font-open-sans text-gray-900 inline-block w-[323px]">
                White Glove specializes in offering corporate shifting services,
                tailor-made for specific categories of goods. Share your
                requirements.
              </div>
            </div>
          </div>
          <div className="relative w-[323px] h-[295px] shrink-0">
            <div className="absolute top-[0px] left-[0px] w-[323px] flex flex-col items-start justify-start gap-[30px]">
              <img
                className="relative w-[144.07px] h-[120px] shrink-0"
                alt=""
                src="../group-85.svg"
              />
              <div className="flex flex-row items-center justify-start">
                <b className="relative leading-[130%] inline-block">{`Drive & Vision`}</b>
              </div>
              <div className="relative text-lg leading-[130%] font-semibold font-open-sans text-gray-900 inline-block w-[323px]">
                White Glove specializes in offering corporate shifting services,
                tailor-made for specific categories of goods. Share your
                requirements.
              </div>
            </div>
          </div>
          <div className="relative w-[323px] h-[358px] shrink-0">
            <div className="absolute top-[0px] left-[0px] w-[323px] flex flex-col items-start justify-start gap-[30px]">
              <img
                className="relative w-[134.81px] h-[120px] shrink-0 overflow-hidden"
                alt=""
                src="../frame5.svg"
              />
              <div className="flex flex-row items-center justify-start">
                <b className="relative leading-[130%] inline-block">
                  Our Values
                </b>
              </div>
              <div className="relative text-[inherit] leading-[130%] font-semibold font-inherit text-gray-900 inline-block w-[323px]">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  White Glove specializes in offering corporate shifting
                  services, tailor-made for specific categories of goods. Share
                  your requirements.
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  &nbsp;
                </p>
                {/* <ul className="m-[0] pl-[21px]">
                    <li className="mb-[0px]">Heartiness</li>
                    <li>Chase Progress</li>
                  </ul> */}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2021px] left-[16px] w-[343px] h-[626.68px] text-center text-gray-1600 font-poppins">
          <b className="absolute top-[0px] left-[25.5px] leading-[130%] inline-block">
            How White Glove Works
          </b>
          <img
            className="absolute top-[56px] left-[-5px] w-[353px] h-[353.68px]"
            alt=""
            src="../group-75.svg"
          />
          <div className="absolute top-[434.68px] left-[20px] flex flex-col items-start justify-start gap-[40px] text-3xl text-white">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-[20px] bg-teal-100 w-[68px] shrink-0 flex flex-col p-[10px] box-border items-center justify-center">
                <b className="relative inline-block">01</b>
              </div>
              <b className="relative text-2xl leading-[130%] inline-block text-teal-100 text-left w-[196px] shrink-0">
                Share your Requirement
              </b>
            </div>
            <div className="relative text-lg leading-[130%] font-semibold font-open-sans text-gray-1000 text-left inline-block w-[314px]">
              White Glove specializes in offering corporate shifting services,
              tailor-made for specific categories of goods. Share your
              requirements.
            </div>
          </div>
        </div>
        <div className="absolute top-[2747.68px] left-[0px] w-[375px] h-[1323.32px]">
          <div className="absolute top-[126.32px] left-[0px] bg-teal-100 w-[375px] h-[1197px]" />
          <img
            className="absolute top-[0px] left-[16px] w-[343px] h-[166px] object-cover"
            alt=""
            src="../container-img-1@2x.png"
          />
          <div className="absolute top-[196px] left-[36px] flex flex-col items-start justify-start gap-[30px]">
            <b className="relative inline-block w-[253px]">
              About White Glove Packers and Movers
            </b>
            <div className="relative text-base leading-[150%] inline-block w-[323px]">
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
                queries such as “best packers and movers for house
                {/* shifting”, “trusted and safe truck hire for house and office
                  shifting”, “who is the most trusted packers and movers in
                  India”, etc. */}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[4121px] left-[16px] rounded-[20px] bg-gray-1600 w-[343px] flex flex-col p-[30px] box-border items-center justify-start gap-[20px] text-center">
          <div className="rounded-[20px] flex flex-col items-center justify-start gap-[10px]">
            <div className="relative leading-[130%] font-medium inline-block w-[287px]">
              Are you planning to relocate?
            </div>
            <div className="relative text-lg leading-[130%] font-medium text-gray-900 inline-block w-[211px]">
              Let’s discuss further with our expert.
            </div>
          </div>
          <div className="rounded-[10px] bg-gold w-[303px] flex flex-row p-[20px_0px] box-border items-center justify-center gap-[20px] text-left text-xl text-gray-1600 font-open-sans"  onClick={() => letsTalk}>
            <div className="relative font-semibold inline-block">
              Let’s Talk
            </div>
            <img
              className="relative w-[24px] h-[24px] shrink-0 hidden"
              alt=""
              src="../arrow-right-alt3.svg"
            />
            <img
              className="relative w-[21.84px] h-[14px] shrink-0"
              alt=""
              src="../group-698.svg"
            />
          </div>
        </div>
      </div>
      <NavPopup showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AboutMobileView;
