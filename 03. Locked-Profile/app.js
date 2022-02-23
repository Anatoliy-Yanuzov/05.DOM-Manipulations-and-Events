function lockedProfile() {

    let allButtonsElements = document.querySelectorAll('button');

    for (const button of allButtonsElements) {
        button.addEventListener('click', (e) => {
            let btn = e.target;
            let currentUser = btn.parentNode;
            let moreInformation = currentUser.getElementsByTagName('div')[0];
            let lockStatus = currentUser.querySelector('input[type="radio"]:checked').value;

            if (lockStatus === 'unlock') {
                if (btn.textContent === 'Show more') {
                    moreInformation.style.display = 'inline-block';
                    btn.textContent = 'Hide it';
                } else if (btn.textContent == 'Hide it') {
                    moreInformation.style.display = 'none';
                    btn.textContent = 'Show more';
                }
            }
        });
    }
}