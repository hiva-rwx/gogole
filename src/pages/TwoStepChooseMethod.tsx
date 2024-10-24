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
        </div>
        <div className="md:mt-16 flex flex-col">
          <div className="text-xl font-normal mb-6">Choose how you want to sign in:</div>
          <div className="flex items-start gap-5 py-4 px-3 rounded-md cursor-pointer border-b hover:bg-blue-50">
            <div>
              <svg
                aria-hidden="true"
                fill="#0b57d0"
                focusable="false"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path d="M4,6h18V4H4C2.9,4,2,4.9,2,6v11H0v3h14v-3H4V6z M23,8h-6c-0.55,0-1,0.45-1,1v10c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1V9 C24,8.45,23.55,8,23,8z M22,17h-4v-7h4V17z"></path>
              </svg>
            </div>
            <div>
              Tap <strong>Yes</strong> on your phone or tablet
            </div>
          </div>
          <div className="flex items-start gap-5 py-4 px-3 rounded-md cursor-pointer border-b hover:bg-blue-50">
            <div>
              <svg
                aria-hidden="true"
                fill="#0b57d0"
                focusable="false"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path d="M23,9 C18.89,4.89 13.07,3.57 7.85,5.02 L17.42,14.59 L23,9 Z M5.76,5.76 L2.81,2.81 L1.39,4.22 L3.91,6.74 C2.88,7.37 1.89,8.11 1,9 L12,20 L14.59,17.41 L19.78,22.6 L21.19,21.19 L16,16 L5.76,5.76 Z"></path>
              </svg>
            </div>
            <div>Use your phone or tablet to get a security code (even if it’s offline)</div>
          </div>
          <div className="flex items-start gap-5 py-4 px-3 rounded-md cursor-pointer border-b hover:bg-blue-50">
            <div>
              <svg
                aria-hidden="true"
                fill="#0b57d0"
                focusable="false"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path d="M20,2 L4,2 C2.9,2 2.01,2.9 2.01,4 L2,22 L6,18 L20,18 C21.1,18 22,17.1 22,16 L22,4 C22,2.9 21.1,2 20,2 Z M20,16 L4,16 L4,4 L20,4 L20,16 Z M6,12 L14,12 L14,14 L6,14 L6,12 Z M6,9 L18,9 L18,11 L6,11 L6,9 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z"></path>
              </svg>
            </div>
            <div>
              Get a verification code at ***********50 <br /> 2-Step Verification phone <br /> Standard rates
              apply <br /> Unavailable because you have more secure options
            </div>
          </div>
          <div className="flex items-start gap-5 py-4 px-3 rounded-md cursor-pointer border-b hover:bg-blue-50">
            <div>
              <svg
                aria-hidden="true"
                fill="#0b57d0"
                focusable="false"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path d="M11 12q-1.65 0-2.825-1.175Q7 9.65 7 8q0-1.65 1.175-2.825Q9.35 4 11 4q1.65 0 2.825 1.175Q15 6.35 15 8q0 1.65-1.175 2.825Q12.65 12 11 12Zm0-2q.825 0 1.413-.588Q13 8.825 13 8t-.587-1.412Q11.825 6 11 6q-.825 0-1.412.588Q9 7.175 9 8t.588 1.412Q10.175 10 11 10ZM3 20v-2.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.887-1.1Q9.1 13 11 13q.525 0 1.025.037.5.038 1 .113.025.575.15 1.1.125.525.4 1.025-.575-.125-1.225-.2Q11.7 15 11 15q-1.8 0-3.2.438-1.4.437-2.3.887-.25.125-.375.375T5 17.225V18h10v2Zm15.25 1L17 19.5v-3.675q-.875-.325-1.438-1.087Q15 13.975 15 13q0-1.25.875-2.125T18 10q1.25 0 2.125.875T21 13q0 .975-.562 1.738-.563.762-1.438 1.087L20 17l-1 1 1 1ZM18 14.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q18.625 11.5 18 11.5t-1.062.438Q16.5 12.375 16.5 13t.438 1.062q.437.438 1.062.438ZM11 8h-.012H11Zm0 7Z"></path>
              </svg>
            </div>
            <div>Use your passkey</div>
          </div>
          <div className="flex items-start gap-5 py-4 px-3 rounded-md cursor-pointer border-b hover:bg-blue-50">
            <div>
              <svg
                aria-hidden="true"
                fill="#0b57d0"
                focusable="false"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
              </svg>
            </div>
            <div>For security reasons, this may take 3-5 business days</div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TwoStepDevice;
