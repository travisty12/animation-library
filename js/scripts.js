function fact( i ) {
  if ( i == 0 ) {
    return 1;
  } else {
    return i * fact( i - 1 );
  }
}
function fib1( n ) {
  var number = 1;
  for ( var i = 1; i < ( Math.floor( ( n - 1 ) / 2 ) + 1 ); i++ ) {
    var product = 1;
    for ( var j = i + 1; j < 2 * i + 1; j++ ) {
      product *= ( n - j );
    }
    number += product / fact( i );
  }
  return number;
}

function fib2( n ) {
  var number = 0;
  for ( var i = 1; i < Math.ceil( ( n / 2 ) + 1 ); i++ ) {
    number += ( Math.pow(5, (i - 1)) * (fact(n) / ( fact(2*i - 1) * fact(n - (2*i - 1)))) )
  }
  number /= Math.pow(2, (n-1));
  return number;
}

function getPos(div) {
  var rect = div.getBoundingClientRect();
  $(div).hide();
  $(".clone").css("animation","none");
  $(".clone").css("background-image",$(div).css("background-image"));
  $(".clone").css("left",rect.left + "px");
  $(".clone").css("top",(rect.top - 300) + "px");

  $(".clone").css("animation","spinOut 1s linear forwards");
  return;
}

function buildTri(place,numRow) {
  var inner = "";
  var row = "";
  for (var z = 0; z < numRow; z++) {
    inner += "<div class='row' id='" + place + "row" + z + "'></div>";
  }
  $("#" + place).append(inner);
  for (var i = 0; i < $("#" + place)[0].childElementCount; i++) {
    row = "";
    for (var j = 0; j < i + 1; j++) {
      if (place != "pascComb") {
        row += "<div id='" + place + "row" + i + "col" + j + "'><h1>" + ((fact(i)) / (fact(j) * fact(i - j))) + "</h1></div>";
      } else if (place == "pascComb") {
        row += "<div class='combElement' id='" + place + "row" + i + "col" + j + "'><h1 class='par'>(</h1><div class='comb'><h1>" + i + "</h1><h1>" + j + "</h1></div><h1 class='par'>)</h1></div>";
      }
    }
    $("#" + place + "row" + i).append(row);
  }
  return;
}




$(document).ready(function() {
  buildTri("example",3);
  $("#example").fadeIn();
  $("#example").css("display","flex");
  buildTri("pascNum",10);
  buildTri("pascComb",10)
  // $(".jelly").click(function() {
  //   getPos(this);
  //
  // });
  $("#example").click(function() {
    $(".explanation").fadeOut();
    $(this).addClass("spinOut");
    setTimeout(function() {
      $("#example").css("display","none");
      $(this).css("height","0");
      $("#text1").fadeIn();
      $("#text2").fadeIn();
      $("#pascNum").css("display","flex");
      $("#pascNum").css("top","0");
      $("#pascNum").addClass("spinIn");
      setTimeout(function() {
        $("#pascNum").removeClass("spinIn");
        // setTimeout(function() {
        //   $("#pascNumrow0").append("<div id='line1'></div>");
        //   $("#line1").css("position","relative");
        //   $("#line1").css("left","20px");
        //
        // }, 1000);
      }, 1000);

    }, 1000);
  });
  $("#pascNum").click(function() {
    $(this).addClass("spinOut");
    setTimeout(function() {
      $(this).hide();
      $(this).css("height","0");
      $("#text1").fadeOut();
      $("#text2").fadeOut();
      setTimeout(function() {
        $("#text3").fadeIn();
        $("#text4").fadeIn();
        $("#nck").fadeIn();
      }, 400);
      $("#nck").css("display","flex");
      $("#pascComb").css("display","flex");
      $("#pascComb").css("top","0");
      $("#pascComb").addClass("spinIn");
      setTimeout(function() {
        $("#pascComb").removeClass("spinIn");

      }, 1000);

    }, 1000);
  });
});
