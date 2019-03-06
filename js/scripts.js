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
  return number
}
