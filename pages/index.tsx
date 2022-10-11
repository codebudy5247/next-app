import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import useWindowResize from "../hooks/useWindowResize";
import Slider1 from "../components/Slider/Slider";
import Slider2 from "../components/Slider/Slider2";
import Slider3 from "../components/Slider/Slider3";
import Slder4 from "../components/Slider/Slder4";
import Slider5 from "../components/Slider5";
import { useState } from "react";
import MobileNavBar from "../components/MobileNavBar";

const HomePage: NextPage = () => {
  const windowSize = useWindowResize();
  console.log(windowSize?.width);
  
  // slider
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [slide5, setSlide5] = useState(false);

  const onClickSlider1 = () => {
    setSlide1(true);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
  };
  const onClickSlider2 = () => {
    setSlide1(false);
    setSlide2(true);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
  };
  const onClickSlider3 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(true);
    setSlide4(false);
    setSlide5(false);
  };
  const onClickSlider4 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(true);
    setSlide5(false);
  };
  const onClickSlider5 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(true);
  };

  const displaySlider = () => {
    if (slide1) {
      return <Slider1 />;
    }
    if (slide2) {
      return <Slider2 />;
    }
    if (slide3) {
      return <Slider3 />;
    }
    if (slide4) {
      return <Slder4 />;
    }
    if (slide5) {
      return <Slider5 />;
    }
  };

  const handleClickTrack = () => {};
  const handleClickLetsTalk = () => {};

  return (
    <>
    {Number(windowSize?.width <= 475) ? (
        <div className="relative bg-white w-full h-[8551px] overflow-hidden text-left text-lg text-gray-1600 font-fedra-sans-std">
        <div className="absolute top-[0px] left-[0px] w-[375px] h-[450px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[375px] h-[450px]" />
          <img
            className="absolute top-[60.25px] left-[0px] w-[375px] h-[81.66px]"
            alt=""
            src="../vector6.svg"
          />
        </div>
        <MobileNavBar />
        <div className="absolute top-[726px] left-[567px] rounded-[10px] bg-white hidden flex-row p-[16px_40px] box-border items-center justify-center text-xl text-turquoise font-open-sans">
          <div className="relative font-semibold inline-block">
            Save this progress
          </div>
        </div>
        <img
          className="absolute top-[170.75px] right-[-9.65px] w-[65.45px] h-[69.5px]"
          alt=""
          src="../group-98.svg"
        />
        <div className="absolute top-[115px] left-[40px] w-[294px] h-[55.75px]">
          <img
            className="absolute top-[9.25px] left-[143.6px] w-[150.4px] h-[23.93px] object-cover"
            alt=""
            src="../moversburnabysignaturemovingscaledremovebg-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[160.46px] h-[55.75px] object-cover"
            alt=""
            src="../truck-mockup-1@2x.png"
          />
        </div>
        <div className="absolute top-[191px] left-[16px] rounded-[20px] bg-white shadow-[0px_17px_40px_rgba(67,_159,_217,_0.08)] w-[343px] flex flex-col p-[20px] box-border items-center justify-start gap-[16px] text-center text-xl">
          <div className="relative text-teal-100 inline-block">
            Shifting Happiness
          </div>
          <b className="relative text-2xl leading-[130%] inline-block w-[247px]">
            We make your Moving Easy
          </b>
          <div className="rounded-[10px] bg-gold flex flex-row p-[20px] box-border items-center justify-start gap-[20px] text-left text-lg">
            <div className="relative font-medium inline-block">
              Calculate Moving Prices
            </div>
            <img
              className="relative w-[25.32px] h-[16px] shrink-0"
              alt=""
              src="../group-69.svg"
            />
          </div>
        </div>
        <div className="absolute top-[432px] left-[0px] bg-gray-1600 w-[375px] flex flex-col p-[30px_36px] box-border items-start justify-center gap-[30px] text-xl text-white">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <img
              className="relative w-[24px] h-[24px] shrink-0"
              alt=""
              src="../location-on1.svg"
            />
            <div className="relative leading-[130%] font-medium inline-block">
              Track your Order
            </div>
          </div>
          <div className="w-[299px] flex flex-col items-start justify-start gap-[30px] text-base text-teal-100">
            <div className="w-[303px] flex flex-col items-start justify-center gap-[16px]">
              <div className="relative inline-block">Choose Order Type</div>
              <div className="w-[303px] flex flex-row items-center justify-between text-xl text-white">
                <div className="relative inline-block">LTL Shipment (LRN)</div>
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios.svg"
                />
              </div>
            </div>
            <div className="rounded-[10px] bg-gray-300 w-[303px] flex flex-row p-[16px_20px] box-border items-start justify-start text-center text-lg text-gray-700">
              <div className="relative inline-block">LRN Number</div>
            </div>
          </div>
          <div className="rounded-[10px] bg-gold w-[303px] flex flex-row p-[16px_20px] box-border items-center justify-center text-center text-lg text-gray-1600">
            <div className="relative font-medium inline-block">Track</div>
          </div>
        </div>
        <div className="absolute top-[821px] left-[-28px] w-[403px] h-[486px] text-2xl text-white">
          <img
            className="absolute top-[0px] left-[28px] w-[375px] h-[486px] object-cover"
            alt=""
            src="../rectangle-14@2x.png"
          />
          <img
            className="absolute top-[322px] left-[28px] w-[305px] h-[114px]"
            alt=""
            src="../vector7.svg"
          />
          <div className="absolute top-[50px] left-[64px] flex flex-col items-start justify-center gap-[30px]">
            <b className="relative leading-[130%] inline-block w-[175px]">
              Moving Made Modern
            </b>
            <div className="relative text-lg inline-block w-[304px]">
              By choosing White Glove Packers and Movers, you’re guaranteeing a
              great moving day. All customers receive transparent pricing,
              flexible service and payment options, Quality Packaging Material,
              industry-best customer support, and an easy-to-access online
              dashboard.
            </div>
          </div>
        </div>
        <div className="absolute top-[1357px] left-[16px] w-[666px] h-[590px] text-teal-100">
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border w-[323px] flex flex-col p-[30px_20px] items-center justify-center gap-[50px]">
            <img
              className="relative w-[280px] h-[157px] shrink-0 object-cover"
              alt=""
              src="../worldwide-delivery-1@2x.png"
            />
            <div className="w-[279px] flex flex-col items-start justify-start gap-[20px]">
              <div className="bg-gray-200 flex flex-row p-[10px_0px] box-border items-center justify-center gap-[10px] text-base">
                <img
                  className="relative w-[40px] h-[40px] shrink-0"
                  alt=""
                  src="../language.svg"
                />
                <div className="relative font-medium inline-block w-[102px] shrink-0">
                  International Relocation
                </div>
              </div>
              <b className="relative text-2xl leading-[130%] inline-block text-gray-1600 w-[242px]">{`Great & Affordable Shifting Services`}</b>
              <div className="relative text-gray-1000 inline-block w-[279px]">{`Receive fixed-price, individualized plans and reserve your move without having to worry about hidden fees. `}</div>
              <div className="relative inline-block">Read More</div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[343px] rounded-[20px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border w-[323px] flex flex-col p-[30px_20px] items-center justify-center gap-[50px]">
            <img
              className="relative w-[280px] h-[157px] shrink-0 object-cover"
              alt=""
              src="../worldwide-delivery-11@2x.png"
            />
            <div className="w-[279px] flex flex-col items-start justify-start gap-[20px]">
              <div className="bg-gray-200 flex flex-row p-[10px_0px] box-border items-center justify-center gap-[10px] text-base">
                <img className="relative w-[40px] h-[40px] shrink-0" alt="" />
                <div className="relative font-medium inline-block w-[102px] shrink-0">
                  International Relocation
                </div>
              </div>
              <b className="relative text-2xl leading-[130%] inline-block text-gray-1600 w-[242px]">{`Great & Affordable Shifting Services`}</b>
              <div className="relative text-gray-1000 inline-block w-[279px]">{`Receive fixed-price, individualized plans and reserve your move without having to worry about hidden fees. `}</div>
              <div className="relative inline-block">Read More</div>
            </div>
          </div>
          <img
            className="absolute top-[578px] left-[109px] w-[104px] h-[12px]"
            alt=""
            src="../group-15.svg"
          />
        </div>
        <div className="absolute top-[1996px] left-[16px] w-[343px] h-[443px]">
          <img
            className="absolute top-[0px] left-[0px] w-[343px] h-[398px]"
            alt=""
            src="../bg.svg"
          />
          <img
            className="absolute top-[312px] left-[159px] w-[154px] h-[86px]"
            alt=""
            src="../vector2.svg"
          />
          <img
            className="absolute top-[211.41px] left-[233.4px] w-[79.93px] h-[75.75px]"
            alt=""
            src="../group-44.svg"
          />
          <img
            className="absolute top-[253px] left-[22px] w-[193px] h-[190px] object-cover"
            alt=""
            src="../ungroup-unhide-1@2x.png"
          />
          <div className="absolute top-[30px] left-[22px] flex flex-col items-start justify-center gap-[20px]">
            <b className="relative text-2xl leading-[130%] inline-block w-[236px]">
              What do you want to ship?
            </b>
            <div className="relative inline-block w-[278px]">
              Get local advice for your request. Our team is always there for you.
            </div>
            <div className="rounded-[10px] bg-gray-1600 flex flex-row p-[16px_20px] box-border items-center justify-start gap-[20px] text-white">
              <div className="relative font-medium inline-block">Let’s Talk</div>
              <img
                className="relative w-[25.32px] h-[16px] shrink-0"
                alt=""
                src="../group-691.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[2489px] left-[16px] w-[340px] h-[619px]">
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-gray-200 flex flex-col p-[20px_25px] box-border items-start justify-center gap-[10px]">
            <img
              className="relative w-[48px] h-[48px] shrink-0"
              alt=""
              src="../pin-drop.svg"
            />
            <div className="relative inline-block w-[110px]">
              Number of Locations
            </div>
            <b className="relative text-4xl inline-block">359</b>
          </div>
          <div className="absolute top-[0px] left-[180px] rounded-[20px] bg-gray-200 flex flex-col p-[20px_25px] box-border items-start justify-center gap-[10px]">
            <img
              className="relative w-[48px] h-[48px] shrink-0"
              alt=""
              src="../local-shipping.svg"
            />
            <div className="relative inline-block w-[110px]">
              Delivered Packages
            </div>
            <b className="relative text-4xl inline-block">500+</b>
          </div>
          <div className="absolute top-[213px] left-[0px] rounded-[20px] bg-gray-200 flex flex-col p-[20px_25px] box-border items-start justify-center gap-[10px]">
            <img
              className="relative w-[48px] h-[48px] shrink-0"
              alt=""
              src="../speed.svg"
            />
            <div className="relative inline-block w-[110px]">
              Kilometer Per Month
            </div>
            <b className="relative text-4xl inline-block">25K</b>
          </div>
          <div className="absolute top-[213px] left-[180px] rounded-[20px] bg-gray-200 flex flex-col p-[20px_25px] box-border items-start justify-center gap-[10px]">
            <img
              className="relative w-[48px] h-[48px] shrink-0"
              alt=""
              src="../package.svg"
            />
            <div className="relative inline-block w-[110px]">Tons Of Goods</div>
            <b className="relative text-4xl inline-block">17K</b>
          </div>
          <div className="absolute top-[426px] left-[0px] rounded-[20px] bg-gray-200 flex flex-col p-[20px_25px] box-border items-start justify-center gap-[10px]">
            <img
              className="relative w-[48px] h-[48px] shrink-0"
              alt=""
              src="../sentiment-satisfied.svg"
            />
            <div className="relative inline-block w-[110px]">
              Satisfied Clients
            </div>
            <b className="relative text-4xl inline-block">150+</b>
          </div>
        </div>
        <div className="absolute top-[3158px] left-[0px] w-[856px] h-[470px] text-center text-teal-100">
          <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[376px] h-[470px]" />
          <div className="absolute top-[50px] left-[53px] flex flex-col items-center justify-center gap-[20px]">
            <div className="relative inline-block">Our Top Cities</div>
            <b className="relative text-2xl inline-block text-gray-1600">
              Find Movers Near You
            </b>
          </div>
          <div className="absolute top-[150px] left-[16px] flex flex-row items-center justify-center gap-[10px] text-base text-gray-1600">
            <div className="rounded-[20px] [border:1px_solid_#000c24] box-border relative w-[160px] h-[180px] shrink-0 flex flex-col p-[16px] items-center justify-center gap-[30px]">
              <img
                className="relative w-[72.02px] h-[81px] shrink-0"
                alt=""
                src="../group-58.svg"
              />
              <div className="relative inline-block">Delhi</div>
            </div>
            <div className="rounded-[20px] [border:1px_solid_#439fd9] box-border relative w-[160px] h-[180px] shrink-0 flex flex-col p-[16px] items-center justify-center gap-[30px] text-teal-100">
              <img
                className="relative w-[72.02px] h-[81px] shrink-0"
                alt=""
                src="../group-581.svg"
              />
              <div className="relative inline-block">Gurgaon</div>
            </div>
            <div className="rounded-[20px] [border:1px_solid_#000c24] box-border relative w-[160px] h-[180px] shrink-0 flex flex-col p-[16px] items-center justify-center gap-[30px]">
              <img className="relative w-[66px] h-[80px] shrink-0" alt="" />
              <div className="relative inline-block">Hyderabad</div>
            </div>
            <div className="rounded-[20px] [border:1px_solid_#000c24] box-border relative w-[160px] h-[180px] shrink-0 flex flex-col p-[16px] items-center justify-center gap-[30px]">
              <img className="relative w-[112.19px] h-[80px] shrink-0" alt="" />
              <div className="relative inline-block">Mumbai</div>
            </div>
            <div className="rounded-[20px] [border:1px_solid_#000c24] box-border relative w-[160px] h-[180px] shrink-0 flex flex-col p-[16px] items-center justify-center gap-[30px]">
              <img className="relative w-[78.99px] h-[80px] shrink-0" alt="" />
              <div className="relative inline-block">Chennai</div>
            </div>
          </div>
          <div className="absolute top-[360px] left-[72px] rounded-[10px] [border:1px_solid_#439fd9] box-border flex flex-row p-[20px_30px] items-center justify-start gap-[20px] text-left">
            <div className="relative inline-block">Explore All Cities</div>
            <img
              className="relative w-[24px] h-[24px] shrink-0 hidden"
              alt=""
              src="../arrow-right-alt.svg"
            />
            <img
              className="relative w-[25.32px] h-[16px] shrink-0"
              alt=""
              src="../group-691.svg"
            />
          </div>
        </div>
        <div className="absolute top-[3678px] left-[36px] w-[323px] flex flex-col items-center justify-start gap-[30px]">
          <b className="relative text-2xl inline-block text-center w-[270px]">
            FAQ about Packers and Movers
          </b>
          <div className="w-[323px] flex flex-col items-start justify-start text-gray-1200">
            <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[323px] flex flex-row p-[0px_0px_20px] items-center justify-between">
              <div className="relative font-medium inline-block">
                When is the best time to relocate?
              </div>
              <img
                className="relative w-[32px] h-[32px] shrink-0"
                alt=""
                src="../arrow-forward-ios1.svg"
              />
            </div>
            <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[323px] flex flex-col p-[30px_0px] items-start justify-start gap-[20px] text-teal-100">
              <div className="w-[323px] flex flex-row items-center justify-between">
                <div className="relative font-medium inline-block w-[277px] shrink-0">
                  When should I contact relocation companies for estimates?
                </div>
                <img
                  className="relative w-[32px] h-[32px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios2.svg"
                />
              </div>
              <div className="relative text-base leading-[150%] text-gray-1000 inline-block w-[283px]">
                Try to provide moving companies with as much notice as possible,
                especially if you are moving during the summer months (mid-May to
                mid-September) or at the beginning or end of a month (regardless
                of the season). We recommend making arrangements at least four to
                six weeks before your desired moving date. This will increase your
                likelihood of securing the pickup and delivery dates you desire.
                Add even more time to make a decision if you are obligated by your
                employer to submit estimates for approval.
              </div>
            </div>
            <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[323px] flex flex-row p-[30px_0px_20px] items-center justify-between">
              <div className="relative font-medium inline-block w-[267px] shrink-0">
                How could your company's prices differ from others?
              </div>
              <img
                className="relative w-[32px] h-[32px] shrink-0"
                alt=""
                src="../arrow-forward-ios3.svg"
              />
            </div>
            <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[323px] flex flex-row p-[30px_0px_20px] items-center justify-between">
              <div className="relative font-medium inline-block w-[268px] shrink-0">
                There are major differences between the movers’ estimated volumes.
                How do I deal with this?
              </div>
              <img
                className="relative w-[32px] h-[32px] shrink-0"
                alt=""
                src="../arrow-forward-ios4.svg"
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
              src="../group-693.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[845.5px] left-[256.5px] w-[73.12px] h-[68.96px]"
          alt=""
          src="../group-99.svg"
        />
        <div className="absolute top-[4553px] left-[0px] w-[970px] h-[530px] text-center text-2xl text-white">
          <div className="absolute top-[0px] left-[0px] bg-teal-100 w-[375px] h-[530px]" />
          <b className="absolute top-[50px] left-[59px] leading-[130%] inline-block w-[256px]">
            <span>{`Our `}</span>
            <span className="text-gold">Best Experience</span>
            <span> in Excellent Logistics Fulfillment</span>
          </b>
          <div className="absolute top-[173px] left-[16px] flex flex-row items-start justify-start gap-[10px] text-left text-5xl text-teal-200 font-open-sans">
            <div className="rounded-[20px] bg-white flex flex-col p-[20px] box-border items-start justify-center gap-[20px]">
              <div className="relative font-extrabold inline-block">01</div>
              <img
                className="relative w-[39.11px] h-[32px] shrink-0"
                alt=""
                src="../sticky-note-2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[20px] text-lg text-gray-1600 font-fedra-sans-std">
                <div className="relative font-medium inline-block w-[191px]">
                  Convenient Booking
                </div>
                <div className="relative text-base text-gray-1000 inline-block w-[191px]">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Book on your schedule and get estimates instantly with the
                    help of our dedicated customer service agents.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] bg-white flex flex-col p-[20px] box-border items-start justify-center gap-[20px]">
              <div className="relative font-extrabold inline-block">02</div>
              <img
                className="relative w-[39.11px] h-[32px] shrink-0"
                alt=""
                src="../sticky-note-2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[20px] text-lg text-gray-1600 font-fedra-sans-std">
                <div className="relative font-medium inline-block w-[191px]">
                  A Non-to-Exceed quote
                </div>
                <div className="relative text-base text-gray-1000 inline-block w-[191px]">
                  Receive fixed-price, individualized plans and reserve your move
                  without having to worry about hidden fees.
                </div>
              </div>
            </div>
            <div className="rounded-[20px] bg-white flex flex-col p-[20px] box-border items-start justify-center gap-[20px]">
              <div className="relative font-extrabold inline-block">03</div>
              <img className="relative w-[39.11px] h-[32px] shrink-0" alt="" />
              <div className="flex flex-col items-start justify-start gap-[20px] text-lg text-gray-1600 font-fedra-sans-std">
                <div className="relative font-medium inline-block w-[191px]">{`Precise Pickup & Delivery`}</div>
                <div className="relative text-base text-gray-1000 inline-block w-[191px]">
                  There's no need to get held up by service windows. With White
                  Glove Packers and Movers, you can relax.
                </div>
              </div>
            </div>
            <div className="rounded-[20px] bg-white flex flex-col p-[20px] box-border items-start justify-center gap-[20px]">
              <div className="relative font-extrabold inline-block">04</div>
              <img className="relative w-[39.11px] h-[32px] shrink-0" alt="" />
              <div className="flex flex-col items-start justify-start gap-[20px] text-lg text-gray-1600 font-fedra-sans-std">
                <div className="relative font-medium inline-block w-[155px]">
                  Dedicated Trucks
                </div>
                <div className="relative text-base text-gray-1000 inline-block w-[191px]">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Don't worry about sharing your truck space or move-day with
                    anyone else.
                  </p>
                  <p className="m-[0]">&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[5133px] left-[16px] flex flex-col items-center justify-start gap-[30px]">
          <b className="relative text-2xl inline-block text-center">
            Our Latest Blog
          </b>
          <div className="flex flex-col items-start justify-start gap-[30px] text-gray-1000">
            <div className="relative w-[343px] h-[336px] shrink-0">
              <div className="absolute top-[201px] left-[0px] w-[334px] h-[135px]">
                <div className="absolute top-[0px] left-[0px] rounded-[5px] [border:1px_solid_#b9b9b9] box-border flex flex-row p-[10px_16px] items-center justify-center">
                  <div className="relative inline-block">Agriculture</div>
                </div>
                <div className="absolute top-[10px] left-[139px] text-gray-800 inline-block">
                  27 Aug, 2022
                </div>
                <div className="absolute top-[60px] left-[0px] text-xl font-medium text-gray-1200 inline-block w-[334px]">
                  Griha Pravesh Muhurat 2021: Auspicious Dates for Home Shifting
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-[10px] w-[343px] h-[181px] object-cover"
                alt=""
                src="../rectangle-9@2x.png"
              />
            </div>
            <div className="relative w-[343px] h-[310px] shrink-0">
              <div className="absolute top-[200px] left-[0px] w-[330px] h-[110px]">
                <div className="absolute top-[0px] left-[0px] rounded-[5px] [border:1px_solid_#b9b9b9] box-border flex flex-row p-[10px_16px] items-center justify-center">
                  <div className="relative inline-block">Lifestyle</div>
                </div>
                <div className="absolute top-[10px] left-[117px] text-gray-800 inline-block">
                  06 May, 2022
                </div>
                <div className="absolute top-[60px] left-[0px] text-xl font-medium text-gray-1200 inline-block w-[330px]">
                  How to Find the Right House in Bangalore?
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-[10px] w-[343px] h-[180px] object-cover"
                alt=""
                src="../rectangle-10@2x.png"
              />
            </div>
            <div className="relative w-[343px] h-[310px] shrink-0">
              <div className="absolute top-[200px] left-[0px] w-[330px] h-[110px]">
                <div className="absolute top-[0px] left-[0px] rounded-[5px] [border:1px_solid_#b9b9b9] box-border flex flex-row p-[10px_16px] items-center justify-center">
                  <div className="relative inline-block">Lifestyle</div>
                </div>
                <div className="absolute top-[10px] left-[117px] text-gray-800 inline-block">
                  06 May, 2022
                </div>
                <div className="absolute top-[60px] left-[0px] text-xl font-medium text-gray-1200 inline-block w-[330px]">
                  A Comprehensive Guide for Moving into a New Home
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-[10px] w-[343px] h-[181px] object-cover"
                alt=""
                src="../rectangle-8@2x.png"
              />
            </div>
          </div>
          <div className="rounded-[10px] [border:1px_solid_#439fd9] box-border relative flex flex-row p-[20px_30px] items-center justify-start gap-[20px] text-teal-100">
            <div className="relative inline-block">View all Blogs</div>
            <img
              className="relative w-[24px] h-[24px] shrink-0 hidden"
              alt=""
              src="../arrow-right-alt2.svg"
            />
            <img
              className="relative w-[25.32px] h-[16px] shrink-0"
              alt=""
              src="../group-693.svg"
            />
          </div>
        </div>
        <div className="absolute top-[6349px] left-[-3px] w-[380px] h-[982px] text-center text-2xl">
          <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[380px] h-[982px]" />
          <img
            className="absolute top-[469px] left-[278px] w-[99px] h-[94px] overflow-hidden"
            alt=""
            src="../frame1.svg"
          />
          <b className="absolute top-[50px] left-[85px] inline-block w-[211px]">
            What our Clients are Saying
          </b>
          <div className="absolute top-[140px] left-[24px] rounded-[20px] bg-white flex flex-col p-[30px] box-border items-center justify-start gap-[30px] text-left text-lg text-gray-1200">
            <div className="flex flex-row items-start justify-start gap-[20px]">
              <img
                className="relative rounded-[10px] w-[84px] h-[84px] shrink-0 object-cover"
                alt=""
                src="../rectangle-11@2x.png"
              />
              <div className="relative w-[168px] h-[115px] shrink-0">
                <div className="absolute top-[0px] left-[0px] w-[168px] h-[73px]">
                  <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                    Mainak Chakraborty
                  </div>
                  <div className="absolute top-[37px] left-[0px] text-base inline-block w-[148px]">{`Co-founder & CEO, GPS Renewables`}</div>
                </div>
                <div className="absolute top-[85px] left-[0px] text-sm text-gray-1000 inline-block w-[148px]">
                  Relocated from Bangalore to Hyderabad
                </div>
              </div>
            </div>
            <div className="relative text-base leading-[150%] text-gray-1600 inline-block w-[265px]">
              I moved from Whitefield, Bangalore to Hyderabad with Pikkol
              recently. I had been in Bangalore for many years, so, had
              considerable number of items. My Whitefield house was a duplex villa
              (without a lift) with many of these items in the first floor.
            </div>
            <img
              className="relative w-[128px] h-[12px] shrink-0"
              alt=""
              src="../group-151.svg"
            />
          </div>
          <div className="absolute top-[584px] left-[19px] w-[343px] h-[348px]">
            <b className="absolute top-[0px] left-[54px] inline-block w-[235px]">
              150+ Clients Trust White Glove
            </b>
            <div className="absolute top-[90px] left-[0px] w-[343px] h-[258px]">
              <div className="absolute top-[-0.5px] left-[-0.5px] [border:1px_solid_#b8bec7] box-border w-[172px] h-[87px] flex flex-col p-[20px] items-center justify-center">
                <img
                  className="relative w-[119.7px] h-[35px] shrink-0 object-cover"
                  alt=""
                  src="../group-52@2x.png"
                />
              </div>
              <div className="absolute top-[-0.5px] left-[170.5px] [border:1px_solid_#b8bec7] box-border w-[173px] h-[87px] flex flex-col p-[20px] items-center justify-center">
                <img
                  className="relative w-[107.25px] h-[30px] shrink-0 object-cover"
                  alt=""
                  src="../mask-group@2x.png"
                />
              </div>
              <div className="absolute top-[85.5px] left-[-0.5px] [border:1px_solid_#b8bec7] box-border w-[172px] h-[87px] flex flex-col p-[20px] items-center justify-center">
                <img
                  className="relative w-[114.13px] h-[30px] shrink-0 object-cover"
                  alt=""
                  src="../mask-group1@2x.png"
                />
              </div>
              <div className="absolute top-[85.5px] left-[170.5px] [border:1px_solid_#b8bec7] box-border w-[173px] h-[87px] flex flex-col p-[20px] items-center justify-center">
                <img
                  className="relative w-[34.92px] h-[40px] shrink-0 object-cover"
                  alt=""
                  src="../mask-group2@2x.png"
                />
              </div>
              <div className="absolute top-[171.5px] left-[-0.5px] [border:1px_solid_#b8bec7] box-border w-[172px] h-[87px] flex flex-col p-[20px] items-center justify-center">
                <img
                  className="relative w-[118.57px] h-[40px] shrink-0 object-cover"
                  alt=""
                  src="../mask-group3@2x.png"
                />
              </div>
              <div className="absolute top-[171.5px] left-[170.5px] [border:1px_solid_#b8bec7] box-border w-[173px] h-[87px] flex flex-col p-[20px] items-center justify-center">
                <img
                  className="relative w-[120.69px] h-[40px] shrink-0 object-cover"
                  alt=""
                  src="../mask-group4@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[7331px] left-[0px] w-[375px] h-[1220px] text-base text-white">
          <div className="absolute top-[0px] left-[0px] bg-gray-1600 w-[375px] h-[1220px]" />
          <div className="absolute top-[50px] left-[36px] flex flex-col items-start justify-start gap-[30px]">
            <img
              className="relative w-[171.59px] h-[70px] shrink-0 overflow-hidden"
              alt=""
              src="../frame2.svg"
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
      ):(
       <div className="relative bg-white w-full desktop:w-[min-w-fit] h-[10510px] desktop:h-[9620px] overflow-hidden  text-left text-5xl text-gray-1700 font-fedra-sans-std">
      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1920px] sm:w-[375px] h-[637px] sm:h-[450px]" />
      <img
        className="absolute top-[185px] left-[1545px] desktop:top-[145px] desktop:left-[1100px]  w-[112px] h-[118px] overflow-hidden"
        alt=""
        src="../frame16.svg"
      />
      <img
        className="absolute top-[223.5px] sm:top-[60.75px] left-[0px] sm:left-[100.61px] desktop:w-[1400px] sm:w-[374.61px] w-[1918.5px] h-[414px]"
        alt=""
        src="../vector2.svg"
      />
       <Header />

       <div className="absolute top-[212px]  left-[1254px]  desktop:left-[900px] desktop:top-[180px] rounded-[20px] bg-white shadow-[29px_37px_50px_rgba(67,_159,_217,_0.08)] flex flex-col p-[50px] desktop:p-[30px] box-border items-start justify-start gap-[20px] text-2xl">
        <div className="relative text-teal-100 inline-block">
          Shifting Happiness
        </div>
        <b className="relative text-3xl sm:text-2xl leading-[130%] inline-block sm: w-[247px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`We make your `}</p>
          <p className="m-[0]">Moving Easy</p>
        </b>
        <div className="rounded-[10px] bg-gold flex flex-row p-[20px] box-border items-center justify-start gap-[20px] text-base">
          <div className="relative font-medium inline-block">
            Calculate Moving Prices
          </div>
          <img
            className="relative w-[25.32px] h-[16px] shrink-0"
            alt=""
            src="../group-6922.svg"
          />
        </div>
      </div>

      <div className="absolute top-[1894px] desktop:top-[1794px] left-[0px] w-[1920px] desktop:w-[1366px] h-[903px] desktop:h-[740px] text-base">
        <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1920px] desktop:w-[1366px] h-[903px] desktop:h-[740px]" />
        <div className="absolute top-[200px] desktop:top-[150px] left-[481px] desktop:left-[181px] flex flex-col items-center justify-start gap-[120px] desktop:gap-[60px] ">
          <div className="relative w-[919px] h-[263px] shrink-0">
            <div className="absolute top-[0px] left-[544px] flex flex-col items-start justify-start gap-[30px]">
              <b className="relative text-3xl leading-[130%] inline-block w-[375px]">{`Great & Affordable Shifting Services`}</b>
              <div className="relative text-gray-1100 inline-block w-[365px]">{`Receive fixed-price, individualized plans and reserve your move without having to worry about hidden fees. `}</div>
              <div className="relative text-teal-100 inline-block">
                Read More
              </div>
            </div>
            <img
              className="absolute top-[3px] left-[0px] w-[464px] h-[260px] object-cover"
              alt=""
              src="../worldwide-delivery-1@2x.png"
            />
          </div>
          <div className="rounded-[20px] bg-white flex flex-row p-[0px_30px] box-border items-center justify-start gap-[10px] text-sm">
            <div className="bg-white flex flex-row p-[40px_20px] box-border items-center justify-center gap-[10px]">
              <img
                className="relative w-[40px] h-[40px] shrink-0"
                alt=""
                src="../other-houses.svg"
              />
              <div className="relative inline-block w-[81px] shrink-0">
                Domestic Relocation
              </div>
            </div>
            <div className="bg-white border-t-[0px_solid_#439fd9] border-r-[0px_solid_#439fd9] border-b-[2px_solid_#439fd9] border-l-[0px_solid_#439fd9] box-border relative flex flex-row p-[40px_20px] items-center justify-center gap-[10px] text-teal-100">
              <img
                className="relative w-[40px] h-[40px] shrink-0"
                alt=""
                src="../language.svg"
              />
              <div className="relative font-medium inline-block w-[102px] shrink-0">
                International Relocation
              </div>
            </div>
            <div className="bg-white flex flex-row p-[40px_20px] box-border items-center justify-center gap-[10px]">
              <img
                className="relative w-[40px] h-[40px] shrink-0"
                alt=""
                src="../corporate-fare.svg"
              />
              <div className="relative inline-block w-[96px] shrink-0">
                Corporate Relocation
              </div>
            </div>
            <div className="bg-white flex flex-row p-[40px_20px] box-border items-center justify-center gap-[10px]">
              <img
                className="relative w-[40px] h-[40px] shrink-0"
                alt=""
                src="../local-shipping.svg"
              />
              <div className="relative inline-block w-[78px] shrink-0">
                Vehicle Relocation
              </div>
            </div>
            <div className="bg-white flex flex-row p-[40px_20px] box-border items-center justify-center gap-[10px]">
              <img
                className="relative w-[40px] h-[40px] shrink-0"
                alt=""
                src="../backup-table.svg"
              />
              <div className="relative inline-block">Storage</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[6419px] desktop:top-[5900px] left-[0px] w-[1920px] h-[853px] text-center text-white">
        <div className="absolute top-[0px] left-[0px] bg-teal-100 w-[1920px] h-[853px]" />
        <div className="absolute top-[100px] left-[300px] desktop:left-[100px] w-[1320px] h-[639px]">
          <b className="absolute top-[0px] left-[262px] desktop:left-[162px] leading-[130%] inline-block w-[796px]">
            <span>{`Our `}</span>
            <span className="text-gold">Best Experience</span>
            <span> in Excellent Logistics Fulfillment</span>
          </b>
          <div className="absolute top-[204px] desktop:top-[154px] left-[0px] w-[1320px] h-[min-h-fit] text-left text-7xl text-teal-200 font-open-sans">
            <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-white flex flex-col p-[30px] desktop:p-[20px] box-border items-start justify-center gap-[40px] desktop:gap-[20px]">
              <div className="relative font-extrabold inline-block">01</div>
              <img
                className="relative w-[58.67px] h-[48px] shrink-0"
                alt=""
                src="../sticky-note-2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[20px] text-2xl text-gray-1700 font-fedra-sans-std">
                <div className="relative font-medium inline-block w-[191px]">
                  Convenient Booking
                </div>
                <div className="relative text-base text-gray-1100 inline-block w-[243px]">
                  Book on your schedule and get estimates instantly with the
                  help of our dedicated customer service.
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[339px] desktop:left-[300px] rounded-[20px] bg-white flex flex-col p-[30px] desktop:p-[20px] box-border items-start justify-center gap-[40px] desktop:gap-[20px] ">
              <div className="relative font-extrabold inline-block">02</div>
              <img
                className="relative w-[58.67px] h-[48px] shrink-0"
                alt=""
                src="../sticky-note-2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[20px] text-2xl text-gray-1700 font-fedra-sans-std">
                <div className="relative font-medium inline-block w-[202px]">
                  A Non-to-Exceed quote
                </div>
                <div className="relative text-base text-gray-1100 inline-block w-[243px]">
                  Receive fixed-price, individualized plans and reserve your
                  move without having to worry about hidden fees.
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[678px] desktop:left-[600px] rounded-[20px] bg-white flex flex-col p-[30px] desktop:p-[20px] box-border items-start justify-center gap-[40px] desktop:gap-[20px]">
              <div className="relative font-extrabold inline-block">03</div>
              <img
                className="relative w-[58.67px] h-[48px] shrink-0"
                alt=""
                src="../sticky-note-2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[20px] text-2xl text-gray-1700 font-fedra-sans-std">
                <div className="relative font-medium inline-block w-[220px]">{`Precise Pickup & Delivery`}</div>
                <div className="relative text-base text-gray-1100 inline-block w-[243px]">
                  There's no need to get held up by service windows. With White
                  Glove Packers and Movers, you can relax.
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[1017px] desktop:left-[900px] rounded-[20px] bg-white flex flex-col p-[30px] desktop:p-[20px] box-border items-start justify-center gap-[40px] desktop:gap-[20px]">
              <div className="relative font-extrabold inline-block">04</div>
              <img
                className="relative w-[58.67px] h-[48px] shrink-0"
                alt=""
                src="../sticky-note-2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[20px] text-2xl text-gray-1700 font-fedra-sans-std">
                <div className="relative font-medium inline-block w-[155px]">
                  Dedicated Trucks
                </div>
                <div className="relative text-base text-gray-1100 inline-block w-[243px]">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Don't worry about sharing your truck space or move-day with
                    anyone else help of our dedicated customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[549px] left-[44px] w-[1081px] desktop:w-[900px] mobile:w-[294pxpx] h-[205px] mobile:w-[55.7px]">
        <img
          className="absolute top-[34px] left-[528px] w-[553px] desktop:w-[353px] h-[88px] object-cover"
          alt=""
          src="../moversburnabysignaturemovingscaledremovebg-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[590px] desktop:w-[490px] h-[205px] object-cover"
          alt=""
          src="../truck-mockup-1@2x.png"
        />
      </div>
      <div className="absolute top-[7272px] desktop:top-[6700px] left-[0px] w-[1920px] h-[1344px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1920px] h-[1344px]" />
        <div className="absolute top-[100px] left-[555px] desktop:left-[300px] flex flex-col items-center justify-start gap-[100px]">
          <b className="relative inline-block text-center">Our Latest Blog</b>
          <div className="relative w-[810px] h-[817px] shrink-0 text-base text-gray-1100">
            <div className="absolute top-[453px] left-[0px] w-[380px] h-[364px]">
              <div className="absolute top-[230px] left-[0px] w-[329px] h-[134px]">
                <div className="absolute top-[0px] left-[0px] rounded-[10px] [border:1px_solid_#b9b9b9] box-border flex flex-row p-[10px_16px] items-center justify-center">
                  <div className="relative inline-block">Lifestyle</div>
                </div>
                <div className="absolute top-[10px] left-[117px] text-gray-900 inline-block">
                  06 May, 2022
                </div>
                <div className="absolute top-[74px] left-[0px] text-2xl font-medium text-gray-1300 inline-block w-[329px]">
                  A Comprehensive Guide for Moving into a New Home
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-[10px] w-[380px] h-[200px] object-cover"
                alt=""
                src="../rectangle-8@2x.png"
              />
            </div>
            <div className="absolute top-[453px] left-[430px] w-[380px] h-[364px]">
              <div className="absolute top-[230px] left-[0px] w-[329px] h-[134px]">
                <div className="absolute top-[0px] left-[0px] rounded-[10px] [border:1px_solid_#b9b9b9] box-border flex flex-row p-[10px_16px] items-center justify-center">
                  <div className="relative inline-block">Lifestyle</div>
                </div>
                <div className="absolute top-[10px] left-[117px] text-gray-900 inline-block">
                  06 May, 2022
                </div>
                <div className="absolute top-[74px] left-[0px] text-2xl font-medium text-gray-1300 inline-block w-[329px]">
                  5 Important Tips To Move Affordably
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-[10px] w-[380px] h-[200px] object-cover"
                alt=""
                src="../rectangle-81@2x.png"
              />
            </div>
            <div className="absolute top-[0px] left-[0px] w-[380px] h-[394px]">
              <div className="absolute top-[230px] left-[0px] w-[334px] h-[164px]">
                <div className="absolute top-[0px] left-[0px] rounded-[10px] [border:1px_solid_#b9b9b9] box-border flex flex-row p-[10px_16px] items-center justify-center">
                  <div className="relative inline-block">Agriculture</div>
                </div>
                <div className="absolute top-[10px] left-[139px] text-gray-900 inline-block">
                  27 Aug, 2022
                </div>
                <div className="absolute top-[74px] left-[0px] text-2xl font-medium text-gray-1300 inline-block w-[334px]">
                  Griha Pravesh Muhurat 2021: Auspicious Dates for Home Shifting
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-[10px] w-[380px] h-[200px] object-cover"
                alt=""
                src="../rectangle-9@2x.png"
              />
            </div>
            <div className="absolute top-[0px] left-[430px] w-[380px] h-[364px]">
              <div className="absolute top-[230px] left-[0px] w-[330px] h-[134px]">
                <div className="absolute top-[0px] left-[0px] rounded-[10px] [border:1px_solid_#b9b9b9] box-border flex flex-row p-[10px_16px] items-center justify-center">
                  <div className="relative inline-block">Lifestyle</div>
                </div>
                <div className="absolute top-[10px] left-[117px] text-gray-900 inline-block">
                  06 May, 2022
                </div>
                <div className="absolute top-[74px] left-[0px] text-2xl font-medium text-gray-1300 inline-block w-[330px]">
                  How to Find the Right House in Bangalore?
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-[10px] w-[380px] h-[200px] object-cover"
                alt=""
                src="../rectangle-10@2x.png"
              />
            </div>
          </div>
          <div className="rounded-[10px] [border:1px_solid_#439fd9] box-border relative flex flex-row p-[20px_30px] items-center justify-start gap-[20px] text-xl text-teal-100 font-open-sans">
            <div className="relative font-semibold inline-block">
              View all Blogs
            </div>
            <img
              className="relative w-[25.32px] h-[16px] shrink-0"
              alt=""
              src="../group-6923.svg"
            />
          </div>
        </div>
      </div>

      <FAQ />
      <div className="absolute top-[1094px] desktop:top-[1000px] left-[-167px] desktop:left-[-667px] w-[2087px] desktop:w-[2500px] h-[800px] text-white">
        <img
          className="absolute top-[0px] left-[167px] desktop:left-[550px]  w-[1920px] desktop:w-[1566px]  h-[800px] object-cover"
          alt=""
          src="../rectangle-14@2x.png"
        />
        <div className="absolute top-[267px] desktop:top-[270px] left-[5467px] desktop:left-[790px] flex flex-col items-start justify-center gap-[30px]">
          <b className="relative leading-[130%] inline-block w-[287px] ">
            Moving Made Modern
          </b>
          <div className="relative text-base inline-block w-[361px] ">
            By choosing White Glove Packers and Movers, you’re guaranteeing a
            great moving day. All customers receive transparent pricing,
            flexible service and payment options, Quality Packaging Material,
            industry-best customer support, and an easy-to-access online
            dashboard.
          </div>
        </div>
        <img
          className="absolute top-[576px] left-[167px] desktop:left-[490px] w-[467.5px] h-[174px]"
          alt=""
          src="../vector3.svg"
        />
        <img
          className="absolute top-[50px] left-[309px] desktop:left-[730px] w-[158px] h-[150px] overflow-hidden"
          alt=""
          src="../frame18.svg"
        />
      </div>
      <div className="absolute top-[2997px] desktop:top-[2650px] left-[300px] desktop:left-[100px] flex flex-col items-center justify-start gap-[250px]">
        <div className="relative w-[1320px] h-[606px] desktop:h-[500px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-gold w-[1320px] desktop:w-[1150px] h-[534px]" />
          <div className="absolute top-[102px] left-[100px] desktop:left-[60px] flex flex-col items-start justify-center gap-[30px]">
            <b className="relative leading-[130%] inline-block w-[287px]">
              What do you want to ship?
            </b>
            <div className="relative text-2xl inline-block w-[340px]">
              Get local advice for your request. Our team is always there for
              you.
            </div>
            <div className="rounded-[10px] bg-gray-1700 flex flex-row p-[20px] box-border items-center justify-start gap-[20px] text-xl text-white">
              <div
                className="relative font-medium inline-block"
                onClick={() => handleClickLetsTalk()}
              >
                Let’s Talk
              </div>
              <img
                className="relative w-[25.32px] h-[16px] shrink-0"
                alt=""
                src="../group-6925.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[363px] left-[914px] desktop:left-[780px] w-[306px] h-[171px]"
            alt=""
            src="../vector4.svg"
          />
          <img
            className="absolute top-[0px] left-[382.14px] desktop:left-[282px] w-[724.89px] desktop:w-[624.89px]  h-[363px] desktop:h-[263px]"
            alt=""
            src="../group-45.svg"
          />
          <img
            className="absolute top-[205px] left-[518px] desktop:left-[418px] w-[408px] h-[401px] object-cover"
            alt=""
            src="../ungroup-unhide-1@2x.png"
          />
          <img
            className="absolute top-[163.57px] left-[1062.41px] desktop:left-[928px]  w-[157.9px] h-[149.58px]"
            alt=""
            src="../group-441.svg"
          />
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-center gap-[30px] desktop:gap-[20px] text-xl desktop:mr-[159px]">
          <div className="rounded-[20px] bg-gray-200 flex flex-col p-[40px_50px] desktop:p-[20px_30px] box-border items-start justify-center gap-[20px]">
            <img
              className="relative w-[48px] h-[48px] shrink-0"
              alt=""
              src="../pin-drop2.svg"
            />
            <div className="relative inline-block w-[110px]">
              Number of Locations
            </div>
            <b className="relative text-5xl inline-block">359</b>
          </div>
          <div className="rounded-[20px] bg-gray-200 flex flex-col p-[40px_50px] desktop:p-[20px_30px] box-border items-start justify-center gap-[20px]">
            <img
              className="relative w-[48px] h-[48px] shrink-0"
              alt=""
              src="../local-shipping1.svg"
            />
            <div className="relative inline-block w-[110px]">
              Delivered Packages
            </div>
            <b className="relative text-5xl inline-block">500+</b>
          </div>
          <div className="rounded-[20px] bg-gray-200 flex flex-col p-[40px_50px] desktop:p-[20px_30px] box-border items-start justify-center gap-[20px]">
            <img
              className="relative w-[48px] h-[48px] shrink-0"
              alt=""
              src="../speed.svg"
            />
            <div className="relative inline-block w-[110px]">
              Kilometer Per Month
            </div>
            <b className="relative text-5xl inline-block">25K</b>
          </div>
          <div className="rounded-[20px] bg-gray-200 flex flex-col p-[40px_50px] desktop:p-[20px_30px] box-border items-start justify-center gap-[20px]">
            <img
              className="relative w-[48px] h-[48px] shrink-0"
              alt=""
              src="../package1.svg"
            />
            <div className="relative inline-block w-[110px]">Tons Of Goods</div>
            <b className="relative text-5xl inline-block">17K</b>
          </div>
          <div className="rounded-[20px] bg-gray-200 flex flex-col p-[40px_50px] desktop:p-[20px_30px] box-border items-start justify-center gap-[20px]">
            <img
              className="relative w-[48px] h-[48px] shrink-0"
              alt=""
              src="../sentiment-satisfied.svg"
            />
            <div className="relative inline-block w-[110px]">
              Satisfied Clients
            </div>
            <b className="relative text-5xl inline-block">150+</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[8616px] desktop:top-[8000px] left-[0px] w-[1920px] h-[1229px] text-center text-xl">
        <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1920px] h-[1229px]" />
        <img
          className="absolute top-[624px] desktop:top-[560px]  left-[1194px] desktop:left-[950px] w-[139.07px] h-[131.65px] overflow-hidden"
          alt=""
          src="../frame19.svg"
        />

        <div className="absolute top-[250px] desktop:top-[200px] left-[640px] desktop:left-[380px] rounded-[20px] bg-white flex flex-col p-[60px] box-border items-start justify-center gap-[50px] text-left text-gray-1300">
          {/* swrhethet */}
          {displaySlider()}
          <div className="flex items-center justify-center">
            <div className="inline-flex" role="group">
              <button
                className="mx-0.5"
                style={{
                  border: "0.5px solid gray",
                  borderRadius: "50%",
                  padding: "6px",
                  backgroundColor:'#B9B9B9',
                  cursor:'pointer'
                }}
                onClick={() => onClickSlider1()}
              ></button>
              <button
                className="mx-0.5"
                style={{
                  border: "0.5px solid gray",
                  borderRadius: "50%",
                  padding: "6px",
                  backgroundColor:'#B9B9B9',
                  cursor:'pointer'
                }}
                onClick={() => onClickSlider2()}
              ></button>
              <button
                className="mx-0.5"
                style={{
                  border: "0.5px solid gray",
                  borderRadius: "50%",
                  padding: "6px",
                  backgroundColor:'#B9B9B9',
                  cursor:'pointer'
                }}
                onClick={() => onClickSlider3()}
              ></button>
              <button
                className="mx-0.5"
                style={{
                  border: "0.5px solid gray",
                  borderRadius: "50%",
                  padding: "6px",
                  backgroundColor:'#B9B9B9',
                  cursor:'pointer'
                }}
                onClick={() => onClickSlider4()}
              ></button>
              <button
                className="mx-0.5"
                style={{
                  border: "0.5px solid gray",
                  borderRadius: "50%",
                  padding: "6px",
                  backgroundColor:'#B9B9B9',
                  cursor:'pointer'
                }}
                onClick={() => onClickSlider5()}
              ></button>
            </div>
          </div>
        </div>
        <b className="absolute top-[100px] left-[677px] desktop:left-[450px] text-5xl inline-block">
          What our Clients are Saying
        </b>
        <div className="absolute top-[913px] desktop:top-[750px] left-[313px] desktop:left-[70px] flex flex-col items-center justify-start gap-[100px] desktop:gap-[50px] text-3xl">
          <b className="relative inline-block">
            150+ Clients Trust White Glove
          </b>
          <div className="rounded-[20px] flex flex-row p-[0px_30px] box-border items-center justify-center gap-[70px] desktop:gap-[50px]">
            <img
              className="relative w-[171px] h-[50px] shrink-0 object-cover"
              alt=""
              src="../group-523@2x.png"
            />
            <img
              className="relative w-[143px] h-[40px] shrink-0 object-cover"
              alt=""
              src="../mask-group12@2x.png"
            />
            <img
              className="relative w-[175px] h-[46px] shrink-0 object-cover"
              alt=""
              src="../mask-group13@2x.png"
            />
            <img
              className="relative w-[55px] h-[63px] shrink-0 object-cover"
              alt=""
              src="../mask-group14@2x.png"
            />
            <img
              className="relative w-[166px] h-[56px] shrink-0 object-cover"
              alt=""
              src="../mask-group15@2x.png"
            />
            <img
              className="relative w-[175px] h-[58px] shrink-0 object-cover"
              alt=""
              src="../mask-group16@2x.png"
            />
          </div>
        </div>
      </div>

     
      <Footer />

      <div className="absolute top-[4279px] desktop:top-[3770px] left-[0px] w-[1920px] h-[1030px] text-center text-xl text-teal-100">
        <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1920px] h-[1030px] desktop:h-[800px]" />
        <div className="absolute top-[200px] desktop:top-[100px]  left-[305px] desktop:left-[70px] flex flex-col items-center justify-start gap-[100px] desktop:gap-[60px]">
          <div className="flex flex-col items-center justify-center gap-[20px] desktop:gap-[5px] text-2xl">
            <div className="relative inline-block">Our Top Cities</div>
            <b className="relative text-5xl inline-block text-gray-1700">
              Find Movers Near You
            </b>
          </div>
          <div className="flex flex-row items-center justify-center gap-[40px] desktop:gap-[15px] text-gray-1700">
            <div className="rounded-[20px] [border:2px_solid_#000c24] box-border relative w-[230px] h-[250px] shrink-0 flex flex-col p-[64px] items-center justify-center gap-[30px]">
              <img
                className="relative w-[90.38px] h-[102px] shrink-0"
                alt=""
                src="../group-581.svg"
              />
              <div className="relative inline-block">Delhi</div>
            </div>
            <div className="rounded-[20px] [border:2px_solid_#000c24] box-border relative w-[230px] h-[250px] shrink-0 flex flex-col p-[64px] items-center justify-center gap-[30px] text-teal-100">
              <img
                className="relative w-[90.38px] h-[102px] shrink-0"
                alt=""
                src="../group-582.svg"
              />
              <div className="relative inline-block">Gurgaon</div>
            </div>
            <div className="rounded-[20px] [border:2px_solid_#000c24] box-border relative w-[230px] h-[250px] shrink-0 flex flex-col p-[64px] items-center justify-center gap-[30px]">
              <img
                className="relative w-[84.5px] h-[101px] shrink-0"
                alt=""
                src="../group-62.svg"
              />
              <div className="relative inline-block">Hyderabad</div>
            </div>
            <div className="rounded-[20px] [border:2px_solid_#000c24] box-border relative w-[230px] h-[250px] shrink-0 flex flex-col p-[64px] items-center justify-center gap-[30px]">
              <img
                className="relative w-[140.24px] h-[101px] shrink-0"
                alt=""
                src="../group-59.svg"
              />
              <div className="relative inline-block">Mumbai</div>
            </div>
            <div className="rounded-[20px] [border:2px_solid_#000c24] box-border relative w-[230px] h-[250px] shrink-0 flex flex-col p-[64px] items-center justify-center gap-[30px]">
              <img
                className="relative w-[98.73px] h-[101px] shrink-0"
                alt=""
                src="../group-61.svg"
              />
              <div className="relative inline-block">Chennai</div>
            </div>
          </div>
          <div className="rounded-[10px] [border:1px_solid_#439fd9] box-border relative flex flex-row p-[30px_40px] items-center justify-start gap-[20px] text-left">
            <div className="relative inline-block">Explore All Cities</div>
            <img
              className="relative w-[24px] h-[24px] shrink-0 hidden"
              alt=""
              src="../arrow-right-alt11.svg"
            />
            <img
              className="relative w-[25.32px] h-[16px] shrink-0"
              alt=""
              src="../group-6923.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[9372px] desktop:top-[8630px]  left-[300px] desktop:left-[50px] w-[1414px] desktop:w-[1300px] h-[389px] desktop:h-[290px]"
        alt=""
        src="../vector5.svg"
      />
      <div className="absolute top-[750px] desktop:top-[735px] left-[380px] desktop:left-[130px] rounded-[20px] bg-gray-1700 flex flex-row p-[40px_50px] desktop:p-[30px_40px] box-border items-center justify-center gap-[50px] desktop:gap-[40px] text-2xl text-white">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="relative w-[64px] h-[64px] shrink-0"
            alt=""
            src="../location-on8.svg"
          />
          <div className="relative leading-[130%] font-medium inline-block w-[138px] shrink-0">
            Track your Order
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[16px] text-sm text-teal-100">
          <div className="relative inline-block">Choose Order Type</div>
          <div className="w-[244px] flex flex-row items-center justify-between text-xl text-white">
            <div className="relative inline-block">LTL Shipment (LRN)</div>
            <img
              className="relative w-[24px] h-[24px] shrink-0"
              alt=""
              src="../arrow-forward-ios25.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px] text-center text-base text-gray-800">
          <div className="rounded-[10px] bg-gray-300 w-[302px] shrink-0 flex flex-row p-[16px_20px] box-border items-start justify-start">
            <input
              type="text"
              placeholder="LRN Number"
              className="bg-gray-300"
              style={{ width: "100%", height: "100%", borderStyle: "none" }}
            />
          </div>
          <div className="rounded-[10px] bg-gold w-[175px] shrink-0 flex flex-row p-[16px_20px] box-border items-center justify-center text-gray-1700">
            <div
              className="relative font-medium inline-block"
              onClick={() => handleClickTrack()}
            >
              Track
            </div>
          </div>
        </div>
      </div>
    </div>
      )}
    </>
  );
};

export default HomePage;
