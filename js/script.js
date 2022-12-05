'use strict';

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('#btn');

// Validate forms
const isFormValid = () => {
  const form = document.querySelectorAll('input');

  for (const el of form) {
    if (el.value === '') {
      return false;
    }
  }
};

// Check if the password has length of 6 charter
const getPasswordLength = (input, max, min) => {
  if (input.value === '') return;
  if (input.value.trim().length < max || input.value.trim().length < min) {
    displayError(input, `${errMessage(input)} must be 6 characters length`);
  } else {
    displaySuccess(input);
  }
};

// Validate email
// https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const getEmailIsValid = input => {
  if (input.value === '') return;
  const email = String(input.value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (email !== null) {
    displaySuccess(input);
  } else {
    displayError(input, 'Looks like this is not an email');
  }
};

// Display error
const displayError = (input, err) => {
  const inputEl = input.parentElement;
  inputEl.className = 'wrapper__input error';
  const small = inputEl.querySelector('small');
  small.textContent = err;
};

// Display success
const displaySuccess = input => {
  const inputEl = input.parentElement;
  inputEl.className = 'wrapper__input success';
};

//  Validate for empty input value
const getInputValues = inputs => {
  inputs.forEach(input => {
    if (input.value === '') {
      displayError(input, `${errMessage(input)} cannot be empty`);
    } else {
      displaySuccess(input);
    }
  });
};

// get error message base on input field name
const errMessage = input => {
  const inputEl = input.parentElement;
  const label = inputEl.querySelector('label');
  return label.textContent;
};

const init = e => {
  e.preventDefault();

  const form = isFormValid();
  console.log(form);

  if (form === undefined) {
    const form = document.querySelectorAll('input');
    for (const el of form) {
      el.value = '';
      displaySuccess(el);
    }
  } else {
    getInputValues([firstName, lastName, email, password]);
    getEmailIsValid(email);
    getPasswordLength(password, 6, 2);
  }
};

btn.addEventListener('click', init);
