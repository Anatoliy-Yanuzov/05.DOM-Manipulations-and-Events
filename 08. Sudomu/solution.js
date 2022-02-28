function solve() {

    let inputElements = document.querySelectorAll('input');
    let checkButtonElements = document.querySelectorAll('button')[0];
    let clearButtonElements = document.querySelectorAll('button')[1];
    let tableElement = document.querySelector('table');
    let checkElements = document.querySelectorAll('#check p')[0];

    checkButtonElements.style.cursor = 'pointer';
    clearButtonElements.style.cursor = 'pointer';

    clearButtonElements.addEventListener('click', (e) => {

        [...inputElements].forEach(input => (input.value = ''));
        tableElement.style.border = 'none';
        checkElements.textContent = '';

    });
    checkButtonElements.addEventListener('click', (f) => {
        let matrix = [
            [inputElements[0].value, inputElements[1].value, inputElements[2].value],
            [inputElements[3].value, inputElements[4].value, inputElements[5].value],
            [inputElements[6].value, inputElements[7].value, inputElements[8].value]
        ];

        isSudomu = true;

        for (let i in matrix) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isSudomu = false;
                break;
            }
        }
        if (isSudomu) {
            tableElement.style.border = '2px solid green';
            checkElements.style.color = 'green';
            checkElements.textContent = 'You solve it! Congratulations!';
        } else {
            tableElement.style.border = '2px solid red';
            checkElements.style.color = 'red';
            checkElements.textContent = 'NOP! You are not done yet...';
        }
    });

}