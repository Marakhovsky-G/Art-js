import {getData} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
  const button = document.querySelector(trigger);

  button.addEventListener('click', function() {
    getData('assets/Db.json')
      .then(result => result.styles)
      .then(result => createCards(result))
      .catch(error => console.log(error));

    this.remove();
  });

  function createCards(response) {
    response.forEach(({src, title, link}) => {
      let card = document.createElement('div');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
      card.innerHTML = `
        <div class=styles-block>
          <img src=${src} alt>
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
        </div>
      `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};

export default showMoreStyles;
