/* https://github.com/madmurphy/cookies.js (GPL3) */
var docCookies={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,o,n,t,r,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(n)switch(n.constructor){case Number:s=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:s="; expires="+n;break;case Date:s="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+s+(r?"; domain="+r:"")+(t?"; path="+t:"")+(c?"; secure":""),!0},removeItem:function(e,o,n){return this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(o?"; path="+o:""),!0):!1},hasItem:function(e){return!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e)?!1:new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),o=e.length,n=0;o>n;n++)e[n]=decodeURIComponent(e[n]);return e}};"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=docCookies);

$.noConflict();
(function($) {
  var fname = $('#fname').val();
  var lname = $('#lname').val();

  /* page one: search */
  $('#flightsearch').on('submit', function(e) {
    console.log("submit clicked");

    /* serialize array for form inputs */
    var formOneData = $(this).serializeArray();
    console.log(formOneData);

    $.each(formOneData, function(i, field) {
      console.log(field.name, field.value);

      switch(field.name) {
        case 'trip':
        // use this value to decide # of forms to show up elsewhere
        console.log("TWO: " + field.name + " " + field.value);
        break;
        case 'departing location':
        console.log("dloc: " + field.name + " " + field.value);
        break;
        case 'arriving location':
        console.log("aloc: " + field.name + " " + field.value);
        break;
        case 'departure date':
        console.log("ddate: " + field.name + " " + field.value);
        break;
        case 'return date':
        console.log("rdate: " + field.name + " " + field.value);
        break;
        case 'tickets':
        console.log("ONE " + field.name + " " + field.value);
        break;
      }
      i++;
    });



/*    var adult = document.getElementById("adult").valueAsNumber;
    var senior = document.getElementById("senior").valueAsNumber;
    var children = document.getElementById("children").valueAsNumber;
    var infant = document.getElementById("infant").valueAsNumber;
    console.log(adult);
    console.log(senior);
    console.log(children);
    console.log(infant);

    var quantity = 0;
    var quanitity = adult + senior + children + infant;
    console.log("total tickets:" + quantity); */


    /* something like this */
    /* if there is one or more adult or senior ticket,
    and more than one ticket in general (? maybe unnecessary)
    and then if each value is not empty, allow submission */
    if(adult >= 1 || senior >= 1) {
      if(quantity >= 1) {
        if(document.getElementById("deparloc").value === '') {
          /* append message */
          console.log("No departure location entered.");

        } else if (document.getElementById("arriveloc").value === '') {

          console.log("No arrival location entered.");

        } else if (document.getElementById("departdate").value === '') {

          console.log("No depart date entered.");

        } else if (document.getElementById("returndate").value === '') {

          console.log("No return date entered.");

        } else {
          /* submit form */
          console.log("ur gucci. form submitted")
        }
      }
    } else {
      /* at least one adult ticket is required! */
    }

    e.preventDefault();
  });

  /* page two: search results */

  $('#flightselection').on('submit', function(d)
  {
      var departflights = document.getElementsByName("departflight");
      var returnflights = document.getElementsByName("returnflight");
      var formValid = false;
      var formValid2 = false;
      var j = 0;
      var i = 0;

      while (!formValid && i < departflights.length) {
        if (departflights[i].checked) formValid = true;
            i++;
        }
        while (!formValid2 && j < returnflights.length) {
          if (returnflights[j].checked) formValid2 = true;
            j++;
        }
        if (!formValid || !formValid2){
          d.preventDefault();
        }
        return formValid;
  })

  /* page three: seat selection */



  /* page whatever: user information */

  $('#uinformation').on('submit', function(d)
   {
     if(document.getElementById("fname").value === '' || document.getElementById("lname").value === '' || document.getElementById("number").value === '' || document.getElementById("email") === ''){
    d.preventDefault();
     $('#header2').after('<li id="error">You have information missing!</li>');
     }

      // check if first name input box is empty
      if(document.getElementById("fname").value !== '' && document.getElementById("lname").value !== '' && document.getElementById("number").value !== '' && document.getElementById("email").value !== '')
       {
          if(d.target instanceof HTMLAnchorElement) d.preventDefault();
         //var fname = $('#fname').val();
        // var lname = $('#lname').val();
         var number = $('#number').val();
         var email = $('#email').val();
        var gender = $('#gender').val();
        var birthday = $('#birthday').val();
         // remove the error messages
         $('#error').remove();
            console.log('form sub, data ' + 'first name ' + fname + ' last name ' + lname + ' phone number ' + number + ' Email ' + email + ' Gender ' + gender + ' Birthday ' + birthday);
       }
    });

    /* page whatever: payment information */

    $('#paymentinformation').on('submit', function(d)
      {
      if(document.getElementById("cardnumber").value === '' || document.getElementById("expmonth").value === ''
       || document.getElementById("expyear").value === '' || document.getElementById("username").value === ''
      || document.getElementById("address").value === '' || document.getElementById("city").value === ''
      || document.getElementById("zipcode").value === '' || document.getElementById("state").value === '' ){
        d.preventDefault();
        $('#h2card').after('<li id="error2">There is missing information</li>');
      }
      if(document.getElementById("cardnumber").value !== '' && document.getElementById("expmonth").value !== ''
      && document.getElementById("expyear").value !== '' && document.getElementById("username").value !== ''
      && document.getElementById("address").value !== '' && document.getElementById("city").value !== ''
      && document.getElementById("zipcode").value !== '' && document.getElementById("state").value !== '' ) {
        if(d.target instanceof HTMLAnchorElement) d.preventDefault();
        var cardnum = $('#cardnumber').val();
        var expmonth = $('#expmonth').val();
        var expyear = $('#expyear').val();
        var username = $('#username').val();
        var address = $('#address').val();
        var city = $('#city').val();
        var zipcode = $('#zipcode').val();
        var state = $('#state').val();
        var yesopt = $('#yesopt').val();
        var noopt = $('#noopt').val();
        $("showtickets").append("<p>Congratulations " + fname + " Your flight is going to</p>");
        $('#error2').remove();
          console.log('form is done, data ' + cardnum);
      }
    });
})(jQuery);
