import { Fragment, useState } from "react";
import { ArrowDown, GlLogo, Man } from "../assets/icons";
import Footer from "../components/Footer";
import useClickOutSide from "../hooks/useClickOutSide";
import classNames from "classnames";

const TwoStepCodeInSetting = () => {
  const [hasFocus, sethasFocus] = useState(false);
  const [input, setInput] = useState("");
  const ref = useClickOutSide(() => sethasFocus(false));
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
          <div className="my-5 flex border px-2 py-0.5 w-fit cursor-pointer hover:bg-black/5 rounded-full items-center gap-4">
            <Man />
            <p>test@gmail.com</p>
            <ArrowDown />
          </div>
        </div>
        <div className="md:mt-16 flex flex-col">
          <div>
            <ul className="list-disc">
              <li className="text-sm mb-2">
                <div>
                  Get your <div className="font-bold inline-block">Daria zahedan</div>
                </div>
              </li>
              <li className="text-sm mb-2">
                <div className="flex items-center gap-2">
                  Open the <div className="font-bold inline-block">Settings</div> app{" "}
                  <div>
                    <svg
                      aria-hidden="true"
                      fill="currentColor"
                      focusable="false"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M13.85,22.25h-3.7c-0.74,0-1.36-0.54-1.45-1.27l-0.27-1.89c-0.27-0.14-0.53-0.29-0.79-0.46l-1.8,0.72 c-0.7,0.26-1.47-0.03-1.81-0.65L2.2,15.53c-0.35-0.66-0.2-1.44,0.36-1.88l1.53-1.19c-0.01-0.15-0.02-0.3-0.02-0.46 c0-0.15,0.01-0.31,0.02-0.46l-1.52-1.19C1.98,9.9,1.83,9.09,2.2,8.47l1.85-3.19c0.34-0.62,1.11-0.9,1.79-0.63l1.81,0.73 c0.26-0.17,0.52-0.32,0.78-0.46l0.27-1.91c0.09-0.7,0.71-1.25,1.44-1.25h3.7c0.74,0,1.36,0.54,1.45,1.27l0.27,1.89 c0.27,0.14,0.53,0.29,0.79,0.46l1.8-0.72c0.71-0.26,1.48,0.03,1.82,0.65l1.84,3.18c0.36,0.66,0.2,1.44-0.36,1.88l-1.52,1.19 c0.01,0.15,0.02,0.3,0.02,0.46s-0.01,0.31-0.02,0.46l1.52,1.19c0.56,0.45,0.72,1.23,0.37,1.86l-1.86,3.22 c-0.34,0.62-1.11,0.9-1.8,0.63l-1.8-0.72c-0.26,0.17-0.52,0.32-0.78,0.46l-0.27,1.91C15.21,21.71,14.59,22.25,13.85,22.25z M13.32,20.72c0,0.01,0,0.01,0,0.02L13.32,20.72z M10.68,20.7l0,0.02C10.69,20.72,10.69,20.71,10.68,20.7z M10.62,20.25h2.76 l0.37-2.55l0.53-0.22c0.44-0.18,0.88-0.44,1.34-0.78l0.45-0.34l2.38,0.96l1.38-2.4l-2.03-1.58l0.07-0.56 c0.03-0.26,0.06-0.51,0.06-0.78c0-0.27-0.03-0.53-0.06-0.78l-0.07-0.56l2.03-1.58l-1.39-2.4l-2.39,0.96l-0.45-0.35 c-0.42-0.32-0.87-0.58-1.33-0.77L13.75,6.3l-0.37-2.55h-2.76L10.25,6.3L9.72,6.51C9.28,6.7,8.84,6.95,8.38,7.3L7.93,7.63 L5.55,6.68L4.16,9.07l2.03,1.58l-0.07,0.56C6.09,11.47,6.06,11.74,6.06,12c0,0.26,0.02,0.53,0.06,0.78l0.07,0.56l-2.03,1.58 l1.38,2.4l2.39-0.96l0.45,0.35c0.43,0.33,0.86,0.58,1.33,0.77l0.53,0.22L10.62,20.25z M18.22,17.72c0,0.01-0.01,0.02-0.01,0.03 L18.22,17.72z M5.77,17.71l0.01,0.02C5.78,17.72,5.77,17.71,5.77,17.71z M3.93,9.47L3.93,9.47C3.93,9.47,3.93,9.47,3.93,9.47z M18.22,6.27c0,0.01,0.01,0.02,0.01,0.02L18.22,6.27z M5.79,6.25L5.78,6.27C5.78,6.27,5.79,6.26,5.79,6.25z M13.31,3.28 c0,0.01,0,0.01,0,0.02L13.31,3.28z M10.69,3.26l0,0.02C10.69,3.27,10.69,3.27,10.69,3.26z"></path>
                      <circle cx="12" cy="12" r="3.5"></circle>
                    </svg>
                  </div>
                </div>
              </li>
              <li className="text-sm mb-2">
                <div>
                  Tap <div className="font-bold inline-block">Google</div>
                </div>
              </li>
              <li className="text-sm mb-2">
                <div>Choose your account, if it not already selected</div>
              </li>
              <li className="text-sm mb-2">
                <div>
                  Tap <div className="font-bold inline-block">Manage your Google Account</div>
                </div>
              </li>
              <li className="text-sm mb-2">
                <div>Select the Security tab (you may need to scroll to the right)</div>
              </li>
              <li className="text-sm mb-2">
                <div>
                  Under "Signing in to Google" tap{" "}
                  <div className="font-bold inline-block">Security code</div>
                </div>
              </li>
              <li className="text-sm mb-2">
                <div>Choose an account to get your code</div>
              </li>
            </ul>
          </div>
          <div ref={ref} className="w-full relative mt-8" onClick={() => sethasFocus(true)}>
            <input
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
              className={classNames(
                "w-full px-4 py-4 rounded-sm outline-none text-lg text-[#0c0e0d]",
                {
                  "border border-[#0c0e0d]": !hasFocus,
                  "border-2 border-[#0b57d0]": hasFocus,
                }
              )}
            />
            <div
              className={classNames("absolute transition-all", {
                "left-6 top-1/2 -translate-y-1/2 text-[#191e1d] text-lg": !hasFocus,
                "left-5 top-0 -translate-y-1/2 text-[#0b57d0] text-sm bg-white px-1": hasFocus,
              })}
            >
              Enter code
            </div>
          </div>
          <div className="flex items-center gap-4 my-6">
            <input type="checkbox" id="qq" className="w-4 h-4" />
            <label htmlFor="qq">Don’t ask again on this device</label>
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

export default TwoStepCodeInSetting;
