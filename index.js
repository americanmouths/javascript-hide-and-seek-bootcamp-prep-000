function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget(nested, target) {
  const nestTarg = document.getElementById(nested).querySelectorAll(target);
  return nestTarg;
}
