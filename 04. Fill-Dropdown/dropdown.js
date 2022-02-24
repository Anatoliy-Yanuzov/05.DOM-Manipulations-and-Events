function addItem() {

    let textElement = document.querySelector('#newItemText');
    let valueElement = document.querySelector('#newItemValue');

    let createElementOption = document.createElement('option');
    createElementOption.textContent = textElement.value + ' ' + valueElement.value;

    let menuElement = document.querySelector('#menu');
    menuElement.appendChild(createElementOption);

    textElement.value = '';
    valueElement.value = '';
}