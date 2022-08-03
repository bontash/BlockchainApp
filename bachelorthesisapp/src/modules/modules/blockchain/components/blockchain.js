var difficulty = 3; //number of zeros required for a hash to be accepted
var maximumNonce = 500000;

var pattern = '';
for (var x=0; x<difficulty; x++) {
    pattern += '0';
}
