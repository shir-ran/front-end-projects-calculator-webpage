/**
* Created by Shir-ran Shaashua July 2020
*/

$(document).ready(function(){
  var willItWork = false;
  if (willItWork){
    alert("This is an alert");
  }


  console.log("logging to console...");


  function thankRequestMaker(){
    var name = document.getElementsByName('Name')[0].value;
    console.log(name);
    alert("Thank you " + name +" for reaching out!");
  }

  //var submitButton = document.getElementsByName('submitButton')[0];
  //submitButton.addEventListener("click", thankRequestMaker);
  $('[name^="submitButton"]').on('click',function(){
    var name = $('[name^="Name"]')[0].value;
    console.log(name);
    alert("Thank you " + name +" for reaching out!");
  })

  $('[name^="submitButton"]').hover(function(){
    console.log("hovered over the submit button");
  })

  $('#contact-form-greeting').text("fill in details and hit submit button");

  $('[data-trigger="dropdown"]').on('mouseenter',function(){
    var submenu = $(This).parent().find('.submenu');
    submenu.addClass('active');
  })


});
