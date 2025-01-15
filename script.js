/*

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

// form.addEventListener("submit", (e) => {
//   if (!ValidateInputs()) {
//     e.preventDefault();
//   }
// });

// Success message container
const successMessage = document.createElement("div");
successMessage.className = "success-message";
successMessage.style.display = "none"; // Initially hidden
form.parentElement.appendChild(successMessage); // Append to container

form.addEventListener("submit", (e) => {
  if (!ValidateInputs()) {
    e.preventDefault();
  } else {
    e.preventDefault(); // Prevent actual submission for testing purposes
    displaySuccessMessage("Form submitted successfully!");
  }
});

function ValidateInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();
  let success = true;

  // console.log(usernameValue, emailValue, passwordValue, cpasswordValue);

  if (usernameValue === "") {
    success = false;
    setError(username, "Username is required");
  } else if (!validateNoSymbols(usernameValue)) {
    success = false;
    setError(username, "Username must not contain any symbols");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailValue)) {
    success = false;
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    success = false;
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    success = false;
    setError(password, "Password must be at least 8 characters long");
  } else {
    setSuccess(password);
  }
  if (cpasswordValue === "") {
    success = false;
    setError(cpassword, "Confirm password is required");
  } else if (cpasswordValue !== passwordValue) {
    success = false;
    setError(cpassword, "Passwords do not match");
  } else {
    setSuccess(cpassword);
  }
  return success;
}

// Function to check for symbols
function validateNoSymbols(value) {
  const symbolRegex = /^[a-zA-Z0-9]*$/;
  return symbolRegex.test(value);
}

// Function to validate email
function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function setError(element, message) {
  // console.log(element,message);
  // console.log(element.parentElement);

  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  const errorIcon = inputGroup.querySelector(".fa-times-circle");
  const checkIcon = inputGroup.querySelector(".fa-check-circle");
  //console.log(inputGroup,errorElement,errorIcon,checkIcon);

  errorElement.innerText = message;
  errorIcon.style.visibility = "visible";
  checkIcon.style.visibility = "hidden";

  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  // console.log(element,message);
  // console.log(element.parentElement);
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  const errorIcon = inputGroup.querySelector(".fa-times-circle");
  const checkIcon = inputGroup.querySelector(".fa-check-circle");
  //console.log(inputGroup,errorElement,errorIcon,checkIcon);

  errorElement.innerText = "";
  checkIcon.style.visibility = "visible";
  errorIcon.style.visibility = "hidden";

  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

// Function to validate email
function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[a-zA-Z]{2,}))$/
  );
}

// Function to display success message
function displaySuccessMessage(message) {
  successMessage.innerText = message;
  successMessage.style.display = "block"; // Show the message
  successMessage.style.backgroundColor = "#0cc477";
  successMessage.style.color = "white";
  successMessage.style.padding = "10px";
  successMessage.style.marginTop = "20px";
  successMessage.style.textAlign = "center";
  successMessage.style.borderRadius = "5px";

  // Optionally clear the form
  form.reset();
  const inputGroups = form.querySelectorAll(".input-group");
  inputGroups.forEach((group) => {
    group.classList.remove("success", "error");
    group.querySelector(".fa-check-circle").style.visibility = "hidden";
    group.querySelector(".fa-times-circle").style.visibility = "hidden";
  });
}
*/

//! select inputs

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

// Create a success message container
const successMessage = document.createElement("div");
successMessage.className = "success-message";
successMessage.style.display = "none"; // Initially hidden
successMessage.style.position = "absolute";
successMessage.style.bottom = "22%";
successMessage.style.left = "30%";
// successMessage.style.transform = "translate(-50%, -50%)";

form.parentElement.appendChild(successMessage); // Append to the parent container

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault(); // Prevent form submission if validation fails
  } else {
    e.preventDefault(); // For testing purposes, prevent actual form submission
    displaySuccessMessage("Form submitted successfully!");
  }
});

//! Function to validate inputs

function validateInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();
  let isValid = true;

  //! Validate username (no symbols allowed)

  //  Username

  if (usernameValue === "") {
    isValid = false;
    setError(username, "Username is required");
  } else if (usernameValue.length < 5) {
    isValid = false;
    setError(username, "Username must be at least 8 characters long");
  } else if (!validateNoSymbols(usernameValue)) {
    isValid = false;
    setError(username, "Username must not contain symbols");
  } else {
    setSuccess(username);
  }

  // Validate email

  if (emailValue === "") {
    isValid = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailValue)) {
    isValid = false;
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }

  // Validate password

  if (passwordValue === "") {
    isValid = false;
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    isValid = false;
    setError(password, "Password must be at least 8 characters long");
  } else {
    setSuccess(password);
  }

  // Validate confirm password

  if (cpasswordValue === "") {
    isValid = false;
    setError(cpassword, "Confirm password is required");
  } else if (cpasswordValue !== passwordValue) {
    isValid = false;
    setError(cpassword, "Passwords do not match");
  } else {
    setSuccess(cpassword);
  }

  return isValid;
}

// Function to check for symbols (user name)

function validateNoSymbols(value) {
  const symbolRegex = /^[a-zA-Z0-9]*$/; // Allows only letters and numbers
  return symbolRegex.test(value);
}

// Function to handle success state

function validateEmail(email) {
  return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

// Function to handle error state
function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  const errorIcon = inputGroup.querySelector(".fa-times-circle");
  const checkIcon = inputGroup.querySelector(".fa-check-circle");

  errorElement.innerText = message;
  errorIcon.style.visibility = "visible";
  checkIcon.style.visibility = "hidden";

  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement; // parent
  const errorElement = inputGroup.querySelector(".error"); // parent>.error
  const errorIcon = inputGroup.querySelector(".fa-times-circle");
  const checkIcon = inputGroup.querySelector(".fa-check-circle");

  errorElement.innerText = ""; // EMpty
  errorIcon.style.visibility = "hidden";
  checkIcon.style.visibility = "visible";

  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

// Success message dynamically added via JavaScript

function displaySuccessMessage(message) {
  successMessage.innerText = message;
  successMessage.style.display = "block"; // Show the success message
  successMessage.style.backgroundColor = "black";
  successMessage.style.color = "white";
  successMessage.style.padding = "10px";
  successMessage.style.marginTop = "20px";
  successMessage.style.textAlign = "center";
  successMessage.style.borderRadius = "5px";

  // Clear the form
  form.reset();
  const inputGroups = form.querySelectorAll(".input-group");
  inputGroups.forEach((group) => {
    group.classList.remove("success", "error");
    group.querySelector(".fa-check-circle").style.visibility = "hidden";
    group.querySelector(".fa-times-circle").style.visibility = "hidden";
  });

  // Automatically hide the success message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 1000); // 3000 milliseconds = 3 seconds
}
