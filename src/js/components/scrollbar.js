import PerfectScrollbar from 'perfect-scrollbar';
const scrollbar = () => {
  const ps = new PerfectScrollbar('[data-scrollbar]');
  window.ps = ps;
};

export default scrollbar;
