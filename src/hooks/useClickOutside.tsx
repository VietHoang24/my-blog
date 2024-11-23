import { useEffect, useRef } from "react";

export function useClickOutside(ref:any, onClickOutside:any) {
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);

  return ref;
}
