function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget(div, nested, target) {
  const nestTarg = document.getElementById('nested').querySelectorAll(div.target);
  return nestTarg;
}
