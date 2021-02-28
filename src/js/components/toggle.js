const toggle = (element) => {
  const $el = document.querySelectorAll(element);
  const buttons = Array.from($el);

  buttons.forEach((btn) => {
    return btn.addEventListener('click', (e) => {
      const $btn = e.target;
      const $modal = document.querySelector(
        `[data-modal=${$btn.dataset.open}]`
      );

      return $modal.classList.toggle('is-active');
    });
  });
};

export default toggle;
