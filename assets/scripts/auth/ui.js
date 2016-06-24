'use strict';

const app = require('../app.js');

$(window).load(function(){
       $('#welcomeModal').modal('show');
   });

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signInMessage').html('You successfully logged in!');
  console.log('User signed in successfully');
  console.log(app.user);
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
