// Initial: read text input and apply to box
document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = color;
});

document.getElementById('random-btn').addEventListener('click', function() {
  var color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  document.getElementById('box').style.backgroundColor = color;
});
