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
  validCheck() {
    const initerrormsg = "You must correct:\n";
    var errormsg = initerrormsg;

    // email
    const reg_email = /^[^@.\s]+@[^@.\s]+.[a-z]{2,3}$/;
    if (!reg_email.test(this.email)) errormsg = errormsg.concat("\nEmail");
    
    // password
    var plc = false, puc = false, pn = false;
    for (var i = 0; i < this.password.length; i++) {
      var c = this.password.charAt(i);
      if ('a' <= c && c <= 'z') plc = true;
      if ('A' <= c && c <= 'Z') puc = true;
      if ('0' <= c && c <= '9') pn = true;
    }
    if (!plc || !puc || !pn || this.password.length < 8) errormsg = errormsg.concat("\nPassword");

    // password confirmation
    if (this.password !== this.password_confirmation) errormsg = errormsg.concat("\nPassword Confirmation");
    
    // phone number
    const reg_phone = /^\d{3}-\d{4}-\d{4}$/;
    if (!reg_phone.test(this.phone_number)) errormsg = errormsg.concat("\nPhone number");

    // name
    const reg_name = /^[A-Z][a-z]+$/;
    if (!reg_name.test(this.fname)) errormsg = errormsg.concat("\nFirst Name");
    if (!reg_name.test(this.lname)) errormsg = errormsg.concat("\nLast Name");

    // age
    const reg_age = /^\d+$/;
    if (!reg_age.test(this.age) || this.age < 0 || 200 < this.age) errormsg = errormsg.concat("\nAge");

    const months = ["January", "February", "March",
                    "April", "March", "June",
                    "July", "August", "September",
                    "October", "November", "December"];
    // month
    var valid = false;
    for (const m of months) {
      if (this.birth_month === m) {
        valid = true;
        break;
      }
    }
    if (!valid) errormsg = errormsg.concat("\nMonth");

    // day
    const reg_day = /^\d{1,2}$/;
    if (!reg_day.test(this.birth_day)) errormsg = errormsg.concat("\nDay");

    // year
    const reg_year = /^\d{4}$/;
    if (!reg_year.test(this.birth_year) || this.birth_year < 1800 || 2018 < this.birth_year) errormsg = errormsg.concat("\nYear");

    if (errormsg === initerrormsg) {
      return "Successfully Submitted!";
    }
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