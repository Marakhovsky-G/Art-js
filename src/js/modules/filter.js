
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        no = document.querySelector('.portfolio-no');
  class Filter {
    constructor(name, noClass) {
      this.name = name;
      this.noClass = noClass;
    }
    btn() {
      return document.querySelector(this.name);
    }
    mark() {
      if (this.noClass) {
        return '';
      } else {
        return wrapper.querySelectorAll(this.name);
      }
    }
  }

  const classArr = [
    new Filter('.all'),
    new Filter('.lovers'),
    new Filter('.chef'),
    new Filter('.girl'),
    new Filter('.guy'),
    new Filter('.grandmother', true),
    new Filter('.granddad', true)
  ];


  const typeFilter = (markType) => {
    classArr[0].mark().forEach(item => {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach(item => {
        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };

  for (let i = 0; i < classArr.length; i++) {
    classArr[i].btn().addEventListener('click', () => {
      typeFilter(classArr[i].mark());
    });
  }

  menu.addEventListener('click', (evt) => {
    let target = evt.target;

    if (target && target.tagName == 'LI') {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });

};

export default filter;