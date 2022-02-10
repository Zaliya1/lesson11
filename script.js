document.addEventListener('DOMContentLoaded', function(){
const btn = document.getElementById('btn');
const square = document.getElementById('square');
const button = document.getElementById('e_btn');
const input = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');

const loggerColor = function() {
    let text = document.getElementById('text').value;
    square.style.backgroundColor = text;
    document.getElementById('text').value = "";
};
const loggerCircle = function() {
    const inputCircle = document.getElementById('range').value;
    circle.style.width = inputCircle + "%";
    circle.style.height = inputCircle + "%";
    span.textContent = inputCircle;
};

btn.addEventListener('click', loggerColor);
button.style.display = "none";
span.textContent = 50;
circle.style.width = span.textContent + "%";
circle.style.height = span.textContent + "%";
input.addEventListener('input', loggerCircle);
});





