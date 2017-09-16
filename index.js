function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget() {
  const nestTarg = document.getElementById('nested').querySelectorAll('div.target');
  return nestTarg;
}
