class Form {
  constructor(
    email,
    password,
    password_confirmation,
    phone_number,
    fname,
    lname,
    age,
    birth_month,
    birth_day,
    birth_year) {
      this.email = email;
      this.password = password;
      this.password_confirmation = password_confirmation;
      this.phone_number = phone_number;
      this.fname = fname;
      this.lname = lname;
      this.age = age;
      this.birth_month = birth_month;
      this.birth_day = birth_day;
      this.birth_year = birth_year;
    }
  // TODO: You may fill in functions in the class.

  check_email() {
    const reg_email = /^[^@\s]+@[^@.\s]+.[A-Za-z]{2,3}$/;
    return reg_email.test(this.email);
  }
  check_password() {
    var plc = false, puc = false, pn = false;
    for (var i = 0; i < this.password.length; i++) {
      var c = this.password.charAt(i);
      if ('a' <= c && c <= 'z') plc = true;
      if ('A' <= c && c <= 'Z') puc = true;
      if ('0' <= c && c <= '9') pn = true;
    }
    return (plc && puc && pn && (this.password.length >= 8));
  }
  check_password_confirmation() {
    return this.password === this.password_confirmation;
  }
  check_phone_number() {
    const reg_phone = /^\d{3}-\d{4}-\d{4}$/;
    return reg_phone.test(this.phone_number);
  }
  check_name(n) {
    const reg_name = /^[A-Z][a-z]+$/;
    return reg_name.test(n);
  }
  check_age() {
    const reg_age = /^\d+$/;
    return (reg_age.test(this.age) && 0 <= this.age && this.age <= 200);
  }
  check_birth_month() {
    const months = ["January", "February", "March",
                    "April", "March", "June",
                    "July", "August", "September",
                    "October", "November", "December"];
    var valid = false;
    for (const m of months) {
      if (this.birth_month === m) {
        valid = true;
        break;
      }
    }
    return valid;
  }
  check_birth_day() {
    const reg_day = /^\d{1,2}$/;
    return reg_day.test(this.birth_day);
  }
  check_birth_year() {
    const reg_year = /^\d{4}$/;
    return (reg_year.test(this.birth_year) && 1800 <= this.birth_year && this.birth_year <= 2018);
  }
  
  validCheck() {
    const initerrormsg = "You must correct:\n";

    var errormsg = initerrormsg;
    let email_elem = document.getElementById("email-label");
    let pw_elem = document.getElementById("password-label");
    let pwconf_elem = document.getElementById("password-confirmation-label");
    let phone_elem = document.getElementById("phone-number-label");
    let fname_elem = document.getElementById("fname-label");
    let lname_elem = document.getElementById("lname-label");
    let age_elem = document.getElementById("age-label");
    let month_elem = document.getElementById("birth-month-label");
    let day_elem = document.getElementById("birth-day-label");
    let year_elem = document.getElementById("birth-year-label");

    if (!this.check_email()) {
      email_elem.innerHTML = "X";
      email_elem.title = "characters other than @ or whitespace followed by an @ sign, followed by more characters (not '@', '.', or whitespace: co.kr is not allowed in this case), and then a \".\". After the \".\", you can only write 2 to 3 letters from a to z.";
      errormsg = errormsg.concat("\nEmail");
    }
    else {
      email_elem.innerHTML = "";
      email_elem.title = "";
    }
    
    if (!this.check_password()) {
      pw_elem.innerHTML = "X";
      pw_elem.title = "Must contain at least one number and one uppercase and one lowercase letter, and at least 8 or more characters.";
      errormsg = errormsg.concat("\nPassword");
    }
    else {
      pw_elem.innerHTML = "";
      pw_elem.title = "";
    }

    if (!this.check_password_confirmation()) {
      pwconf_elem.innerHTML = "X";
      pwconf_elem.title = "Must match password.";
      errormsg = errormsg.concat("\nPassword Confirmation");
    }
    else {
      pwconf_elem.innerHTML = "";
      pwconf_elem.title = "";
    }
    
    if (!this.check_phone_number()) {
      phone_elem.innerHTML = "X";
      phone_elem.title = "nnn-nnnn-nnnn: three numbers, then \"-\", followed by four numbers and a \"-\", then four numbers.";
      errormsg = errormsg.concat("\nPhone number");
    }
    else {
      phone_elem.innerHTML = "";
      phone_elem.title = "";
    }

    if (!this.check_name(this.fname)) {
      fname_elem.innerHTML = "X";
      fname_elem.title = "Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)";
      errormsg = errormsg.concat("\nFirst Name");
    }
    else {
      fname_elem.innerHTML = "";
      fname_elem.title = "";
    }

    if (!this.check_name(this.lname)) {
      lname_elem.innerHTML = "X";
      lname_elem.title = "Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)";
      errormsg = errormsg.concat("\nLast Name");
    }
    else {
      lname_elem.innerHTML = "";
      lname_elem.title = "";
    }

    if (!this.check_age()) {
      age_elem.innerHTML = "X";
      age_elem.title = "Must be a number between 0 and 200 (inclusive).";
      errormsg = errormsg.concat("\nAge");
    }
    else {
      age_elem.innerHTML = "";
      age_elem.title = "";
    }

    if (!this.check_birth_month()) {
      month_elem.innerHTML = "X";
      month_elem.title = "Must be one of \"January\", \"February\", ..., \"December\"";
      errormsg = errormsg.concat("\nMonth");
    }
    else {
      month_elem.innerHTML = "";
      month_elem.title = "";
    }

    if (!this.check_birth_day()) {
      day_elem.innerHTML = "X";
      day_elem.title = "Must be a number of one or two digits.";
      errormsg = errormsg.concat("\nDay");
    }
    else {
      day_elem.innerHTML = "";
      day_elem.title = "";
    }

    if (!this.check_birth_year()) {
      year_elem.innerHTML = "X";
      year_elem.title = "Must be a number between 1800 and 2018 (inclusive).";
      errormsg = errormsg.concat("\nYear");
    }
    else {
      year_elem.innerHTML = "";
      year_elem.title = "";
    }

    if (errormsg === initerrormsg) return "Successfully Submitted!";
    return errormsg;
  }
}

var but = document.createElement('button');
but.innerHTML = "Check";
but.onclick = function() {
  var email = document.forms["form"]["email"].value;
  var password = document.forms["form"]["password"].value;
  var password_confirmation = document.forms["form"]["password-confirmation"].value;
  var phone_number = document.forms["form"]["phone-number"].value;
  var fname = document.forms["form"]["fname"].value;
  var lname = document.forms["form"]["lname"].value;
  var age = document.forms["form"]["age"].value;
  var birth_month = document.forms["form"]["birth-month"].value;
  var birth_day = document.forms["form"]["birth-day"].value;
  var birth_year = document.forms["form"]["birth-year"].value;
  // TODO: Fill in the rest of the function. Use the Form class defined above

  var form = new Form(email, password, password_confirmation, phone_number, fname, lname, age, birth_month, birth_day, birth_year);
  
  let alertMessage = form.validCheck();
  // TODO: Fill the alert message according to the validation result by following the form in README.md.
  alert(alertMessage);

  // Hint: you can use the RegExp class for matching a string with the `test` method.
  // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
  // Hint: modify 'title' attribute of each label to display your message
  // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
};
document.body.appendChild(but);