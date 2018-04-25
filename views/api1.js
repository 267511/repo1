function onClick() {
  if (inputIsEmpty()) {
    label.textContent = 'Error: input is empty.';
    return;
  }
  updateLabel();
}

function updateLabel() {
  var name = getName();
  label.textContent = 'Name: ' + name;
}

function inputIsEmpty() {
  if (getName() === '') {
    return true;
  } else {
    return false;
  }
}

function getName() {
  return inputs[0].value;
}

var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);

