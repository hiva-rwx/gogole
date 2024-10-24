import React, { Fragment } from "react";
import { ArrowDown, GlLogo, Man } from "../assets/icons";
import Footer from "../components/Footer";

const TwoStepVeificationCodeByPhoneNumber = () => {
  return (
    <Fragment>
      <div className="w-full max-md:h-screen md:w-3/5 md:min-h-96 bg-white rounded-2xl p-9 md:grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="max-md:mb-14 flex flex-col">
          <GlLogo />
          <div className="text-5xl font-normal my-4">Account recovery</div>
          <div>
            To help keep your account safe, Google wants to make sure it’s really you trying to sign
            in
          </div>
          <div className="my-5 flex border-2 px-2 py-0.5 w-fit cursor-pointer hover:bg-black/5 rounded-full items-center gap-4">
            <Man />
            <p>test@gmail.com</p>
            <ArrowDown />
          </div>
        </div>
        <div className="md:mt-16 flex flex-col">
          <div className="image-linear flex justify-center w-full">
            <img src="/images/sms-pin.gif" alt="sms-pin.gif" />
          </div>
          <div className="text-xl font-normal my-4">Get a verification code</div>
          <div>
            To get a verification code, first confirm the phone number you added to your account
            •••• ••• ••50. Standard rates apply.
          </div>
          <div className="flex gap-8 justify-end mt-10">
            <button className="text-[#0b57d0] font-medium hover:bg-black/5 py-2 px-4 rounded-full">
              Try another way
            </button>
            <button className="bg-[#0b57d0]/90 text-white px-6 py-2 rounded-full hover:bg-[#0b57d0]">
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TwoStepVeificationCodeByPhoneNumber;
