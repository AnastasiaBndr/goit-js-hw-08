import _ from 'lodash.throttle';

const STORAGE_KEY = "feedback-form";

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input')
};


fillText();
refs.form.addEventListener('submit', onSubmit);
refs.textarea.addEventListener('input', _(onInputText),8000);

function onInputText(evt) {
  const message = evt.currentTarget.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({userEmail: "", userMessage: message}));
   
}


function onSubmit(evt){
    evt.preventDefault();

    const {email, message}=evt.currentTarget.elements;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({userEmail: email.value, userMessage: message.value}));

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.currentTarget.reset();

}

function fillText(evt){
    const savedInput = localStorage.getItem(STORAGE_KEY);
    console.log(savedInput);

    if(savedInput){

        const dataTemp=JSON.parse(savedInput);
        refs.textarea.value=Object.values(dataTemp)[1];
        refs.email.value=Object.values(dataTemp)[0];
    }
}


