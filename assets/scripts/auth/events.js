'use strict';

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


  const createItemSuccess = (event) => {
    api.loadItems()
    .done(ui.populatingDreams)
    .fail(ui.failure);

    ui.success(event);
  };

const onCreateItem = (event) => {
  event.preventDefault();
  let dreamDescription = $('#todo-form :input[name=dream-description]').val();
  let title = $('#todo-form :input[name=title]').val();
  let dreamDate = $('#todo-form :input[name=dream-date]').val();



  api.createItem(dreamDescription, title, dreamDate)
  .done(createItemSuccess)
  .fail(ui.failure);

  $('.emptyInput').val('');
};

const onDeleteItem = (event) => {
  event.preventDefault();
  let deleteId = $(event.target.parentElement).data('id');
  api.deleteItem(deleteId)
  .done(ui.deleteItemSuccess(event))
  .fail(ui.failure);
};

const changeStatusOfItemSuccess = (event) => {
  api.loadItems()
  .done(ui.populatingDreams)
  .fail(ui.failure);

  ui.success(event);
};

const onChangeStatusItem = (event) => {
  event.preventDefault();
  let itemId = $(event.target.parentElement).data('id');
  let title = $(event.target.parentElement).find('.itemTitle').html();
  let dreamDescription = $(event.target.parentElement).find('.itemDescription').html();
  let dreamDate = $(event.target.parentElement).find('.itemDueDate').html();

  api.changeStatusOfItem(itemId, title, dreamDescription, dreamDate)
  .done(changeStatusOfItemSuccess)
  .fail(ui.failure);

};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#todo-form').on('submit', onCreateItem);
  $('#completed').on('click', 'button.deleteItem', onDeleteItem);
  $('#completed').on('click', 'button.changeStatusOfItem', onChangeStatusItem);
  $('#inProgress').on('click', 'button.deleteItem', onDeleteItem);
  $('#inProgress').on('click', 'button.changeStatusOfItem', onChangeStatusItem);
};
//
module.exports = {
  addHandlers,
};
