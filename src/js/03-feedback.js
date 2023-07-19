import _throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form";

const refs = {
  form: document.querySelector('.feedback-form'),
};
let user={};

fillText();
refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', _throttle(onInputText),1000);

function onInputText(evt) {
  user[evt.target.name]=evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user)); 
}

function onSubmit(evt){
    evt.preventDefault();

    const {email, message}=evt.currentTarget.elements;
    if(email.value==="" || message.value===""){
       alert("ЗАПОВНИ ВСІ ПОЛЯ");
    }
    console.log({email: email.value, message: message.value});

      evt.currentTarget.reset();
      user={};
      localStorage.removeItem(STORAGE_KEY);
}

function fillText(evt){
    const savedInput = localStorage.getItem(STORAGE_KEY);
    console.log(savedInput);

    if(savedInput){
        user=JSON.parse(savedInput);
        for(let key in user){
          refs.form[key].value=user[key];
        }
    }
}


