function addItem() {
    let textElement = document.querySelector('#newItemText');
    let valueElement = document.querySelector('#newItemValue');

    let createElementOption = document.createElement('option');
    let menuElement = document.querySelector('#menu');
    menuElement.appendChild(createElementOption);
    let optionElement = document.querySelector('#addTextAndValue');
    optionElement.textContent = 'Hello'
}