// import { RefObject, useRef } from "react";

// type Handler = (event: MouseEvent) => void;

// const useClickOutSide = <T,>(handler: Handler): RefObject<T> => {
//   const ref = useRef<any>(null);
//   document.addEventListener("click", (e) => {
//     const el = ref.current;
//     if (!el || el.contains(e.target as Node)) {
//       return;
//     }
//     handler(e);
//   });
//   return ref;
// };
// export default useClickOutSide;

import { useEffect, useRef } from "react";

export const useClickOutSide = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export default useClickOutSide;
