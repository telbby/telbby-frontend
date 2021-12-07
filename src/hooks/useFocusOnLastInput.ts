import { MutableRefObject, useRef } from 'react';

const useFocusOnLastInput = <
  T extends HTMLFormElement | HTMLFieldSetElement,
>(): [MutableRefObject<T>, VoidFunction] => {
  const ref = useRef<T>();

  const focusOnLastInput = () => {
    if (!ref.current) return;

    const inputs = ref.current.querySelectorAll('input');
    if (inputs.length === 0) return;
    inputs[inputs.length - 1].focus();
  };

  return [ref, focusOnLastInput];
};

export default useFocusOnLastInput;
