const inputNameRef = document.querySelector('#inputName');
const inputEmailRef = document.querySelector('#inputEmail');
const inputTelRef = document.querySelector('#inputTel');
const inputBtnSubmitRef = document.querySelector('#btnSubmit')

const validateName = () => {

    if(inputNameRef.checkValidity()) {

        inputNameRef.classList.remove('errorsInput');
        return true
    }
    else {

        inputNameRef.classList.add('errorsInput');
        return false
        
    }

}

const validateEmail = () => {

    
    if(inputEmailRef.checkValidity()) {

        inputEmailRef.classList.remove('errorsInput');
        return true
    }
    else {

        inputEmailRef.classList.add('errorsInput');
        return false
        
    }

}

const maskTel = () => {

    tel = inputTelRef.value.replace(/\D/g,"")
    tel = tel.replace(/^(\d{2})(\d)/g,"($1) $2");
    tel = tel.replace(/(\d)(\d{4})$/,"$1-$2")
    inputTelRef.value = tel

}

inputTelRef.addEventListener('keyup', maskTel)

const validateTel = () => {

    if(inputTelRef.checkValidity()) {

        inputTelRef.classList.remove('errorsInput');
        return true
    }
    else {

        inputTelRef.classList.add('errorsInput');
        
    }

}



const validateForm = () => {

    return validateName() &&
    validateEmail() &&
    validateTel()
}


const enableBtn = () => {

    inputBtnSubmitRef.disabled = !validateForm();
}




inputNameRef.addEventListener('keyup', enableBtn)
inputEmailRef.addEventListener('keyup', enableBtn)
inputTelRef.addEventListener('keyup', enableBtn)
inputBtnSubmitRef.addEventListener('click', e => {

    e.preventDefault();
})


