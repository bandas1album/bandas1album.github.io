const sidebar = () => {
  const $el = document.querySelectorAll('[data-sidebar]');
  const $body = document.querySelector('body');
  const buttons = Array.from($el);
  const $content = document.querySelector('.sidebar-content');
  const $list = document.querySelectorAll('[data-menu]');
  const $backdrop = document.querySelector('.sidebar-backdrop');

  $backdrop.addEventListener('click', (e) => {
    $backdrop.classList.remove('active');
    $body.classList.remove('overflow');
    $content.classList.remove('active');
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });
    $list.forEach((list) => {
      list.style.display = 'none';
    });
  });

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
      $body.classList.add('overflow');
      $backdrop.classList.add('active');

      setTimeout(() => {
        $content.classList.add('active');
      }, 300);
    });
  });
};

export default sidebar;
