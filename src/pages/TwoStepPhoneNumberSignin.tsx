import { Fragment } from "react";
import Footer from "../components/Footer";
import { ArrowDown, GlLogo, Man } from "../assets/icons";

const TwoStepPhoneNumberSignin = () => {
  return (
    <Fragment>
      <div className="w-full max-md:h-screen md:w-3/5 md:min-h-96 bg-white rounded-2xl p-9 md:grid grid-cols-1 lg:grid-cols-2 gap-9">
        <div className="max-md:mb-14 flex flex-col">
          <GlLogo />
          <div className="text-5xl font-normal my-4">Use a phone number from your account</div>
          <div className="my-2">
            We will send a verification code to a phone number on your account.
          </div>
          <div className="my-2">Standard rates apply.</div>
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
                <path d="M20,2 L4,2 C2.9,2 2.01,2.9 2.01,4 L2,22 L6,18 L20,18 C21.1,18 22,17.1 22,16 L22,4 C22,2.9 21.1,2 20,2 Z M20,16 L4,16 L4,4 L20,4 L20,16 Z M6,12 L14,12 L14,14 L6,14 L6,12 Z M6,9 L18,9 L18,11 L6,11 L6,9 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z"></path>
              </svg>
            </div>
            <div>
              {"*** *** **50"}
              <div className="text-sm text-zinc-700">2-Step Verification phone</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TwoStepPhoneNumberSignin;
