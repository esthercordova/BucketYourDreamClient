'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.passwordFailure);
};

const onCreateItem = (event) => {
  event.preventDefault();
  let dueDate = $('#todo-form :input[name=due-date]').val();
  let dreamDescription = $('#todo-form :input[name=dream-description]').val();
  let title = $('#todo-form :input[name=title]').val();
  $('#inProgress').html(dueDate + dreamDescription + title);
  console.log("dueDate = " + dueDate + "\ntitle = " + title + "\ndescription = "+ dreamDescription);
  api.createItem(dueDate, dreamDescription, title);

  console.log(event.target);

};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#todo-form').on('submit', onCreateItem);
};
//
module.exports = {
  addHandlers,
};
