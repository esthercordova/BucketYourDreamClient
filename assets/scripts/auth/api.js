'use strict';

const app = require('../app.js');

const createItem = (dueDate, dreamDescription, title) => {
  return $.ajax ({
    url: app.host + '/items',
    method: "POST",
    data:
      {item:{
        title: title,
        description: dreamDescription,
      }
      }
  });
};

const deleteItem = (itemId) => {
  return $.ajax({
    url: app.host + '/items/' + itemId,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: "POST",
    data: data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data: data,
  });
};

const loadItems = () => {
  return $.ajax({
    url: app.host + '/items',
    method: "GET",
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createItem,
  loadItems,
  deleteItem,
};
