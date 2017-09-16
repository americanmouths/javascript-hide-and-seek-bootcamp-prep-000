function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget(div, target) {
  const nestTarg = document.getElementById('div').querySelector(div.target);
  return nestTarg;
}
