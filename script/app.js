let password = {},
  email = {},
  signInButton;

function getDOMElements() {
  password.input = document.querySelector('.js-password-input');
  password.field = document.querySelector('.js-password-field');
  password.errorMessage = document.querySelector('.js-password-error-message');

  email.input = document.querySelector('.js-email-input');
  email.field = document.querySelector('.js-email-field');
  email.errorMessage = document.querySelector('.js-emeil-error-message');

  signInButton = document.querySelector('.js-sign-in-button');
}

function enableListeners() {
  email.field = document.addEventListener('blur', function () {
    if (isEmpty(email.input) == 0) {
      email.errorMessage = 'this field is required';
    } else if (isEmpty(email.input) == 0) {
      if (isValidEmailAddress(email.input) == '') {
        email.errorMessage = 'Invalid emailaddress';
      }
    }
  });
  password.field = document.addEventListener('blur', function () {
    if (isEmpty(password.input) == 0) {
      password.errorMessage = 'this field is required';
    }
  });
  signInButton = document.addEventListener('click', function () {});
}

const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const isValidPassword = function (password) {
  return password.length > 1 ? 1 : 0;
};

function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  const password_input = document.querySelector('.js-input');
  const password_toggle = document.querySelector('.js-toggle');
  password_toggle.addEventListener('change', function () {
    console.log('checked');
    if (password_input.type == 'password') {
      password_input.type = 'text';
    } else if (password_input.type == 'text') {
      password_input.type = 'password';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  handlePasswordSwitcher();
});
