// Bunyi hukum II Newton adalah:
// Percepatan sebuah benda akan sebanding dengan gaya yang diberikan pada benda dan berbanding terbalik dengan massa benda. Arah percepatan benda sama dengan arah gaya total yang diberikan pada benda.
// output = resultan gaya
// input = massa benda dan percepatan benda
// process = menghitung total resultan gaya

STORE "massaBenda" to 600
STORE "percepatanBenda" to 2
STORE resultanGaya EQUALS massaBenda * percepatanBenda
DISPLAY resultanGaya

// store "massaBenda" with value of kg 
// store 'percepatan benda' with value m/s2
// calculate 'massa benda' times 'percepatan benda'
// set 'resultan gaya' with calculation result 
// display 'resultan gaya'

var massaBenda = 600; // dalam satuan kg
var percepatanBenda = 2; // dalam satuan m/s2
var resultanGaya = massaBenda * percepatanBenda
console.log(resultanGaya)