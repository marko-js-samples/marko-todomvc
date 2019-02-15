exports.animateOut = (event, node) => {
  event.preventDefault();
  node.classList.add('animate');
  var height = node.offsetHeight;
  node.style.maxHeight = height + 'px';

  setTimeout(() => {
    node.style.maxHeight = '0px';
    node.style.opacity = 0;

    setTimeout(() => {
        event.detach();
    }, 250);
  }, 0);
};

exports.animateIn = (event, node) => {
  var clone = node.cloneNode(true);
  clone.style.position = 'absolute';
  clone.style.top = '-200px';
  clone.style.left = '-200px';
  node.parentNode.appendChild(clone);
  var height = clone.offsetHeight;

  clone.parentNode.removeChild(clone);

  node.classList.remove('animate');
  node.style.maxHeight = '0px';
  node.style.opacity = 0;

  setTimeout(() => {
    node.classList.add('animate');
    node.style.maxHeight = height + 'px';
    node.style.opacity = 1;
  }, 10);
}