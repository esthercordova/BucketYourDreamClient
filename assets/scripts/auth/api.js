'use strict';

const app = require('../app.js');

const changeStatusOfItem = (itemId, title, dreamDescription, dreamDate) => {
  return $.ajax({
    url: app.host + '/items/' + itemId,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data:
      {item:{
        title: title,
        description: dreamDescription,
        dreamdate: dreamDate,
        status: "memory",
      }
      }
  });
};



const createItem = (dreamDescription, title, dreamDate) => {
  return $.ajax ({
    url: app.host + '/items',
    method: "POST",
    headers: {
          Authorization: 'Token token=' + app.user.token,
        },
    data:
      {item:{
        title: title,
        description: dreamDescription,
        status: "dream",
        dreamdate: dreamDate,
        user_id: app.user.id,
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
    url: app.host + '/items/',
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
  changeStatusOfItem,
};
