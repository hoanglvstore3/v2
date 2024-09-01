const rangeInput = document.getElementById('rangeInput');
        const statusItems = document.querySelectorAll('.status-item');
        const statusImg = document.querySelectorAll('.status-item img');

        
        function turnOnStatus(value){
            statusItems.forEach(item => {
                item.classList.add('status--none')
            });
            statusItems[value].classList.remove('status--none')
        }


        rangeInput.addEventListener('mouseup', function() {
        const value = parseInt(rangeInput.value);
        if(value < 10){
            rangeInput.value = 0;
            turnOnStatus(0);
            
        }
        else if(value >= 10 && value <30){
            rangeInput.value = 20
            turnOnStatus(1);
        }
        else if(value >= 30 && value < 50){
            rangeInput.value = 40
            turnOnStatus(2);
        }
        else if(value >= 50 && value < 70){
            rangeInput.value = 60
            turnOnStatus(3);
        }
        else if(value >= 70 ){
            rangeInput.value = 80
            turnOnStatus(4);
        }
        });
        
        function hasSpecialCharacter(str) {
            const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
            return specialCharacterPattern.test(str);
        }
        function hasNumber(str) {
    const numberPattern = /\d/; // Regular expression to match any digit (0-9)
    return numberPattern.test(str);
}
        function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


        const errorNameLabel = document.querySelector('.error-name');

        document.addEventListener('DOMContentLoaded', function() {
            const inputElement = document.getElementById('name_input');

            inputElement.addEventListener('input', function() {
            const inputValue = inputElement.value;

            if (hasSpecialCharacter(inputValue) || hasNumber(inputValue)) {
            errorNameLabel.classList.remove('hidden');
            } else {
            errorNameLabel.classList.add('hidden');
            }
    });

    const phoneInput = document.getElementById('phone_input');
    const emailInput = document.getElementById('email');
    const errorPhoneLabel = document.querySelector('.error-phone');
    const errorEmailLabel = document.querySelector('.error-email');

    phoneInput.addEventListener('input', function() {
        const phoneValue = phoneInput.value;
        if (isValidPhoneNumber(phoneValue)) {
            errorPhoneLabel.classList.add('hidden');
        } else {
            errorPhoneLabel.classList.remove('hidden');
        }
    });

    emailInput.addEventListener('input', function() {
        const emailValue = emailInput.value;
        if (isValidEmail(emailValue)) {
            errorEmailLabel.classList.add('hidden');
        } else {
            errorEmailLabel.classList.remove('hidden');
        }
    });
});