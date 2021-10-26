
class DomElement {
  constructor(selector = '#small', height = '100', width = '100', bg = 'gray', fontSize = '70') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.elem = null;
  }

  createElem() {
    if (this.selector.startsWith('.')) {
      this.elem = document.createElement('div');
      this.elem.className = `${this.selector.substring(1)}`;
    } else if (this.selector.startsWith('#')) {
      this.elem = document.createElement('p');
      this.elem.id = `${this.selector.substring(1)}`;
    }

    this.elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
    this.elem.textContent = '🚜';
    document.querySelector('body').append(this.elem);
  }
}

class DivElement extends DomElement {
  constructor(...options) {
    super(...options);
    this.position = 'absolute';
    this.coordinateTop = 0;
    this.coordinateLeft = 0;
  }

  createElem() {
    super.createElem();
    this.elem.style.position = this.position;
  }

  moveUp() {
    this.coordinateTop -= 10;
    this.changePosition();
  }

  moveDown() {
    this.coordinateTop += 10;
    this.changePosition();
  }

  moveLeft() {
    this.coordinateLeft -= 10;
    this.changePosition();
  }

  moveRight() {
    this.coordinateLeft += 10;
    this.changePosition();
  }

  changePosition() {
    this.elem.style.top = this.coordinateTop + 'px';
    this.elem.style.left = this.coordinateLeft + 'px';
  }
}

let newDomClass = new DivElement('square', 100, 100, 'grey');
newDomClass.createElem();


window.addEventListener("keydown", (e) => {

  switch (e.key) {
    case 'ArrowDown':
      newDomClass.moveDown();
      break;
    case 'ArrowUp':
      newDomClass.moveUp();
      break;
    case 'ArrowRight':
      newDomClass.moveRight();
      break;
    case 'ArrowLeft':
      newDomClass.moveLeft();
      break;
  }
});