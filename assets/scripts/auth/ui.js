'use strict';

const app = require('../app.js');

$(window).load(function(){
       $('#welcomeModal').modal('show');
       $('#user-interface').hide();
       $('#navSettings').hide();
       $('#navSignOut').hide();
   });

const success = (data) => {
  if (data) {
    // console.log(data);
  } else {
    // console.log('Success');
  }
};

const deleteItemSuccess = (event) => {
    event.target.parentElement.remove();
};

const populatingDreams = (jsonObject) => {
  $('#inProgress').empty();
  $('#completed').empty();

  for (var i = 0; i < jsonObject.items.length; i++) {
    if (jsonObject.items[i]['user_id'] === app.user.id ) {
      let title = jsonObject.items[i]['title'];
      let dreamDescription = jsonObject.items[i]['description'];
      let dueDate = jsonObject.items[i]['dreamdate'];
      let status = jsonObject.items[i]['status'];
      let itemDivDream = $(' <div class="itemContainer ui-widget-content" data-id="'+ jsonObject.items[i]['id'] +'"> <div class="itemTitle">'+ title +'</div> <div class="itemDescription"> '+ dreamDescription + '</div> <div class="itemDueDate"> '+ dueDate +'</div> <button class="deleteItem btn-light-green"> delete </button> <button class="changeStatusOfItem btn-light-green"> send to Memory </button> </div>');
      let itemDivMemory = $(' <div class="itemContainer ui-widget-content" data-id="'+ jsonObject.items[i]['id'] +'"> <div class="itemTitle">'+ title +'</div> <div class="itemDescription"> '+ dreamDescription + '</div> <div class="itemDueDate"> '+ dueDate +'</div> <button class="deleteItem btn-light-green"> delete </button> </div>');
      if (status == "dream") {
      $('#inProgress').prepend(itemDivDream);
    } else if (status == "memory") {
      $('#completed').prepend(itemDivMemory);
      $('#changeStatusOfItem').hide();
    } }
  }
};

const failure = (error) => {
  // console.error(error);
};

const passwordFailure = (error) => {
  $('#changePasswordMessage').html('Your password is not correct. Try again');
  // console.error(error);
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
    $('#signUpMessage').html('You made an account. Please signIn to start converting dreams into memories!');
    $('#signInMessage').html('');
    $('#signOutMessage').html('');
    $('#changePasswordMessage').html('');

    $('#navSignUp').hide();
    $('#navSettings').hide();
    $('#navSignOut').hide();
}
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signInMessage').html('You successfully logged in!');
  $('#signUpMessage').html('');
  $('#signOutMessage').html('');
  $('#changePasswordMessage').html('');
  $('#user-interface').show();

  $('#navSignIn').hide();
  $('#navSignUp').hide();
  $('#navSettings').show();
  $('#navSignOut').show();

};

const SignInFailure = (error) => {
  $('#signInMessage').html('Password or Username is wrong, try again!');
};

const signOutSuccess = () => {
  app.user = null;
  $('#signInMessage').html('');
  $('#signOutMessage').html("It's sad to see you leave... Come back soon.");
  $('#signUpMessage').html('');
  $('#changePasswordMessage').html('');
  $('#user-interface').hide();

  $('#navSignIn').show();
  $('#navSignUp').show();
  $('#navSettings').hide();
  $('#navSignOut').hide();
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  changePasswordSuccess,
  passwordFailure,
  populatingDreams,
  deleteItemSuccess,
  SignInFailure,

};
