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

function deepestChild(array,criteriaFn) {
  const lis = document.getElementById('grand-node').querySelectorAll('div');

  for (var i = 0; i < lis.length; i++) {
    if (criteriaFn(array[i])) {
      return array[i]
    }
  }
}
