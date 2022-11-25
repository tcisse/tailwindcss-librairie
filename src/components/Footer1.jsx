import React from "react";

const getYear = () =>{
      let today = new Date();
      let year = today.getUTCFullYear();
      return year;
}
const Footer1 = () => {
  return (
      <div className="flex flex-col justify-center items-center bg-gray-800 text-[#FFFFFF] px-8 lg:px-24 py-24">
              <div className="flex justify-between items-start flex-wrap flex-row w-full text-left">
                    <div className="flex flex-col w-[250px] lg:mx-4 mt-0 mx-0 my-4">
                          <p className="text-[35px] mb-1 font-extrabold">Logo</p>
                          <p className="text-[12px] leading-[14px]">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                    </div>
                    <div className="flex justify-start flex-col w-[250px] lg:m-4 mx-0 my-4">
                          <h4 className="text-[14px] leading-[16px] font-bold mb-6">Links</h4>
                          <p className="text-[12px] leading-[14px] cursor-pointer mb-4 hover:text-[#81AFDD]"><a href="#links">Overons</a></p>
                          <p className="text-[12px] leading-[14px] cursor-pointer mb-4 hover:text-[#81AFDD]"><a href="#links">Social Media</a></p>
                          <p className="text-[12px] leading-[14px] cursor-pointer mb-4 hover:text-[#81AFDD]"><a href="#links">Counters</a></p>
                          <p className="text-[12px] leading-[14px] cursor-pointer mb-4 hover:text-[#81AFDD]"><a href="#links">Contact</a></p>
                    </div>
                    <div className="flex justify-start flex-col w-[250px] lg:m-4 mx-0 my-4">
                          <h4 className="text-[14px] leading-[16px] font-bold mb-6">Company</h4>
                          <p className="text-[12px] leading-[14px] cursor-pointer mb-4 hover:text-[#81AFDD]"><a href="#links">Terms & Conditions</a></p>
                          <p className="text-[12px] leading-[14px] cursor-pointer mb-4 hover:text-[#81AFDD]"><a href="#links">Privacy Policy</a></p>
                          <p className="text-[12px] leading-[14px] cursor-pointer mb-4 hover:text-[#81AFDD]"><a href="#links">Contact</a></p>
                    </div>
                    <div className="flex justify-start flex-col w-[250px] lg:m-4 mx-0 my-4">
                          <h4 className="text-[14px] leading-[16px] font-bold mb-6">Get in touch</h4>
                          <p className="text-[12px] leading-[14px] mb-4">Crechterwoord K12 182 DK Alknjkcb</p>
                          <p className="text-[12px] leading-[14px] mb-4">085-132567</p>
                          <p className="text-[12px] leading-[14px] mb-4">info@payme.net</p>
                    </div>
              </div>

              <div className="mt-4 text-center w-full">
                    <p className="text-[12px] leading-[14px] text-[#FFFFFF]">© { getYear() } XXX-X. All rights reserved.</p>
              </div>
      </div>
  )
}

export default Footer1