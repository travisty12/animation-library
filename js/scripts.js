function fact( i ) {
  if ( i == 0 ) {
    return 1;
  } else {
    return i * fact( i - 1 );
  }
}
function fib( n ) {
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
      if (place == "pascNum") {
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
  buildTri("pascNum",10);
  buildTri("pascComb",10)
  // $(".jelly").click(function() {
  //   getPos(this);
  //
  // });
  $("#pascNum").click(function() {
    $(this).addClass("spinOut");
    setTimeout(function() {
      $(this).hide();
      $(this).css("height","0");
      $("#pascComb").css("display","flex");
      $("#pascComb").css("top","0");
      $("#pascComb").addClass("spinIn");
      setTimeout(function() {
        $("#pascComb").removeClass("spinIn");

      }, 1000);

    }, 1000);
  });
});
