function attachEventsListeners() {

    let daysElement = document.querySelector('#days');
    let hoursElement = document.querySelector('#hours');
    let minutesElement = document.querySelector('#minutes');
    let secondsElement = document.querySelector('#seconds');

    let buttonDays = document.querySelector('#daysBtn');

    buttonDays.addEventListener('click', (e) => {
        hoursElement.value = Number(daysElement.value) * 24;
        minutesElement.value = Number(hoursElement.value) * 60;
        secondsElement.value = Number(minutesElement.value) * 60;
    })

    let buttonHours = document.querySelector('#hoursBtn');

    buttonHours.addEventListener('click', (e) => {
        daysElement.value = (Number(hoursElement.value) / 24).toFixed(1);
        minutesElement.value = Number(hoursElement.value) * 60;
        secondsElement.value = Number(minutesElement.value) * 60;
    })

    let buttonMinutes = document.querySelector('#minutesBtn');

    buttonMinutes.addEventListener('click', (e) => {
        secondsElement.value = Number(minutesElement.value) * 60;
        hoursElement.value = Number(minutesElement.value) / 60;
        daysElement.value = (Number(hoursElement.value) / 24).toFixed(1);
    })

    let buttonSeconds = document.querySelector('#secondsBtn');

    buttonSeconds.addEventListener('click', (e) => {
        minutesElement.value = Number(secondsElement.value) / 60;
        hoursElement.value = Number(minutesElement.value) / 60;
        daysElement.value = (Number(hoursElement.value) / 24).toFixed(1);
    })
}
