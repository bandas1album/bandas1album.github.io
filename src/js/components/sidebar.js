const sidebar = () => {
  const $el = document.querySelectorAll('[data-sidebar]');
  const buttons = Array.from($el);
  const $content = document.querySelector('.sidebar-content');
  const $list = document.querySelectorAll('[data-menu]');

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const $btn = e.target;
      const $selected = document.querySelector(
        `[data-menu=${$btn.dataset.sidebar}]`
      );
      buttons.forEach((btn) => {
        btn.classList.remove('active');
      });
      $list.forEach((list) => {
        list.style.display = 'none';
      });

      $selected.style.display = 'block';

      $btn.classList.add('active');
      $content.classList.remove('active');

      setTimeout(() => {
        $content.classList.add('active');
      }, 300);
    });
  });
};

export default sidebar;
