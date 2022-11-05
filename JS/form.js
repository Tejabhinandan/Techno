let loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  let userForm = document.forms["userform"];
  let usernameElement = userForm.username;
  let passwordElement = userForm.password;

  console.log("usernameElement", usernameElement.value);
  console.log("passwordElement", passwordElement.value);

  let isValidUserName = validateUsername(usernameElement.value);
  let isValidPassword = validatePassword(passwordElement.value);

  if (isValidUserName && isValidPassword) {
    alert("Form is validated");
  }
});

function validateUsername(username) {
  if (username) {
    if (username.search(/[^a-zA-Z]+/) === -1) {
      document.getElementById("emptyUsername").style.display = "none";
      document.getElementById("invalidUsername").style.display = "none";
      return true;
    } else {
      document.getElementById("emptyUsername").style.display = "none";
      document.getElementById("invalidUsername").style.display = "block";
    }
  } else {
    document.getElementById("emptyUsername").style.display = "block";
    document.getElementById("invalidUsername").style.display = "none";
    return false;
  }
}

function validatePassword(password) {
  if (password) {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
      document.getElementById("emptyPassword").style.display = "none";
      document.getElementById("invalidPassword").style.display = "none";
      return true;
    } else {
      document.getElementById("emptyPassword").style.display = "none";
      document.getElementById("invalidPassword").style.display = "block";
    }
  } else {
    document.getElementById("emptyPassword").style.display = "block";
    document.getElementById("invalidPassword").style.display = "none";
    return false;
  }
}
