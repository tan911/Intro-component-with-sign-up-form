// 'use strict';

// const firstNameEl = document.getElementById('firstName');
// const lastNameEl = document.getElementById('lastName');
// const emailEl = document.getElementById('email');
// const password = document.getElementById('password');
// const claimBtn = document.querySelector('.claim-btn');
// const message = document.getElementById('message');

// const _inputValidations = function () {
//   const _fName = firstNameEl.value;
//   const _lName = lastNameEl.value;
//   const _email = emailEl.value;
//   const _password = password.value;
//   const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//   // firstname validation
//   if (_fName === '' || _fName === null) {
//     errorMessage(firstNameEl, `Please Enter your ${firstNameEl.placeholder}!`);
//   } else {
//     successMessage(firstNameEl);
//   }

//   // lastname validation
//   if (_lName === '' || _lName === null) {
//     errorMessage(lastNameEl, `Please Enter your ${lastNameEl.placeholder}!`);
//   } else {
//     successMessage(lastNameEl);
//   }

//   // email
//   if (_email.match(pattern)) {
//     successMessage(emailEl);
//   } else {
//     errorMessage(emailEl, `Plase Enter your ${emailEl.placeholder}!`);
//   }

//   // password
//   if (_password.length >= 8) {
//     successMessage(password);
//   } else {
//     errorMessage(password, `Please Enter your ${password.placeholder}!`);
//   }
// };

// // ERROR
// const errorMessage = function (input, mes) {
//   const inputContainer = input.parentElement;
//   const span = inputContainer.querySelector('span');
//   input.classList.add('error');
//   span.classList.add('errorMessage');
//   span.innerText = mes;
//   input.style.outline = 'none';
// };

// // SUCCESS
// const successMessage = function (input) {
//   const inputContainer = input.parentElement;
//   const span = inputContainer.querySelector('span');
//   input.classList.add('success');
//   span.classList.remove('errorMessage');
//   span.innerText = '';
//   input.style.outline = 'none';
// };

// claimBtn.addEventListener('click', _inputValidations);
