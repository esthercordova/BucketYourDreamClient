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

const onSignInSuccess = (data) => {

  ui.signInSuccess(data);

  api.loadItems()
  .done(ui.populatingDreams)
  .fail(ui.failure);

};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(onSignInSuccess)
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
  api.createItem(dueDate, dreamDescription, title)
  .done(ui.createItemSuccess(dueDate, dreamDescription, title))
  .fail(ui.failure);
};

const onDeleteItem = (event) => {
  event.preventDefault();
  let deleteId = $(event.target.parentElement).data('id');
  api.deleteItem(deleteId)
  .done(ui.deleteItemSuccess(event))
  .fail(ui.failure);
};

const onChangeStatusItem = (event) => {
  event.preventDefault();
  console.log("got so far, clicked send to memory button");
};

const onEditItem = (event) => {
  event.preventDefault();
  console.log("got so far, clickes edit button");
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#todo-form').on('submit', function(event){event.preventDefault(); console.log($('button').parent()[0].remove())});
  $('#inProgress').on('click', 'button.deleteItem', onDeleteItem);
  $('#inProgress').on('click', 'button.changeStatusOfItem', onChangeStatusItem);
  $('#inProgress').on('click', 'button.editItem', onEditItem);
};
//
module.exports = {
  addHandlers,
};
