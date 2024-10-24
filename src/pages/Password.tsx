import { Fragment, useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import { ArrowDown, GlLogo, Man } from "../assets/icons";
import classNames from "classnames";
import Footer from "../components/Footer";

const Password = () => {
  const [hasFocus, sethasFocus] = useState(false);
  const [input, setInput] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const ref = useClickOutSide(() => sethasFocus(false));
  return (
    <Fragment>
      <div className="w-full max-md:h-screen md:w-3/5 md:min-h-96 bg-white rounded-2xl p-9 md:grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="max-md:mb-14">
          <GlLogo />
          <div className="text-5xl font-normal my-4">Welcome</div>
          <div className="my-5 flex border-2 px-2 py-0.5 w-fit cursor-pointer hover:bg-black/5 rounded-full items-center gap-4">
            <Man />
            <p>test@gmail.com</p>
            <ArrowDown />
          </div>
        </div>
        <div className="md:mt-16 flex flex-col">
          <div ref={ref} className="w-full relative" onClick={() => sethasFocus(true)}>
            <input
              type={isShowPassword ? "text" : "password"}
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
              Enter your password
            </div>
          </div>
          <div>
            <div className="flex items-center gap-6 my-6">
              <input
                value={+isShowPassword}
                onChange={() => setIsShowPassword(!isShowPassword)}
                type="checkbox"
                id="show-password"
                className="w-4 h-4"
              />
              <label htmlFor="show-password" className="cursor-pointer">
                Show password
              </label>
            </div>
          </div>
          <div className="flex gap-8 justify-end mt-10">
            <button className="text-[#0b57d0] font-medium hover:bg-black/5 py-2 px-4 rounded-full">
              Forgot account
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

export default Password;
