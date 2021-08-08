//-----------input field float label -------------

const FloatLabel = (() => {
  
 
  const handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add('active');
    target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
  };
  
  
  const handleBlur = (e) => {
    const target = e.target;
    if(!target.value) {
      target.parentNode.classList.remove('active');
    }
    target.removeAttribute('placeholder');
  };
  
  
  const bindEvents = (element) => {
    const floatField = element.querySelector('input');
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);    
  };
  
  
  const init = () => {
    const floatContainers = document.querySelectorAll('.registration-form__input-wrap');

    floatContainers.forEach((element) => {

      if (element.querySelector('input').value) {
        element.classList.add('active');
      }

      bindEvents(element);
    });
  };
  
  return {
    init: init
  };
})();

FloatLabel.init();

// --swaping choices on different country and blocking button if chosen wrong optiob----------
const dropdownSwap = (() => {
  
 
  let country = document.querySelector(`[name="registration-form__country"]`);
  let cities = document.querySelectorAll(`[name="registration-form__city"] optgroup`);
  
   cities.forEach(elem => elem.style.display = "none");

  country.addEventListener("change", function sortCities() {
   
    let thisCity = document.querySelector(`optgroup.${this.value}`);
   
      cities.forEach(elem => elem.style.display = "none");
      if (thisCity.style.display === "none") {
        thisCity.style.display = "block";
      } else {
        thisCity.style.display = "none";
    }
  })
 
});

dropdownSwap();


const passwordConfirm = (() => {
  let password = document.querySelector(".registration-form__password")
    , confirm_password = document.querySelector(".registration-form__confirm-password");

  function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }

  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;
});

passwordConfirm();

const formInfoPassing = (() => {

  function passValues() {
    let fname = document.getElementById("registration-form__fname").value;
    let lname = document.getElementById("registration-form__lname").value;
    let newsletterSign = document.getElementById("registration-form__newsletter-sign").checked;
    let email = document.getElementById("registration-form__email").value;
    let countryCode = document.getElementById("registration-form__country-code").value;
    let phone = document.getElementById("registration-form__phone").value;
    let street = document.getElementById("registration-form__street-address").value;
    let country = document.getElementById("registration-form__country").value;
    let city = document.getElementById("registration-form__city").value;
    let postalCode = document.getElementById("registration-form__postal-code").value;
    
    

    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('newsletterSign', newsletterSign);
    localStorage.setItem('email', email);
    localStorage.setItem('countryCode', countryCode);
    localStorage.setItem('phone', phone);
    localStorage.setItem('street', street);
    localStorage.setItem('country', country);
    localStorage.setItem('city', city);
    localStorage.setItem('postalCode', postalCode);

    return false;

  }
  
  let btn = document.querySelector(".registration-form__submit-btn");
    btn.addEventListener("click", passValues);

 
});
formInfoPassing();









/* not needed
//for disabling submit button if no country or city selected
const formValidation = (() => {

    let form = document.querySelector(".registration-form");
    let countryAll = document.querySelector(".registration-form__country");
    let cityAll = document.querySelector(".registration-form__city");
    let btn = document.querySelector(".registration-form__submit-btn");
    
    window.addEventListener("load", () => {
      
      if (countryAll.value === "0" || cityAll.value === "0") {
        btn.disabled = true;
      } else {
        btn.disabled = false;
      }
    });
    form.addEventListener("change", () => {
      
      if (countryAll.value === "0" || cityAll.value === "0") {
        btn.disabled = true;
      } else {
        btn.disabled = false;
      }
    });
  
  });

formValidation();
*/
