const body = document.querySelector('body');
const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createElem = function() {
        let domElem;
        if (this.selector.includes('.')) {
            domElem = document.createElement('div');
            domElem.classList.add(this.selector.replace('.', ''));
        } else if (this.selector.includes('#')) {
            domElem = document.createElement('div');
            domElem.id = this.selector.replace('#', '');
        } else {
            domElem = document.createElement(this.selector);
        }
        domElem.style.height = this.height;
        domElem.style.width = this.width;
        domElem.style.background = this.bg;
        domElem.style.fontSize = this.fontSize;
        domElem.textContent = "Как дела?";
        body.append(domElem);
        };
};
const elem = new DomElement('#div', '30px', '100px', 'green', '20px');
elem.createElem();