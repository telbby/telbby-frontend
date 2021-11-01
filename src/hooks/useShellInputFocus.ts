import { MutableRefObject, ReactElement, useEffect } from 'react';

const useShellInputFocus = (
  fieldsetRef: MutableRefObject<HTMLFieldSetElement>,
  shellLines: ReactElement[],
): { handleFocus: () => void } => {
  const handleFocus = () => {
    const lines = fieldsetRef.current.querySelectorAll('label');

    if (lines.length === 0) return;
    lines[lines.length - 1].focus();
  };

  useEffect(() => handleFocus(), [shellLines]);

  return { handleFocus };
};

export default useShellInputFocus;
