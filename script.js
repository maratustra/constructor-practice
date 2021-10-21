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
  if (this.selector.startsWith('.')) {
    let newDiv = document.createElement('div');
    newDiv.className = `${this.selector.substring(1)}`;
    newDiv.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
    newDiv.textContent = 'Привет, новый класс!';
    area.append(newDiv);
  } else if (this.selector.startsWith('#')) {
    let newParag = document.createElement('p');
    newParag.id = `${this.selector.substring(1)}`;
    newParag.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
    newParag.textContent = 'Здорово, новый айди!';
    area.append(newParag);
  }
};

let newDomClass = new DomElement('.square', 500, 500, 'red', 50);
newDomClass.createElem();

let newDomId = new DomElement();
newDomId.createElem();

console.log(newDomClass);
console.log(newDomId);