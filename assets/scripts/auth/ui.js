'use strict';

const app = require('../app.js');

$(window).load(function(){
       $('#welcomeModal').modal('show');
       $('#user-interface').hide();
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

const passwordFailure = (error) => {
  $('#changePasswordMessage').html('Your password is not correct. Try again');
  console.error(error);
};

const changePasswordSuccess = () => {
  $('#changePasswordMessage').html('You successfully changed your password.');
  $('#signUpMessage').html('');
  $('#signOutMessage').html('');
  $('#signInMessage').html('');
  $('#user-interface').show();
};

const signUpSuccess = (data) => {
  if(data){
    $('#signUpMessage').html('You made an account. Please sign in to start playing.');
    $('#signInMessage').html('');
    $('#signOutMessage').html('');
    $('#changePasswordMessage').html('');
}
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signInMessage').html('You successfully logged in!');
  $('#signUpMessage').html('');
  $('#signOutMessage').html('');
  $('#changePasswordMessage').html('');
  $('#user-interface').show();
  console.log(app.user);
};

const signOutSuccess = () => {
  app.user = null;
  $('#signInMessage').html('');
  $('#signOutMessage').html("It's sad to see you leave... Come back soon.");
  $('#signUpMessage').html('');
  $('#changePasswordMessage').html('');
  $('#user-interface').hide();
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  changePasswordSuccess,
  passwordFailure
};
