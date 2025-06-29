const applyButton = document.querySelector('#apply-btn');
const colorInput = document.querySelector('#color-input');
const box = document.querySelector('#box');

applyButton.addEventListener('click', () => {
  const selectedColor = colorInput.value;
  box.style.backgroundColor = selectedColor;
});
