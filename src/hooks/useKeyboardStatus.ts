import { useState, useEffect } from 'react';

const useKeyboardStatus = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // useEffect(() => {
  //   const handleFocus = (event) => {
  //     const tagName = event.target.tagName.toLowerCase();
  //     if (tagName === 'input' || tagName === 'select' || tagName === 'textarea') {
  //       setIsKeyboardOpen(true);
  //     }
  //   };

  //   const handleBlur = (event) => {
  //     const tagName = event.target.tagName.toLowerCase();
  //     if (tagName === 'input' || tagName === 'select' || tagName === 'textarea') {
  //       setIsKeyboardOpen(false);
  //     }
  //   };

  //   document.addEventListener('focusin', handleFocus);
  //   document.addEventListener('focusout', handleBlur);

  //   return () => {
  //     document.removeEventListener('focusin', handleFocus);
  //     document.removeEventListener('focusout', handleBlur);
  //   };
  // }, []);

  return isKeyboardOpen;
};

export default useKeyboardStatus;
