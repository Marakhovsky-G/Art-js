
const modals = () => {
  let btnPressed = false;

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

  function bindModal(triggerSelector, modalSelector, closeSelector, destroyTrigger = false) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]');

    trigger.forEach(item => {
      item.addEventListener('click', (evt) => {
        if (evt.target) {
          evt.preventDefault();
        }

        btnPressed = true;

        if (destroyTrigger) {
          item.remove();
        }

        windows.forEach(item => {
          item.style.display = 'none';
          item. classList.add('animated', 'fadeIn');
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
      if (evt.target === modal) {
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

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  showModalByTime('.popup-consultation', 60000);
};

export default modals;

