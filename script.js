const DomElement = function (selector = '#small', height = '100', width = '100', bg = 'gray', fontSize = '20') {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.elem = null;
};

DomElement.prototype.createElem = function () {
  if (this.selector.startsWith('.')) {
    this.elem = document.createElement('div');
    this.elem.className = `${this.selector.substring(1)}`;
  } else if (this.selector.startsWith('#')) {
    this.elem = document.createElement('p');
    this.elem.id = `${this.selector.substring(1)}`;
  }

  this.elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
  this.elem.textContent = 'Здрасьте!';
  document.querySelector('body').append(this.elem);
};

let newDomClass = new DomElement('.square', 100, 100, 'pink');
newDomClass.createElem();
newDomClass.elem.style.position = 'absolute';

console.log(newDomClass);
