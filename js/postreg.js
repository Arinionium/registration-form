const formInfoSet = (() => {

    

    function setValues() {
        let fnameP = document.querySelector(".registration-info__fname");
        let lnameP = document.querySelector(".registration-info__lname");
        let emailP = document.querySelector(".registration-info__email");
        let phoneP = document.querySelector(".registration-info__phone");
        let streetP = document.querySelector(".registration-info__street span");
        let countryP = document.querySelector(".registration-info__country span");
        let cityP = document.querySelector(".registration-info__city span");
        let postalCodeP = document.querySelector(".registration-info__postal-code span");
        let newsletterP =  document.querySelector(".registration-info__newsletter-text");


        let phoneCode = localStorage.getItem('countryCode');
        let phoneNumber = localStorage.getItem('phone');
        let localNewsletter = localStorage.getItem('newsletterSign');

        fnameP.textContent = localStorage.getItem('fname');
        lnameP.textContent = localStorage.getItem('lname');
        emailP.textContent = localStorage.getItem('email');

        function createPhoneNumber() {
            let splitNumber = phoneNumber.split("");
            let changedNumber = `${phoneCode}(xxx) xxx-xxxx`;
      
            for (let i = 0; i < splitNumber.length; i++) {
                changedNumber = changedNumber.replace('x', splitNumber[i]);
            }
      
            return phoneP.textContent = changedNumber;
        };
        createPhoneNumber();
       
           
        streetP.textContent = localStorage.getItem('street');
        countryP.textContent = localStorage.getItem('country');
        cityP.textContent = localStorage.getItem('city');
        postalCodeP.textContent = localStorage.getItem('postalCode');
                
        if (localNewsletter === "true") {
           return newsletterP.textContent = "Thank you for subscription!"
        } else {
            return newsletterP.textContent = "You aren't subscribed to out newsletter."
        }

       
        
        
       
       
      
    }
    setValues();

});

formInfoSet();

