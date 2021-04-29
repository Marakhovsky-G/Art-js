
const checkTextInputs = (selector) => {
  const textInputs = document.querySelectorAll(selector);

  textInputs.forEach(item => {
    item.addEventListener('keypress', function(evt) {
      if (evt.key.match(/[^а-яё 0-9]/ig)) {
        evt.preventDefault();
      }
    });

    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^а-яё 0-9]/ig, '');
    });
  });
};

export default checkTextInputs;
