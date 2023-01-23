function validation() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var psw = document.getElementById('psw').value;
  
    var fnamecheck = /^[A-Za-z. ]{3,30}$/;
    var lnamecheck = /^[A-Za-z. ]{3,20}$/;
    var emailcheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var pswcheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
    if (fnamecheck.test(fname)) {
      document.getElementById('fnameerror').innerHTML = "";
    } else {
      document.getElementById('fnameerror').innerHTML ='Required, Only Characters and Maximum 30 Characters!';
      return false;
    }
    if (lnamecheck.test(lname)) {
      document.getElementById('lnameerror').innerHTML = "";
    } else {
      document.getElementById('lnameerror').innerHTML = "Required, Only Characters and Maximum 30 Characters!";
      return false;
    }
    if (emailcheck.test(email)) {
      document.getElementById('mail').innerHTML = "";
    } else {
      document.getElementById('mail').innerHTML = "example@domain.com";
      return false;
    }
    if (pswcheck.test(psw)) {
      document.getElementById('pass').innerHTML = "";
    } else {
      document.getElementById('pass').innerHTML = "Minimum 8 characters, at least 1 letter, 1 number and 1 specialcharacter (@$!%*#?&).";
      return false;
    }
  }
