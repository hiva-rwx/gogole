import React, { Fragment } from "react";
import { ArrowDown, GlLogo, Man } from "../assets/icons";
import Footer from "../components/Footer";

const TwoStepAccountRecoveryNumber = () => {
  return (
    <Fragment>
      <div className="w-full max-md:h-screen md:w-3/5 md:min-h-96 bg-white rounded-2xl p-9 md:grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="max-md:mb-14 flex flex-col">
          <GlLogo />
          <div className="text-5xl font-normal my-4">2-Step Verification</div>
          <div>
            To help keep your account safe, Google wants to make sure it’s really you trying to sign
            in
          </div>
          <div className="my-5 flex border-2 px-2 py-0.5 w-fit cursor-pointer hover:bg-black/5 rounded-full items-center gap-4">
            <Man />
            <p>test@gmail.com</p>
            <ArrowDown />
          </div>
          <div className="flex-grow items-end">
            <button className="text-[#0b57d0] font-medium hover:bg-black/5 py-2 px-4 rounded-full">
              Resend it
            </button>
          </div>
        </div>
        <div className="md:mt-16 flex flex-col">
          <div className="text-center text-4xl font-normal">41</div>
          <div className="text-2xl my-3">Check your phone</div>
          <div>
            Pull down the notification bar and tap the sign-in notification. Tap{" "}
            <div className="inline-block font-bold">Yes</div>, then tap{" "}
            <div className="inline-block font-bold">41</div> on your phone to verify it’s you.
          </div>
          <div className="flex gap-8 justify-end mt-10">
            <button className="text-[#0b57d0] font-medium hover:bg-black/5 py-2 px-4 rounded-full">
              Try another way
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TwoStepAccountRecoveryNumber;
