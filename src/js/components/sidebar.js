const sidebar = () => {
  const $el = document.querySelectorAll('[data-sidebar]');
  const buttons = Array.from($el);
  const $content = document.querySelector('.sidebar-content');

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const $btn = e.target;
      buttons.forEach((btn) => {
        btn.classList.remove('active');
      });

      $btn.classList.add('active');
      $content.classList.add('active');
    });
  });
};

export default sidebar;
