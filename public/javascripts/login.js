/*************** Login Page ****************/

var loginUserName = document.querySelector('#username'),
    loginUserPwd = document.querySelector('#password'),
    logBtn = document.querySelector('#login-button');

var validateEmail = function(email) {
    var regExp = /\S+@\S+\.\S+/;
    if (email.length > 0) {
        return regExp.test(email);
    }
    return false;
};

var loginKeyUp = function(element) {
    var content = element.value.trim();

    if (element === loginUserName) {
        if (!validateEmail(content)) {
            element.nextElementSibling.innerHTML = 'Not a valid email.';
            if (!element.classList.contains('notValid')) {
                element.classList.add('notValid');
            }
            logBtn.disabled = true;
        } else if (validateEmail(content)) {
            element.classList.remove('notValid');
            element.nextElementSibling.innerHTML = '';
            logBtn.disabled = false;
        }
    } else if (element === loginUserPwd) {
        if (content.length === 0) {
            element.classList.add('notValid');
            element.nextElementSibling.innerHTML = 'Required';
            logBtn.disabled = true;
        } else if (content.length > 0) {
            element.classList.remove('notValid');
            element.nextElementSibling.innerHTML = '';
            logBtn.disabled = false;
        }
    }
};
var inputOnBlur = function(element) {
    var content = element.value.trim();

    if (content.length === 0) {
        element.nextElementSibling.innerHTML = 'Required';
        element.classList.add('notValid');
        logBtn.disabled = true;
    }

};

addHandler(loginUserName, 'keyup', function() {
    loginKeyUp(loginUserName);
});

addHandler(loginUserPwd, 'keyup', function() {
    loginKeyUp(loginUserPwd)
});

addHandler(loginUserName, 'blur', function() {
    inputOnBlur(loginUserName);
});

addHandler(loginUserPwd, 'blur', function() {
    inputOnBlur(loginUserPwd);
});

addHandler(logBtn, 'click', function() {

});


















