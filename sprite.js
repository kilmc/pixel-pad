const setColor = (x) => {
  x.style.backgroundColor = '#00ff00';
}

const grid = (size) => {
  let n = 0;
  let fullGridSize = Math.pow(size, 2);
  let row = size + 1;
  let yCoordinate = 1;
  let xCoordinate = 0;
  let allPixels = document.createDocumentFragment();

  while (n < fullGridSize) {
    n++
    if (n == row) {
      yCoordinate++
      row = row + size;
    }

    if (xCoordinate < size) {
      xCoordinate++
    } else {
      xCoordinate = 1;
    }

    let pixel = document.createElement('div');
    pixel.id = 'x' + xCoordinate + 'y' + yCoordinate;
    pixel.className = 'pixel';
    pixel.style.width = 100/size + '%';
    pixel.onclick = function() { setColor(this) };
    allPixels.appendChild(pixel);
  }
  return allPixels;
};

document.getElementById('canvas').appendChild(grid(64));
