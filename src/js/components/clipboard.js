import Clipboard from 'clipboard';

const clip = (el) => {
  const clipboard = new Clipboard(el);

  clipboard.on('success', (e) => {
    const $el = e.trigger;

    $el.classList.add('copied');

    setTimeout(() => {
      $el.classList.remove('copied');
    }, 2000);
  });
};

export default clip;
