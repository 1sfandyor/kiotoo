import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void // Explicitly define the callback type
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => { // Changed from 'any' to 'MouseEvent | TouchEvent'
      if (!ref.current || ref.current.contains(event.target as Node)) { // Added type assertion
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
