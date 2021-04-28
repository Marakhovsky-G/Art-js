
const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefault, false);
    });
  });

  function preventDefault(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  function highlight(item) {
    item.closest('.file_upload').style.border = '5px solid red';
    item.closest('.file_upload').style.borderRadius = '50px';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0,0.7)';
  }

  function unhighlight(item) {
    item.closest('.file_upload').style.border = 'none';
    if (item.closest('.calc-form')) {
      item.closest('.file_upload').style.backgroundColor = '#ffffff';
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });

  ['drop', 'dragleave'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });

  fileInputs.forEach(input => {
    input.addEventListener('drop', (evt) => {
      input.files = evt.dataTransfer.files;
      let dots;
      const fileName =  input.files[0].name.split('.');

      fileName[0].length > 10 ? dots = '...' : dots = '.';
      const name = fileName[0].substring(0, 10) + dots + fileName[1];
      input.previousElementSibling.textContent = name;
    });
  });

};

export default drop;