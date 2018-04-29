/* https://github.com/madmurphy/cookies.js (GPL3) */
var docCookies={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,o,n,t,r,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(n)switch(n.constructor){case Number:s=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:s="; expires="+n;break;case Date:s="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+s+(r?"; domain="+r:"")+(t?"; path="+t:"")+(c?"; secure":""),!0},removeItem:function(e,o,n){return this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(o?"; path="+o:""),!0):!1},hasItem:function(e){return!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e)?!1:new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),o=e.length,n=0;o>n;n++)e[n]=decodeURIComponent(e[n]);return e}};"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=docCookies);

$.noConflict();
(function($) {
  var fname = $('#fname').val();
  var lname = $('#lname').val();
  var number = $('#number').val();
  var email = $('#email').val();
  var birthday = $('#birthday').val();

  /* page one: search */

  /* search form: page one and two */
  /* prettier, easier buttons */
  /* this is 99% stolley's code so
      https://github.com/itmd-362-2018/demos/blob/master/03-07/site.js
    here's some credit i guess
   */

  $('#adult').after('<a class="ad" id="more" href="#null">+</a>');
  $('#adult').before('<a class="ad" id="less" href="#null">-</a>');
  $('#senior').after('<a class="se" id="more" href="#null">+</a>');
  $('#senior').before('<a class="se" id="less" href="#null">-</a>');
  $('#children').after('<a class="ch" id="more" href="#null">+</a>');
  $('#children').before('<a class="ch" id="less" href="#null">-</a>');
  $('#infant').after('<a class="inf" id="more" href="#null">+</a>');
  $('#infant').before('<a class="inf" id="less" href="#null">-</a>');

  $('#more.ad').on('click', function(e) {
    var adultValue = $('#adult').val();
    var newAdultValue = parseInt(adultValue, 10) + 1;
    $('#adult').val(newAdultValue);
    e.stopPropogation();
    e.preventDefault();
  });

  $('#less.ad').on('click', function(e) {
    var adultValue = $('#adult').val();
    var newAdultValue = parseInt(adultValue, 10) - 1;
    if(newAdultValue < 0) {
      newAdultValue = 0;
    }
    $('#adult').val(newAdultValue);
    e.stopPropogation();
    e.preventDefault();
  });

  $('#more.se').on('click', function(e) {
    var seniorValue = $('#senior').val();
    var newSeniorValue = parseInt(seniorValue, 10) + 1;
    $('#senior').val(newSeniorValue);
    e.stopPropogation();
    e.preventDefault();
  });

  $('#less.se').on('click', function(e) {
    var seniorValue = $('#senior').val();
    var newSeniorValue = parseInt(seniorValue, 10) - 1;
    if(newSeniorValue < 0) {
      newSeniorValue = 0;
    }
    $('#senior').val(newSeniorValue);
    e.stopPropogation();
    e.preventDefault();
  });

  $('#more.ch').on('click', function(e) {
    var childrenValue = $('#children').val();
    var newChildrenValue = parseInt(childrenValue, 10) + 1;
    $('#children').val(newChildrenValue);
    e.stopPropogation();
    e.preventDefault();
  });

  $('#less.ch').on('click', function(e) {
    var childrenValue = $('#children').val();
    var newChildrenValue = parseInt(childrenValue, 10) - 1;
    if(newChildrenValue < 0) {
      newChildrenValue = 0;
    }
    $('#children').val(newChildrenValue);
    e.stopPropogation();
    e.preventDefault();
  });

  $('#more.inf').on('click', function(e) {
    var infantValue = $('#infant').val();
    var newInfantValue = parseInt(infantValue, 10) + 1;
    $('#infant').val(newInfantValue);
    e.stopPropogation();
    e.preventDefault();
  });

  $('#less.inf').on('click', function(e) {
    var infantValue = $('#infant').val();
    var newInfantValue = parseInt(infantValue, 10) - 1;
    if(newInfantValue < 0) {
      newInfantValue = 0;
    }
    $('#infant').val(newInfantValue);
    e.stopPropogation();
    e.preventDefault();
  });

  /* eventually find a way to do this less redundantly? */

    /* this is so repetitive big yikes */
/*  $('#more').on('click', function(e) {
    var infantValue = $('#infant').val();
    var newInfantValue = parseInt(infantValue, 10)
    var childrenValue = $('#children').val();
    var newChildrenValue = parseInt(childrenValue, 10);
    var seniorValue = $('#senior').val();
    var newSeniorValue = parseInt(seniorValue, 10);
    var adultValue = $('#adult').val();
    var newAdultValue = parseInt(adultValue, 10);

    var total = newAdultValue + newseniorValue + newChildrenValue + newInfantValue;

    if(total < 7) {

    }
  }); */

  $('#flightsearch').on('submit', function(e) {

    /* serialize array for form inputs */
    var formOneData = $(this).serializeArray();
    console.log(formOneData);

    $.each(formOneData, function(i, field) {
      console.log(field.name, field.value);

      docCookies.setItem(field.name, field.value);
      console.log(field.name + ": " + docCookies.getItem(field.name));
    });

    /* get numeric value for ticket quantity */

    var adult = $("#adult").val();
    var senior = $("#senior").val();
    var children = $("#children").val();
    var infant = $("#infant").val();
    var departlocation = $("#deparloc").val();

    adult = +adult;
    senior = +senior;
    children = +children;
    infant = +infant;

    docCookies.setItem("adult", adult);
    docCookies.setItem("senior", senior);
    docCookies.setItem("children", children);
    docCookies.setItem("infant", infant);
    docCookies.setItem("departlocation", departlocation);

    console.log(docCookies.getItem("adult"));
    console.log(docCookies.getItem("senior"));
    console.log(docCookies.getItem("children"));
    console.log(docCookies.getItem("infant"));

    var quantity = (adult + senior + children + infant);
    console.log("total tickets: " + quantity);

    /* add quantity cookie */
    docCookies.setItem("quantity", quantity);
    console.log("cookie: " + docCookies.getItem("quantity"));

    /* validation */
    if(quantity < 7){
      if(adult >= 1 || senior >= 1) {
      /* if values are null, then display error message */
    //  e.preventDefault();
        switch('') {
          case $("#deparloc").val():
            $(".errormessage").remove();
            $(".loc").before("<li class=errormessage>Please enter your departure location!</li>");
            console.log("Please enter your departure location!");
            break;
          case $("#arriveloc").val():
            $(".errormessage").remove();
            $(".loc").before("<li class=errormessage>Please enter your arrival location!</li>");
            console.log("Please enter your arrival location!");
            break;
          case $("#departdate").val():
            $(".errormessage").remove();
            $(".dates").before("<li class=errormessage>Please enter your departure date!</li>");
            console.log("Please enter your departure date!");
            break;
          }
          if(document.getElementById('roundtrip').checked){

            switch('') {
              case $("#returndate").val():
                $(".errormessage").remove();
                $(".dates").before("<li class=errormessage>Please enter your return date!</li>");
                console.log("Please enter your return date!");
                break;
            }
          } else {
            /* todo: hide the return date entirely when not selected */
          }
        } else {

          $(".errormessage").remove();
          $(".tickets").before("<li class=errormessage>You must have at least one adult or senior ticket.</li>");
        console.log("You must have at least one adult or senior ticket per order.");
      }
    } else {

      $(".errormessage").remove();
      $(".tickets").before("<li class=errormessage>No more than six tickets per customer!</li>");
      console.log("No more than 6 tickets per customer.");
    }
  //e.preventDefault();

  });


  /* page two: search results */

  $('#flightSelection').on('submit', function(d)
  {
      console.log("submit clicked");

    /* serialize array for form inputs */
    var formTwoData = $(this).serializeArray();
    console.log(formTwoData);

    $.each(formTwoData, function(i, field) {
      console.log(field.name, field.value);

      docCookies.setItem(field.name, field.value);
      console.log(field.name + ": " + docCookies.getItem(field.name));
    });


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
          $('#searchsubmit').after('<li id="errormessage">You have information missing! Please select your flight/flights!</li>');
        }
  });

  /* page three: seat selection */

  $('#seatSelection').on('submit', function(e) {
    var seatSelectionData = $(this).serializeArray();
  });

  $('.one a').on('click', function(e) {
    var selected = [];
    var seats;

    e.preventDefault();

    if($(this).hasClass('unavailable')) {
      return;
    }

    /* deny the ability to select
    if there are 6 selected already */

    if($('.one .selected').length > 5) {
      console.log("too manu");
      return;
    }

    /* if selected seat number is greater than ticket number */
    if($('.one .selected').length > docCookies.getItem("quantity")) {
      console.log("Only selected " + docCookies.getItem("quantity") + " tickets.");
      return;
    }
    /* this probably doesn't work it's okay */

    $(this).toggleClass('selected');

    $('.selected', '.rows').each(function() {
      //console.log("Inside flight one seat selection.");

      /* if a parent has the class two, don't add
      to the array. otherwise, add to array. */

      //  console.log("Checking parents of element.");
        if($(this).parents('.two').length) {
          return;
          } else {
              console.log("Has a parent with class one.");
              var seat = $(this).attr('href').substring(1);
              selected.push(seat);
          }
    });

    /* make string of array to put inside input */
    seats = selected.join(", ");
    $('#seatsFlightOne').val(seats);
  //  console.log(selected);
    //console.log(seatsFlightOne);
    docCookies.setItem('seatsFlightOne', seats);
    console.log("flight one seats cookie: " + docCookies.getItem('seatsFlightOne'));

  }); /* end .one function */

  $('.two a').on('click', function(e) {
    var selected = [];
    var seats;

    e.preventDefault();

    if($(this).hasClass('unavailable')) {
      return;
    }

    /* deny the ability to select
    if there are 6 selected already */

    if($('.two .selected').length > 5) {
      console.log("too manu");
      return;
    }

    /* if selected seat number is greater than ticket number */
    if($('.two .selected').length > docCookies.getItem("quantity")) {
      console.log("Only selected " + docCookies.getItem("quantity") + " tickets.");
      return;
    }
    /* this probably doesn't work it's okay */


    $(this).toggleClass('selected');
    $('.selected', '.rows').each(function() {
      console.log("Inside flight two seat selection.");

      /* if a parent has the class one, don't add
      to the array. otherwise, add to array. */

      console.log("Checking parents of element.");
      if($(this).parents('.one').length) {
        console.log("Has a parent with class one.");
        console.log("Selected: " + (selected));
        console.log("Seats two: " + (seatsFlightTwo));

      } else {
        console.log("Has a parent with class two.");
        var seat = $(this).attr('href').substring(1);
        selected.push(seat);
      }
    });

    /* make string of array to put inside input */
    seats = selected.join(", ");
    $('#seatsFlightTwo').val(seats);
    console.log(selected);
    console.log(seatsFlightTwo);
    docCookies.setItem('seatsFlightTwo', seats);
    console.log("flight two seats cookie: " + docCookies.getItem('seatsFlightTwo'));

  }); /* end flight two function */

  /* end seat selection */


  /* page whatever: user information */
  $('#uinformation').on('submit', function(d)
    {
      var fname = $('#fname').val();
      var lname = $('#lname').val();
      var number = $('#number').val();
      var email = $('#email').val();
      var birthday = $('#birthday').val();
      var uinformation = $(this).serializeArray();
      console.log(uinformation);

      $.each(uinformation, function(i, field) {
        console.log(field.name, field.value);
        docCookies.setItem(field.name, field.value);
        console.log(field.name + ": " + docCookies.getItem(field.name));
      });


      if(document.getElementById("fname").value === '' || document.getElementById("lname").value === '' || document.getElementById("number").value === '' || document.getElementById("email") === ''){
        d.preventDefault();
        $('#error2').before('<li id="errormessage">You have information missing!</li>');
      }
      // check if input boxes are empty
      if(document.getElementById("fname").value !== '' && document.getElementById("lname").value !== '' && document.getElementById("number").value !== '' && document.getElementById("email").value !== '')
      {
        if(d.target instanceof HTMLAnchorElement) d.preventDefault();
        // remove the error messages
        $('#errormessage').remove();
        $('#h2card').after('<p id="reciept">RECIEPT: You requested ' + docCookies.getItem('quantity') + ' tickets, so the total for your departing and arrival flight will be $460 + $390 = $850</p>');

        docCookies.setItem("fname", fname, "/traveler/index.html");
        docCookies.setItem("lname", lname, "/traveler/index.html");
        docCookies.setItem("number", number, "/traveler/index.html");
        docCookies.setItem("email", email, "/traveler/index.html");
        docCookies.setItem("birthday", birthday, "/traveler/index.html");

        console.log(docCookies.getItem("lname"));
        console.log(docCookies.getItem("fname"));
        console.log(docCookies.getItem("number"));
        console.log(docCookies.getItem("email"));
        console.log(docCookies.getItem("birthday"));
      }
    });

    $('#zipcode').on('keyup', function(e) {
      var zip = $('#zipcode').val();
      if(zip.length === 5){
        console.log("looks good to me!");}
      $.get('http://api.zippopotam.us/us/' + zip,
        function(data){
          $('#state').val(data.places[0]["state abbreviation"]);
          $('#city').val(data.places[0]["place name"]);
        });
    });

    $('#paymentinformation').on('submit', function(d)
    {

      var paymentInformation = $(this).serializeArray();
      console.log(paymentInformation);

      $.each(paymentInformation, function(i, field) {
        console.log(field.name, field.value);
        docCookies.setItem(field.name, field.value);
        console.log(field.name + ": " + docCookies.getItem(field.name));
      });

      var cardnum = $('#cardnumber').val();
      var expmonth = $('#expmonth').val();
      var expyear = $('#expyear').val();
      var username = $('#username').val();
      var address = $('#address').val();
      var city = $('#city').val();
      var zipcode = $('#zipcode').val();
      var state = $('#state').val();

      if(document.getElementById("cardnumber").value === '' || document.getElementById("expmonth").value === ''
       || document.getElementById("expyear").value === '' || document.getElementById("username").value === ''
      || document.getElementById("address").value === '' || document.getElementById("city").value === ''
      || document.getElementById("zipcode").value === '' || document.getElementById("state").value === '' ){
        d.preventDefault();
        $('#error').before('<li id="errormessage">There is missing information</li>');
        //$('#h2card').after('<p id="reciept">RECIEPT: You requested ' + docCookies.getItem('quantity') + ' tickets, so the total for your departing and arrival flight will be $460 + $390 = $850</p>');
      }

      if(document.getElementById("cardnumber").value !== '' && document.getElementById("expmonth").value !== ''
      && document.getElementById("expyear").value !== '' && document.getElementById("username").value !== ''
      && document.getElementById("address").value !== '' && document.getElementById("city").value !== ''
      && document.getElementById("zipcode").value !== '' && document.getElementById("state").value !== '' ) {
        if(d.target instanceof HTMLAnchorElement) d.preventDefault();
        $('#errormessage').remove();

        docCookies.setItem('cardnum', cardnum, "/payment/index.html");
        docCookies.setItem('expmonth', expmonth, "/payment/index.html");
        docCookies.setItem('expyear', expyear, "/payment/index.html");
        docCookies.setItem('address', address, "/payment/index.html");
        docCookies.setItem('state', state, "/payment/index.html");
        docCookies.setItem('zipcode', zipcode, "/payment/index.html");
        docCookies.setItem('city', city, "/payment/index.html");
        docCookies.setItem('username', username, "/payment/index.html");

        console.log(docCookies.getItem('cardnum'));
        console.log(docCookies.getItem('username'));
        console.log(docCookies.getItem('expmonth'));
        console.log(docCookies.getItem('expyear'));
        console.log(docCookies.getItem('address'));
        console.log(docCookies.getItem('city'));
        console.log(docCookies.getItem('state'));
        console.log(docCookies.getItem('zipcode'));

    }
  });
 departdate = $('#departdate').val()
  console.log(document.cookie);
  $('#personalinsert').append('<b> Your first name: ' + docCookies.getItem('fname') + '</b>' + '<p> Your last name: '
  + docCookies.getItem('lname') + '</p>' + '<p> Your birthday is: ' + docCookies.getItem('birthday') + '</p>'
  + '<p> Your number is: ' + docCookies.getItem('number') + '</p>' + '<p> Your email address is: ' + docCookies.getItem('email') + '</p>' );

  $('#paymentinsert').append('<p> Your card number: ' + docCookies.getItem('cardnum') + '</p>' +
  '<p> The expiration month is: ' + docCookies.getItem('expmonth') + '</p>' +
   '<p> The expiration year is: ' + docCookies.getItem('expyear') + '</p>' +
  '<p> The full name displayed on the card: ' + docCookies.getItem('username') + '</p>' +
  '<p> The address: ' + docCookies.getItem('address') + '</p>' +
  '<p> The city: ' + docCookies.getItem('city') + '</p>' +
  '<p> The zipcode: ' + docCookies.getItem('zipcode') + '</p>' +
  '<p> The state: ' + docCookies.getItem('state') + '</p>');

  $('#flightinsert').append('<p> Your ticket quantity: ' + docCookies.getItem('quantity') + '</p>' +
  '<p> The number of adult tickets: ' + docCookies.getItem('adult') + '</p>' +
  '<p> The number of senior tickets: ' + docCookies.getItem('senior') + '</p>' +
  '<p> The number of children tickets: ' + docCookies.getItem('children') + '</p>' +
  '<p> The number of infant tickets: ' + docCookies.getItem('infant') + '</p>');

  $('#ticketinsert').append('<p> Your departing flight is: ' + docCookies.getItem('departflight') + '</p>' +
  '<p> Your arriving flight is: ' + docCookies.getItem('returnflight') + '</p>');

  $('#seatinsert').append('<p> Your selected seats for flight one: ' + docCookies.getItem('seatsFlightOne') + '</p>' +
  '<p> Your selected seats for flight two: ' + docCookies.getItem('seatsFlightTwo') + '</p>');

  $('#confirmationpg').append('<p> Hello ' + docCookies.getItem('fname') + '</p>' +
  '<p>Quantity of tickets: ' + docCookies.getItem('quantity') + '</p>' + '<p> Adults: ' + docCookies.getItem('adult') + '</p>' +
  '<p> Seniors: ' + docCookies.getItem('senior') + '</p>' + '<p> Children: ' + docCookies.getItem('children') + '</p>' +
  '<p> Have a safe and enjoyable trip!!</p>');
})(jQuery);
