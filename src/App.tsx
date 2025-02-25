import { useMemo, useState } from "react";
import Signin from "./pages/Signin";
import Password from "./pages/Password";
import TwoStepDevice from "./pages/TwoStepDevice";
import TwoStepChooseMethod from "./pages/TwoStepChooseMethod";
import TwoStepCodeInSetting from "./pages/TwoStepCodeInSetting";
import TwoStepAccountRecoveryNumber from "./pages/TwoStepAccountRecoveryNumber";
import TwoStepPhoneNumberSignin from "./pages/TwoStepPhoneNumberSignin";
import TwoStepVeificationCodeByPhoneNumber from "./pages/TwoStepVeificationCodeByPhoneNumber";
import "./assets/main.css";
const App = () => {
  const [page, setPage] = useState<keyof typeof pages>("two_step_veification_code_by_phone_number");
  const pages = useMemo(
    () => ({  
      signin: <Signin />,
      password: <Password />,
      two_step_device: <TwoStepDevice />,
      two_step_choose_method: <TwoStepChooseMethod />,
      two_step_code_in_setting: <TwoStepCodeInSetting />,
      two_step_account_recovery_number: <TwoStepAccountRecoveryNumber />,
      two_step_phone_number_signin: <TwoStepPhoneNumberSignin />,
      two_step_veification_code_by_phone_number: <TwoStepVeificationCodeByPhoneNumber />,
    }),
    []
  );
  return (
    <div className="w-full h-screen bg-[#f0f4f9] flex justify-center items-center flex-col gap-2">
      {pages[page]}
    </div>
  );
};

export default App;
