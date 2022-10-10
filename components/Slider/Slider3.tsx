import React from 'react'

const Slider3 = () => {
  return (
    <>
     <div className="relative w-[399px] h-[140px] shrink-0">
        <div className="absolute top-[9px] left-[190px] w-[209px] h-[121px]">
          <div className="absolute top-[0px] left-[0px] w-[209px] h-[73px]">
            <div className="absolute top-[0px] left-[0px] font-medium inline-block">
              Mainak Chakraborty
            </div>
            <div className="absolute top-[37px] left-[0px] text-sm inline-block w-[148px]">{`Co-founder & CEO, GPS Renewables`}</div>
          </div>
          <div className="absolute top-[85px] left-[0px] text-sm text-gray-1100 inline-block w-[173px]">
            Relocated from Bangalore to Hyderabad
          </div>
        </div>
        {/* <img
          className="absolute top-[0px] left-[0px] rounded-[20px] w-[140px] h-[140px] object-cover"
          alt=""
          src="../rectangle-11@2x.png"
        /> */}
      </div>
      <div className="relative text-base leading-[150%] text-gray-1700 inline-block w-[537px]">
        I moved from Whitefield, Bangalore to Hyderabad with Pikkol recently. I
        had been in Bangalore for many years, so, had considerable number of
        items. My Whitefield house was a duplex villa (without a lift) with many
        of these items in the first floor.
      </div>
    </>
  )
}

export default Slider3