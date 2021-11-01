import { MutableRefObject, ReactElement, useCallback, useEffect } from 'react';

/**
 * shellLines가 업데이트 될때마다
 * fieldsetRef에 있는 input 요소들을 탐색하여
 * 가장 마지막 input 요소에 focus를 줍니다.
 */
const useShellInputFocus = (
  fieldsetRef: MutableRefObject<HTMLFieldSetElement>,
  shellLines: ReactElement[],
): { setFocus: () => void } => {
  const setFocus = useCallback(() => {
    const lines = fieldsetRef.current.querySelectorAll('input');

    if (lines.length === 0) return;
    lines[lines.length - 1].focus();
  }, []);

  useEffect(setFocus, [shellLines]);

  return { setFocus };
};

export default useShellInputFocus;
