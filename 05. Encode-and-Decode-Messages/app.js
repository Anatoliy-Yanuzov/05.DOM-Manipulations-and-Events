function encodeAndDecodeMessages() {

    document
        .querySelector('#main>div:nth-child(1)>textarea')
        .setAttribute('id', 'messageTextEncode');
    document
        .querySelector('#main>div:nth-child(1)>button')
        .setAttribute('id', 'messageEncodeButton');

    document
        .querySelector('#main>div:nth-child(2)>textarea')
        .setAttribute('id', 'messageTextDecode');
    document
        .querySelector('#main>div:nth-child(2)>button')
        .setAttribute('id', 'messageDecodeButton');

    let messageTextEncodeElement = document.querySelector('#messageTextEncode');
    let messageTextDecodeElement = document.querySelector('#messageTextDecode');
    let buttonEncodeElement = document.querySelector('#messageEncodeButton');
    let buttonDecodeElement = document.querySelector('#messageDecodeButton');

    buttonEncodeElement.addEventListener('click', (e) => {
        let arr = [];
        let arrEncode = [];
        for (const i in messageTextEncodeElement.value) {
            arr.push(messageTextEncodeElement.value.charCodeAt(i) + 1);

        }
        for (const ascii of arr) {
            arrEncode.push(String.fromCharCode(ascii));
        }
        messageTextDecodeElement.value = arrEncode.join('');
        messageTextEncodeElement.value = '';
    });

    buttonDecodeElement.addEventListener('click', (e) => {
        messageTextDecodeElement = document.querySelector('#messageTextDecode');
        let arrayEncode = [];
        let arrayDecode = [];

        for (const i in messageTextDecodeElement.value) {
            arrayEncode.push(messageTextDecodeElement.value.charCodeAt(i) - 1);

        }
        for (const ascii of arrayEncode) {
            arrayDecode.push(String.fromCharCode(ascii));
        }
        messageTextDecodeElement.value = arrayDecode.join('');
    });
}