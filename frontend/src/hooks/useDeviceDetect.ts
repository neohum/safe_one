import { useState, useEffect } from 'react';

export function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobile = /iPhone|Android/i.test(userAgent);
    setIsMobile(mobile);
  }, []);

  return { isMobile };
}

