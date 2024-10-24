import { Fragment, useState } from "react";
import { GlLogo } from "../assets/icons";
import classNames from "classnames";
import useClickOutSide from "../hooks/useClickOutSide";
import Footer from "../components/Footer";

const Signin = () => {
  const [hasFocus, sethasFocus] = useState(false);
  const [input, setInput] = useState("");
  const ref = useClickOutSide(() => sethasFocus(true))

  return (
    <Fragment>
      <div className="w-full max-md:h-screen md:w-3/5 md:min-h-96 bg-white rounded-2xl p-9 md:grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="max-md:mb-14">
          <GlLogo />
          <div className="text-5xl font-normal my-4">Sign in</div>
          <div className="my-5">to continue to Gmail</div>
        </div>
        <div className="md:mt-16 flex flex-col">
          <div ref={ref} className="w-full relative" onClick={() => sethasFocus(true)}>
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
              Email or phone
            </div>
          </div>
          <div className="text-sm text-[#0b57d0] font-medium mt-2 cursor-pointer">
            Forgot email?
          </div>
          <div className="text-base mt-8 text-[#191e1d]">
            <p>Not your computer? Use Guest mode to sign in privately.</p>
            <a
              href="https://support.google.com/chrome/answer/6130773?hl=en-US"
              target="_blank"
              className="text-[#0b57d0]"
              rel="noreferrer"
            >
              Learn more about using Guest mode
            </a>
          </div>
          <div className="flex gap-8 justify-end flex-grow place-items-end">
            <button className="text-[#0b57d0] font-medium hover:bg-black/5 py-2 px-4 rounded-full">
              Create account
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

export default Signin;
