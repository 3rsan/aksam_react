export const getDeviceInfo = () => {
  const ua = navigator.userAgent;

  const isMobile =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua);

  let channel = "web";
  if (isTablet) channel = "tablet-web";
  else if (isMobile) channel = "mobile-web";

  return {
    channel,
    userAgent: ua,
  };
};
