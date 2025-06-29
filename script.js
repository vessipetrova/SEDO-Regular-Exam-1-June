const applyButton = document.querySelector('#apply-btn');
const colorInput = document.querySelector('#color-input');
const box = document.querySelector('#box');

applyButton.addEventListener('click', () => {
  const selectedColor = colorInput.value;
  box.style.backgroundColor = selectedColor;
});

document.getElementById('random-btn').addEventListener('click', function() {
  var color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  document.getElementById('box').style.backgroundColor = color;
});
