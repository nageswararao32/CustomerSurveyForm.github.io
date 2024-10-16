function validateFname() {
    const fn = document.myForm.fn.value;
    const fnerror = document.getElementById("fnerror");
    if (fn.length < 3) {
        fnerror.textContent = "First name must be at least 3 characters.";
    } else {
        fnerror.textContent = "";
    }
}

function validateLname() {
    const ln = document.myForm.ln.value;
    const lnerror = document.getElementById("lnerror");
    if (ln.length < 5) {
        lnerror.textContent = "Last name must be at least 5 characters.";
    } else {
        lnerror.textContent = "";
    }
}

function validateCountry() {
    const country = document.myForm.Country.value;
    const cerror = document.getElementById("cerror");
    if (country === "Default") {
        cerror.textContent = "Please select your country.";
    } else {
        cerror.textContent = "";
    }
}

function validateGender() {
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    const gerror = document.getElementById("gerror");
    if (!genderSelected) {
        gerror.textContent = "Please select at least one gender.";
    } else {
        gerror.textContent = "";
    }
}

function validateProfession() {
    const profession = document.myForm.profession.value;
    const perror = document.getElementById("perror");
    if (profession.length < 3) {
        perror.textContent = "Profession must be at least 3 characters.";
    } else {
        perror.textContent = "";
    }
}

function validatePhone() {
    const phone = document.myForm.mob.value;
    const merror = document.getElementById("merror");
    const phoneRegex = /^[6789]\d{9}$/;; 
    if (!phoneRegex.test(phone)) {
        merror.textContent = "Must be 10 digits and start with 6789.";
    } else {
        merror.textContent = "";
    }
}

function validateForm(event) {
    event.preventDefault();
    validateGender();
    validateCountry();
    validateFname();
    validateLname();
    validateProfession();
    validatePhone();

    const fnerror = document.getElementById("fnerror").textContent;
    const lnerror = document.getElementById("lnerror").textContent;
    const cerror = document.getElementById("cerror").textContent;
    const gerror = document.getElementById("gerror").textContent;
    const perror = document.getElementById("perror").textContent;
    const merror = document.getElementById("merror").textContent;

    if (fnerror || lnerror || cerror || gerror || perror || merror) {
        alert("Please correct the highlighted errors before submitting the form.");
        return false; 
    }
    const firstName = document.forms["myForm"]["fn"].value;
    const lastName = document.forms["myForm"]["ln"].value;
    const dateOfBirth = document.forms["myForm"]["db"].value;
    const country = document.forms["myForm"]["Country"].value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profession = document.forms["myForm"]["profession"].value;
    const email = document.forms["myForm"]["email"].value;
    const mobile = document.forms["myForm"]["mob"].value;

   
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("dateOfBirth", dateOfBirth);
    localStorage.setItem("country", country);
    if (gender) localStorage.setItem("gender", gender);
    localStorage.setItem("profession", profession);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);

    window.location.href = "success.html";
    return true; 
}

