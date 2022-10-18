import React,{useState} from 'react'
import Slider1 from "../Slider/Slider";
import Slider2 from "../Slider/Slider2";
import Slider3 from "../Slider/Slider3";
import Slder4 from "../Slider/Slder4";
import Slider5 from "../Slider5";
import Header from '../Header';
import FAQ from '../FAQ';
import Footer from '../Footer';
import { useRouter } from "next/router";
import Select from 'react-select'

const options = [
  { value: 'mobile_number', label: 'Mobile Number' },
  { value: 'trackingId', label: 'Tracking ID' },
  { value: 'lrn', label: 'LTL Shipment(LRN)' },
  { value: 'orderId', label: 'Order ID/Ref ID' }
]

const HomeDesktopView = () =>{
  const router = useRouter()
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
  
    const handleClickTrack = () => {
      alert("Enter valid LRN number")
    };
    const handleClickLetsTalk = () => {
       router.push('/contact-us-page')
    };
    const exploreAllCity = () =>{
      router.push('domestic-relocation-page')
    }
   return (
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
         <div className="rounded-[10px] bg-gold flex flex-row p-[20px] box-border items-center justify-start gap-[20px] text-base cursor-pointer">
           <div className="relative font-medium inline-block ">
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
           <div className="rounded-[10px] [border:1px_solid_#439fd9] box-border relative flex flex-row p-[20px_30px] items-center justify-start gap-[20px] text-xl text-teal-100 font-open-sans cursor-pointer">
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
             <div className="rounded-[10px] bg-gray-1700 flex flex-row p-[20px] box-border items-center justify-start gap-[20px] text-xl text-white cursor-pointer" onClick={() => handleClickLetsTalk()}>
               <div
                 className="relative font-medium inline-block"
                 
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
           <div className="rounded-[10px] [border:1px_solid_#439fd9] box-border relative flex flex-row p-[30px_40px] items-center justify-start gap-[20px] text-left cursor-pointer" onClick={() =>exploreAllCity()}>
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
       {/* <img
         className="absolute top-[9372px] desktop:top-[8630px]  left-[300px] desktop:left-[50px] w-[1414px] desktop:w-[1300px] h-[389px] desktop:h-[290px]"
         alt=""
         src="../vector5.svg"
       /> */}
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
           <div className="w-[244px] flex flex-row items-center  text-xl text-black">
             <Select options={options} /> 
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
           <div className="rounded-[10px] bg-gold w-[175px] shrink-0 flex flex-row p-[16px_20px] box-border items-center justify-center text-gray-1700 cursor-pointer"  onClick={() => handleClickTrack()}>
             <div
               className="relative font-medium inline-block " 
             >
               Track
             </div>
           </div>
         </div>
       </div>
     </div>
   )
 }

export default HomeDesktopView