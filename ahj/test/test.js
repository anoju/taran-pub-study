// get random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// add comma
function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

//remove comma
function removeCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

//get velocity
function getVelocity(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

// get swipe direction
function getSwipeDirection(x1, y1, x2, y2) {
  if (Math.abs(x1 - x2) > Math.abs(y1 - y2)) {
    if (x1 - x2 > 0) {
      return 'left';
    } else {
      return 'right';
    }
  } else {
    if (y1 - y2 > 0) {
      return 'up';
    } else {
      return 'down';
    }
  }
}

// element get style
const getStyle = function (element, styleName) {
  if (element.currentStyle) {
    return element.currentStyle[styleName];
  } else if (window.getComputedStyle) {
    return document.defaultView.getComputedStyle(element, null).getPropertyValue(styleName);
  }
};
