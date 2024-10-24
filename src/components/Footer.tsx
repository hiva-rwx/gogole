import { countries } from "../data/counteries";

const Footer = () => {
  return (
    <div className="flex justify-between w-full md:w-3/5 px-4">
      <div>
        <select
          defaultValue={"English (United States)"}
          className="bg-transparent hover:bg-black/5 rounded-md outline-none focus:outline-blue-500 cursor-pointer text-sm py-1.5 px-2.5 text-[#1f1f1f]"
        >
          {countries.map((i, idx) => (
            <option key={idx}>{i}</option>
          ))}
        </select>
      </div>
      <div className="flex gap-4">
        <button className="text-xs text-[#1f1f1f] p-2 rounded-md hover:bg-black/5">Help</button>
        <button className="text-xs text-[#1f1f1f] p-2 rounded-md hover:bg-black/5">Privacy</button>
        <button className="text-xs text-[#1f1f1f] p-2 rounded-md hover:bg-black/5">Terms</button>
      </div>
    </div>
  );
};

export default Footer;
