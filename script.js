// Внутрь созданного блока записывать любой текст. Метод записи может быть любым.
let area = document.getElementById('area');

const DomElement = function (selector = '#small', height = '100', width = '100', bg = 'gray', fontSize = '20') {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElem = function () {
  let elem;

  if (this.selector.startsWith('.')) {
    elem = document.createElement('div');
    elem.className = `${this.selector.substring(1)}`;
  } else if (this.selector.startsWith('#')) {
    elem = document.createElement('p');
    elem.id = `${this.selector.substring(1)}`;
  }
  elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
  elem.textContent = 'Здрасьте!';
  area.append(elem);
};

let newDomClass = new DomElement('.square', 500, 500, 'red', 50);
newDomClass.createElem();

let newDomId = new DomElement();
newDomId.createElem();

console.log(newDomClass);
console.log(newDomId);