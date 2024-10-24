import React, { Fragment, useState } from "react";
import { ArrowDown, GlLogo, Man } from "../assets/icons";
import useClickOutSide from "../hooks/useClickOutSide";
import classNames from "classnames";
import Footer from "../components/Footer";

const TwoStepDevice = () => {
  const [hasFocus, sethasFocus] = useState(false);
  const [input, setInput] = useState("");
  const ref = useClickOutSide(() => sethasFocus(false));
  return (
    <Fragment>
      <div className="w-full max-md:h-screen md:w-3/5 md:min-h-96 bg-white rounded-2xl p-9 md:grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          <div>
            <img src="/images/2fa_device.gif" alt="2fa_device.gif" />
          </div>
          <div>
            <div className="text-xl font-medium text-[#1f1f1f]">Check your Daria zahedan</div>
            <div className="text-[#1f1f1f]">
              Google sent a notification to your Daria zahedan. Tap Yes on the notification to
              verify it’s you.
            </div>
            <div className="flex items-center gap-6 my-6">
              <input type="checkbox" id="show-password" className="w-4 h-4" />
              <label htmlFor="show-password" className="cursor-pointer">
                Don’t ask again on this device
              </label>
            </div>
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

export default TwoStepDevice;
