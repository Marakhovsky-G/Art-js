
const modals = () => {

  function calcScroll() {  // вычисление ширины скрола
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  function modalOpen(modalSelector) {
    document.querySelector(modalSelector).style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${calcScroll()}px`;
  }

  function modalClose(modalSelector) {
    document.querySelector(modalSelector).style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
  }

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]');

    trigger.forEach(item => {
      item.addEventListener('click', (evt) => {
        if (evt.target) {
          evt.preventDefault();
        }

        windows.forEach(item => {
          item.style.display = 'none';
        });

        modalOpen(modalSelector);
      });
    });

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modalClose(modalSelector);
    });

    modal.addEventListener('click', (evt) => {
      if (evt.target === modal && closeClickOverlay) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modalClose(modalSelector);
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });

      if (!display) {
        modalOpen(selector);
      }
    }, time);
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

  showModalByTime('.popup-consultation', 60000);
};

export default modals;

