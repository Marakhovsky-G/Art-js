
const pictureSize = (imgSelector) => {
  const blocks = document.querySelectorAll(imgSelector);

  function showPic (block) {
    const pic = block.querySelector('img');
    pic.src = pic.src.slice(0, -4) + '-1' + pic.src.slice(-4, pic.src.length);
    pic.classList.add('animated', 'fadeIn');
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  }

  function hidePic (block) {
    const pic = block.querySelector('img');
    pic.src = pic.src.slice(0, -6) + pic.src.slice(-4, pic.src.length);
    pic.classList.remove('animated', 'fadeIn');
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  }

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showPic(block);
    });
    block.addEventListener('mouseout', () => {
      hidePic(block);
    });
  });

};

export default pictureSize;