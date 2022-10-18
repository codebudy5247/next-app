import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React, { Fragment,useState } from "react";

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
const PackersAndMoversInDelhi = () => {
  const [open, setOpen] = useState(1);
  const [accordionColor,setAccodionColor] = useState('black')
  const handleOpen = (value: number,color?:string) => {
    setOpen(open === value ? 0 : value);
    setAccodionColor(accordionColor! === color! ? accordionColor! : color!)
  };
  return (
    <div className="relative bg-white w-full h-[9653px] overflow-hidden text-left text-2xl text-gray-1600 font-fedra-sans-std">
      <img
        className="absolute top-[56px] left-[0px] w-[375px] h-[150px] object-cover"
        alt=""
        src="../rectangle-5@2x.png"
      />
      <div className="absolute top-[726px] left-[567px] rounded-[10px] bg-white hidden flex-row p-[16px_40px] box-border items-center justify-center text-xl text-turquoise font-open-sans">
        <div className="relative font-semibold inline-block">
          Save this progress
        </div>
      </div>
      <div className="absolute top-[8433px] left-[0px] w-[375px] h-[1220px] text-base text-white">
        <div className="absolute top-[0px] left-[0px] bg-gray-1600 w-[375px] h-[1220px]" />
        <div className="absolute top-[50px] left-[36px] flex flex-col items-start justify-start gap-[30px]">
          <img
            className="relative w-[171.59px] h-[70px] shrink-0 overflow-hidden"
            alt=""
            src="../frame.svg"
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
              src="../group-69.svg"
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
      <div className="absolute top-[6811px] left-[0px] bg-gray-100 flex flex-col p-[50px_16px] box-border items-center justify-start gap-[30px] text-center">
        <b className="relative leading-[130%] inline-block w-[243px]">
          Location we Services in Delhi
        </b>
        <div className="flex flex-col items-start justify-start gap-[10px] text-left text-base">
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-start">
            <div className="relative inline-block">
              Packers and Movers Services in Delhi
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Gurgaon
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Hyderabad
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Mumbai
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Chennai
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Pune
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Bangalore
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Noida
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-start">
            <div className="relative inline-block">
              Packers and Movers Services in Jaipur
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Chandigarh
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#439fd9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center text-teal-100">
            <div className="relative inline-block">
              Packers and Movers Services in Amritsar
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Ahmedabad
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Surat
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Kolkata
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Hissar
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Bhubaneswar
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-start">
            <div className="relative inline-block">
              Packers and Movers Services in Jammu
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Dharamshala
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Indore
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Jabbalpur
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Goa
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Guwahati
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Dehradun
            </div>
          </div>
          <div className="rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border relative w-[343px] flex flex-col p-[16px] items-start justify-center">
            <div className="relative inline-block">
              Packers and Movers Services in Ranchi
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[76px] left-[58px] flex flex-row items-center justify-start gap-[20px] text-white">
        <img
          className="relative w-[43.4px] h-[49px] shrink-0"
          alt=""
          src="../group-58.svg"
        />
        <div className="flex flex-col items-start justify-center">
          <b className="relative leading-[115%] inline-block w-[196px]">
            Packers and Movers in Delhi
          </b>
        </div>
      </div>
      <div className="absolute top-[667px] left-[36px] w-[323px] h-[434px]">
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-center">
          <b className="relative leading-[130%] inline-block w-[299px]">
            Best packers and movers services in Delhi
          </b>
        </div>
        <div className="absolute top-[82px] left-[0px] rounded-[20px] bg-gray-600 w-[323px] h-[152px]" />
        <div className="absolute top-[254px] left-[0px] text-base leading-[130%] text-gray-900 inline-block w-[295px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`Relocating your home or office in Delhi? Worried about potential damage?
Want to avoid the possibility of delays? White Glove is your one-stop
solution, having emerged as a preferred packer and mover in Delhi. `}</p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            &nbsp;
          </p>
          <p className="m-[0]">
            We follow robust protocols around safety and timely delivery. Our
            end-to-end services and professional teams ensure that you
            experience a hassle-free transition
          </p>
        </div>
      </div>
      <div className="absolute top-[154px] left-[16px] rounded-[20px] bg-white [border:2px_solid_#d9d9d9] box-border w-[343px] flex flex-col p-[30px_20px] items-start justify-center gap-[20px] font-open-sans">
        <b className="relative leading-[130%] inline-block font-poppins w-[303px]">
          Find out how much your moving will cost you
        </b>
        <div className="w-[303px] flex flex-col items-start justify-start gap-[20px] text-xl text-gray-500">
          <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[303px] flex flex-row p-[16px_0px] items-center justify-start">
            <div className="relative font-semibold inline-block">Full Name</div>
          </div>
          <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[303px] flex flex-row p-[16px_0px] items-center justify-start">
            <div className="relative font-semibold inline-block">
              Mobile Number
            </div>
          </div>
          <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[303px] flex flex-row p-[16px_0px] items-center justify-start">
            <div className="relative font-semibold inline-block">
              Email Address
            </div>
          </div>
        </div>
        <div className="rounded-[10px] bg-gold w-[303px] flex flex-row p-[20px_0px] box-border items-center justify-center gap-[20px] text-lg">
          <div className="relative font-semibold inline-block">
            Calculate your moving cost
          </div>
          <img
            className="relative w-[25.32px] h-[16px] shrink-0"
            alt=""
            src="../group-691.svg"
          />
          <img
            className="relative w-[24px] h-[24px] shrink-0 hidden"
            alt=""
            src="../arrow-right-alt.svg"
          />
        </div>
      </div>
      <div className="absolute top-[1217px] left-[16px] w-[343px] h-[688.68px] text-center font-poppins">
        <b className="absolute top-[0px] left-[39px] leading-[130%] inline-block w-[265px]">
          How White Glove Packers and Movers Works in Delhi
        </b>
        <img
          className="absolute top-[118px] left-[-5px] w-[353px] h-[353.68px]"
          alt=""
          src="../group-75.svg"
        />
        <div className="absolute top-[496.68px] left-[20px] flex flex-col items-start justify-start gap-[40px] text-3xl text-white">
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
      <div className="absolute top-[2005.68px] left-[0px] w-[375px] h-[570px] text-white">
        <img
          className="absolute top-[0px] left-[0px] w-[375px] h-[570px] object-cover"
          alt=""
          src="../rectangle-13@2x.png"
        />
        <div className="absolute top-[50px] left-[36px] w-[323px] h-[470px]">
          <b className="absolute top-[0px] left-[0px] leading-[130%] inline-block w-[323px]">
            Choose Professional Service with White Glove
          </b>
          <div className="absolute top-[92px] left-[0px] text-base leading-[130%] inline-block w-[306px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`For hassle-free domestic relocation, it's crucial to hire professional packers and movers for house shifting in Delhi. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`It requires meticulous planning and execution, as there might be entry restrictions for bigger trucks; especially in areas that are home to embassies and government establishments. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Additionally, it’s impossible to arrange a large truck in certain societies and neighborhoods due to area restrictions. In such cases, we might have to use a shuttle. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="m-[0]">
              At White Glove, our well-trained team helps you create a detailed
              and affordable shifting plan, tailor-made to your needs. We handle
              all your needs with the utmost care and safety best practices so
              that you can relax and enjoy the move.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-[2675.68px] left-[58px] w-[260px] h-[2470px] text-center">
        <div className="absolute top-[0px] left-[29px] font-medium inline-block w-[201px]">
          Fulfillment Services Pricing
        </div>
        <div className="absolute top-[90px] left-[0px] flex flex-col items-start justify-start gap-[20px] text-left text-sm text-gray-900">
          <div className="rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border relative w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[20px_0px] box-border items-center justify-start gap-[20px] text-2xl text-gray-1600">
              <img
                className="relative w-[93.14px] h-[80px] shrink-0 object-cover"
                alt=""
                src="../neo-website1bhksmart-245-revised-1@2x.png"
              />
              <div className="relative font-medium inline-block">1 BHK</div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border relative w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[20px_40px] box-border items-center justify-start gap-[20px] text-2xl text-gray-1600">
              <img
                className="relative w-[110.48px] h-[80px] shrink-0 object-cover"
                alt=""
                src="../2bhk-1@2x.png"
              />
              <div className="relative font-medium inline-block">2 BHK</div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border relative w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[20px_0px] box-border items-center justify-start gap-[20px] text-2xl text-gray-1600">
              <img
                className="relative w-[105.95px] h-[80px] shrink-0 object-cover"
                alt=""
                src="../independent3bhkapartment-1@2x.png"
              />
              <div className="relative font-medium inline-block">3 BHK</div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border relative w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[20px_0px] box-border items-center justify-start gap-[20px] text-2xl text-gray-1600">
              <img
                className="relative w-[111.49px] h-[80px] shrink-0 object-cover"
                alt=""
                src="../3bhkduplex-1@2x.png"
              />
              <div className="relative font-medium inline-block">
                4 BHK/Villa
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border relative w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[20px_0px] box-border items-center justify-start gap-[20px] text-2xl text-gray-1600">
              <img
                className="relative w-[142.43px] h-[80px] shrink-0 object-cover"
                alt=""
                src="../hero-electric-family-1596104873135-1596104887977-1604409644620-1@2x.png"
              />
              <div className="relative font-medium inline-block">2 Wheeler</div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border relative w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[20px_0px] box-border items-center justify-start gap-[20px] text-2xl text-gray-1600">
              <img
                className="relative w-[151.92px] h-[80px] shrink-0 object-cover"
                alt=""
                src="../0-uzl7ckayiwzicwr9-1@2x.png"
              />
              <div className="relative font-medium inline-block">4 Wheeler</div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[10px_16px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="absolute top-[2678px] left-[36px] w-[323px] flex flex-col items-center justify-start gap-[30px]">
        <b className="relative text-2xl inline-block text-center w-[270px]">
          FAQ about Packers and Movers
        </b>
        <div className="w-[323px] flex flex-col items-start justify-start text-gray-1200">
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
          </Fragment>
        </div>
        <div className="rounded-[10px] [border:1px_solid_#439fd9] box-border relative flex flex-row p-[20px_30px] items-center justify-start gap-[20px] text-teal-100">
          <div className="relative inline-block">View all FAQs</div>
          <img
            className="relative w-[24px] h-[24px] shrink-0 hidden"
            alt=""
            src="../arrow-right-alt1.svg"
          />
          <img
            className="relative w-[25.32px] h-[16px] shrink-0"
            alt=""
            src="../group-693.svg"
          />
        </div>
      </div>
      {/* <div className="absolute top-[5196px] left-[0px] w-[375px] h-[925px] text-lg">
        <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[375px] h-[925px]" />
        <div className="absolute top-[50px] left-[26px] w-[323px] flex flex-col items-center justify-start gap-[30px]">
          <b className="relative text-2xl inline-block text-center w-[270px]">
            FAQ about Packers and Movers
          </b>
          <div className="w-[323px] flex flex-col items-start justify-start text-gray-1200">
            <div className="border-t-[0px_solid_#e8e8e8] border-r-[0px_solid_#e8e8e8] border-b-[2px_solid_#e8e8e8] border-l-[0px_solid_#e8e8e8] box-border relative w-[323px] flex flex-row p-[0px_0px_20px] items-center justify-between">
              <div className="relative font-medium inline-block">
                When is the best time to relocate?
              </div>
              <img
                className="relative w-[32px] h-[32px] shrink-0"
                alt=""
                src="../arrow-forward-ios.svg"
              />
            </div>
            <div className="border-t-[0px_solid_#e8e8e8] border-r-[0px_solid_#e8e8e8] border-b-[2px_solid_#e8e8e8] border-l-[0px_solid_#e8e8e8] box-border relative w-[323px] flex flex-col p-[30px_0px] items-start justify-start gap-[20px] text-teal-100">
              <div className="w-[323px] flex flex-row items-center justify-between">
                <div className="relative font-medium inline-block w-[277px] shrink-0">
                  When should I contact relocation companies for estimates?
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios1.svg"
                />
              </div>
              <div className="relative text-base leading-[150%] text-gray-1000 inline-block w-[283px]">
                Try to provide moving companies with as much notice as possible,
                especially if you are moving during the summer months (mid-May
                to mid-September) or at the beginning or end of a month
                (regardless of the season). We recommend making arrangements at
                least four to six weeks before your desired moving date. This
                will increase your likelihood of securing the pickup and
                delivery dates you desire. Add even more time to make a decision
                if you are obligated by your employer to submit estimates for
                approval.
              </div>
            </div>
            <div className="border-t-[0px_solid_#e8e8e8] border-r-[0px_solid_#e8e8e8] border-b-[2px_solid_#e8e8e8] border-l-[0px_solid_#e8e8e8] box-border relative w-[323px] flex flex-row p-[30px_0px_20px] items-center justify-between">
              <div className="relative font-medium inline-block w-[267px] shrink-0">
                How could your company's prices differ from others?
              </div>
              <img
                className="relative w-[32px] h-[32px] shrink-0"
                alt=""
                src="../arrow-forward-ios2.svg"
              />
            </div>
            <div className="border-t-[0px_solid_#e8e8e8] border-r-[0px_solid_#e8e8e8] border-b-[2px_solid_#e8e8e8] border-l-[0px_solid_#e8e8e8] box-border relative w-[323px] flex flex-row p-[30px_0px_20px] items-center justify-between">
              <div className="relative font-medium inline-block w-[268px] shrink-0">
                There are major differences between the movers’ estimated
                volumes. How do I deal with this?
              </div>
              <img
                className="relative w-[32px] h-[32px] shrink-0"
                alt=""
                src="../arrow-forward-ios3.svg"
              />
            </div>
          </div>
          <div className="rounded-[10px] [border:1px_solid_#439fd9] box-border relative flex flex-row p-[20px_30px] items-center justify-start gap-[20px] text-teal-100">
            <div className="relative inline-block">View all FAQs</div>
            <img
              className="relative w-[24px] h-[24px] shrink-0 hidden"
              alt=""
              src="../arrow-right-alt1.svg"
            />
            <img
              className="relative w-[25.32px] h-[16px] shrink-0"
              alt=""
              src="../group-692.svg"
            />
          </div>
        </div>
      </div> */}
      <div className="absolute top-[6121px] left-[0px] w-[375px] h-[690px] text-center text-white">
        <div className="absolute top-[0px] left-[0px] bg-gray-1600 w-[375px] h-[690px]" />
        <div className="absolute top-[40px] left-[18px] flex flex-col items-center justify-start gap-[20px]">
          <b className="relative inline-block">We are trusted by many</b>
          <div className="relative text-base leading-[130%] font-semibold font-open-sans inline-block w-[340px]">
            With our mission to make every relocation a happy experience,
            coupled with our company-wide institutionalized best practices,
            White Glove has emerged as a preferred choice for your domestic
            relocation requirements.
          </div>
        </div>
        <div className="absolute top-[210px] left-[18px] w-[342px] h-[430px]">
          <div className="absolute top-[-0.5px] left-[-0.5px] [border:1px_solid_#22567f] box-border w-[172px] h-[87px] flex flex-col items-center justify-center">
            <img
              className="relative w-[102.6px] h-[30px] shrink-0 object-cover"
              alt=""
              src="../group-52@2x.png"
            />
          </div>
          <div className="absolute top-[85.5px] left-[-0.5px] [border:1px_solid_#22567f] box-border w-[172px] h-[87px] flex flex-col items-center justify-center">
            <img
              className="relative w-[52.57px] h-[40px] shrink-0 object-cover"
              alt=""
              src="../mask-group@2x.png"
            />
          </div>
          <div className="absolute top-[-0.5px] left-[170.5px] [border:1px_solid_#22567f] box-border w-[172px] h-[87px] flex flex-col items-center justify-center">
            <img
              className="relative w-[95.11px] h-[25px] shrink-0 object-cover"
              alt=""
              src="../mask-group1@2x.png"
            />
          </div>
          <div className="absolute top-[85.5px] left-[170.5px] [border:1px_solid_#22567f] box-border w-[172px] h-[87px] flex flex-row items-center justify-center">
            <img
              className="relative w-[34.92px] h-[40px] shrink-0 object-cover"
              alt=""
              src="../mask-group2@2x.png"
            />
          </div>
          <div className="absolute top-[171.5px] left-[-0.5px] [border:1px_solid_#22567f] box-border w-[172px] h-[87px] flex flex-col items-center justify-center">
            <img
              className="relative w-[103.75px] h-[35px] shrink-0 object-cover"
              alt=""
              src="../mask-group3@2x.png"
            />
          </div>
          <div className="absolute top-[257.5px] left-[-0.5px] [border:1px_solid_#22567f] box-border w-[172px] h-[87px] flex flex-col items-center justify-center">
            <img
              className="relative w-[90.52px] h-[30px] shrink-0 object-cover"
              alt=""
              src="../mask-group4@2x.png"
            />
          </div>
          <div className="absolute top-[171.5px] left-[170.5px] [border:1px_solid_#22567f] box-border w-[172px] h-[87px] flex flex-col items-center justify-center">
            <img
              className="relative w-[99.83px] h-[30px] shrink-0 object-cover"
              alt=""
              src="../mask-group5@2x.png"
            />
          </div>
          <div className="absolute top-[257.5px] left-[170.5px] [border:1px_solid_#22567f] box-border w-[172px] h-[87px] flex flex-col items-center justify-center">
            <img
              className="relative w-[102.6px] h-[30px] shrink-0 object-cover"
              alt=""
              src="../group-52@2x.png"
            />
          </div>
          <div className="absolute top-[343.5px] left-[-0.5px] [border:1px_solid_#22567f] box-border w-[172px] h-[87px] flex flex-col items-center justify-center">
            <img
              className="relative w-[109.9px] h-[25px] shrink-0 object-cover"
              alt=""
              src="../mask-group6@2x.png"
            />
          </div>
          <div className="absolute top-[343.5px] left-[170.5px] [border:1px_solid_#22567f] box-border w-[172px] h-[87px] flex flex-col items-center justify-center">
            <img
              className="relative w-[121.14px] h-[40px] shrink-0 object-cover"
              alt=""
              src="../mask-group7@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white w-[375px] h-[56px] flex flex-row p-[25px_16px] box-border items-center justify-between text-base">
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-[77.71px] h-[32px] shrink-0 overflow-hidden"
            alt=""
            src="../frame1.svg"
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
            <img
              className="relative w-[32px] h-[32px] shrink-0"
              alt=""
              src="../menu.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackersAndMoversInDelhi;
