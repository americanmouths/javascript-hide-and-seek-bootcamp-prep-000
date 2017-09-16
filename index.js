function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget(nested, target) {
  const nestTarg = document.getElementById('nested').querySelector('div.target');
  return nestTarg;
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list');

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(i + 1).toString()
  }
}

function deepestChild() {
  const parentNode = document.getElementById('grand-node');
  const childNode = parentNode.querySelectorAll('div');
  for (var i = 0; i < childNode.length; i++) {
    if (childNode[i].children.length === 0) {
      return childNode[i];
    }
  }
}
