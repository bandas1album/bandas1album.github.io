import smoothscroll from 'smoothscroll-polyfill';

const sidebar = () => {
  smoothscroll.polyfill();
  const $el = document.querySelectorAll('[data-sidebar]');
  const $body = document.querySelector('body');
  const $content = document.querySelector('.sidebar-content');
  const $list = document.querySelectorAll('[data-menu]');
  const $backdrop = document.querySelector('.sidebar-backdrop');

  const buttons = Array.from($el);

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
      $content.scroll({ top: 0, left: 0, behavior: 'smooth' });

      $selected.style.display = 'block';
      $btn.classList.add('active');
      $content.classList.add('active');
      $body.classList.add('overflow');
      $backdrop.classList.add('active');
    });
  });
};

export default sidebar;
