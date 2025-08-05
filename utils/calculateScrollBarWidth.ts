export const calculateScrollBarWidth = () => {
  if (typeof window === "undefined") return 0;

  return window.innerWidth - document.documentElement.clientWidth;
};
