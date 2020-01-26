import { useEffect } from 'react';

function useAutoFocus(elementRef) {
  useEffect(
    function() {
      if (
        elementRef?.current &&
        typeof elementRef.current.focus === 'function'
      ) {
        elementRef.current.focus();
      }
    },
    [elementRef]
  );
}

export default useAutoFocus;
