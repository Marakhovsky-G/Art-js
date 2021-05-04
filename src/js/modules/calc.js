const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

  let sum = 0;

  const calcFunc = () => {
    function getPrice(elem) {
      try {
        return elem.value.match(/цена=\d{1,5}/gi).join().replace(/\D/gi, '');
      } catch(err) {return 0;}
    }
    function getRatio(elem) {
      try {
        return elem.value.match(/коэффицент=\d\.\d{1,3}/gi).join().replace(/коэффицент=/gi, '');
      } catch(err) {return 1;}
    }

    sum = Math.round((+getPrice(sizeBlock)) * (+getRatio(materialBlock)) + (+getPrice(optionsBlock)));

    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = 'Пожайлуста, выберите размер и материал картины.';
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = `${Math.round(sum * 0.7)} руб.`;
    } else {
      resultBlock.textContent = `${sum} руб.`;
    }
  };

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;