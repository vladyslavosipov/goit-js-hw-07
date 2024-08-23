function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const divBox = document.querySelector('#boxes');
  let inputField = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  // function createBoxes(amount) {
  //  let startSize = 30;
  //  const incraseSize = 10;
  //   for (let i = 0; i < amount; i++) {
  //     const newBox = document.createElement('div');
  //     const size = startSize + i * incraseSize;
  //     newBox.style.height = `${size}px`;
  //     newBox.style.width = `${size}px`;
  //     newBox.style.backgroundColor = getRandomHexColor();
  //     divBox.append(newBox);
  //   }
  // };
  function createBoxes(amount) {
    let startSize = 30;
    const increaseSize = 10;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const newBox = document.createElement('div');
      const size = startSize + i * increaseSize;
      newBox.style.height = `${size}px`;
      newBox.style.width = `${size}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(newBox);
    }
    divBox.appendChild(fragment);
  };
  
  function destroyBoxes() {
    divBox.innerHTML = '';
  };
  createBtn.addEventListener('click', () => {
    const amount = +inputField.value;
    if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      inputField.value = '';
     }
  });
  destroyBtn.addEventListener('click', destroyBoxes);