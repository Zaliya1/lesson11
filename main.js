document.addEventListener('DOMContentLoaded', function(){
    const DomElement = function(selector, height, width, bg, fontSize, text) {
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
                domElem = document.createElement('p');
                domElem.id = this.selector.replace('#', '');
            } else {
                domElem = document.createElement(this.selector);
            }
            domElem.style.height = this.height;
            domElem.style.width = this.width;
            domElem.style.background = this.bg;
            domElem.style.fontSize = this.fontSize;
            domElem.textContent = text;
            domElem.style.position = 'absolute';
            domElem.style.top = '200px';
            domElem.style.left = '200px';
            document.body.append(domElem);
            };
    };
    const elem = new DomElement('.div', '100px', '100px', 'green', '20px', "Как дела?");
    elem.createElem();
    document.addEventListener('keydown', function(event){
        const element = document.body.querySelector('p, div');
        switch (event.key) {
            case 'ArrowRight':
                console.log('Right');
                element.style.left = +element.style.left.replace("px", "") + 100 + "px";
                break;
            case 'ArrowLeft':
                console.log('Left');
                // element.style.left = -"100px";
                element.style.left = +element.style.left.replace("px", "") - 100 + "px";
                break;
            case 'ArrowUp':
                console.log('Up');
                element.style.top = +element.style.top.replace("px", "") - 100 + "px";
                // element.style.top = "100px";
                break;
            case 'ArrowDown':
                console.log('Down');
                element.style.top = +element.style.top.replace("px", "") + 100 + "px";
                break;
        }
        // console.log(event.key);
        // console.log(event);
    });
});
