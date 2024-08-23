function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const bodyColor = document.querySelector('body');
  const colorBtn = document.querySelector('.change-color');
  const colorInfo = document.querySelector('.color');
  colorBtn.addEventListener('click', event => {
    bodyColor.style.backgroundColor = getRandomHexColor()
    colorInfo.textContent = bodyColor.style.backgroundColor
  });