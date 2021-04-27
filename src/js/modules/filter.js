
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = document.querySelector('.all'),
        btnLover = document.querySelector('.lovers'),
        btnChef = document.querySelector('.chef'),
        btnGirl = document.querySelector('.girl'),
        btnGuy = document.querySelector('.guy'),
        btnGM = document.querySelector('.grandmother'),
        btnGF = document.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markGuy = wrapper.querySelectorAll('.guy'),
        markGM = wrapper.querySelectorAll('.grandmother'),
        markGF = wrapper.querySelectorAll('.granddad'),
        no = document.querySelector('.portfolio-no');


  const typeFilter = (markType) => {
    markAll.forEach(item => {
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

  btnAll.addEventListener('click', () => {
    typeFilter(markAll);
  });
  btnLover.addEventListener('click', () => {
    typeFilter(markLovers);
  });
  btnChef.addEventListener('click', () => {
    typeFilter(markChef);
  });
  btnGirl.addEventListener('click', () => {
    typeFilter(markGirl);
  });
  btnGuy.addEventListener('click', () => {
    typeFilter(markGuy);
  });
  btnGM.addEventListener('click', () => {
    typeFilter();
  });
  btnGF.addEventListener('click', () => {
    typeFilter();
  });


  menu.addEventListener('click', (evt) => {
    let target = evt.target;

    if (target && target.tagName == 'LI') {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  })




};

export default filter;