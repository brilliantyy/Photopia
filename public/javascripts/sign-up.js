var emailTag = document.querySelector('#userEmail'),
    pswTag = document.querySelector('#userPassword'),
    subBtn = document.querySelector('#submit'),
    logBtn = document.querySelector('#login');

var validateEmail = function (email) {
    var regExp = /\S+@\S+\.\S+/;
    if (email.length > 0) {
        return regExp.test(email);
    }
    return false;
};

var validatePassword = function (password) {
    var regExp = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;
    if (password.length > 0) {
        return regExp.test(password);
    }
    return false;
};

var checkForm = function () {
    return (validateEmail() && validatePassword()) ? true : false;
};

var keyUp = function (element) {
    var content = element.value.trim();

    if (element === emailTag) {
        if (!validateEmail(content) && !element.classList.contains('hasError')) {
            element.classList.add('hasError');
        } else if (validateEmail(content)) {
            element.classList.remove('hasError');
        }
    } else if (element === pswTag) {
        if (!validatePassword(content) && !element.classList.contains('hasError')) {
            element.classList.add('hasError');
        } else if (validatePassword(content)) {
            element.classList.remove('hasError');
        }
    }
};

addHandler(emailTag, 'keyup', function () {
    keyUp(emailTag);
});
addHandler(pswTag, 'keyup', function () {
    keyUp(pswTag)
});
addHandler(subBtn, 'click', function() {
    return checkForm();
});


