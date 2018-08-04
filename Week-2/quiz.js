function boxNUmber(input) {
    //finding the mid value
    var mid = Math.ceil(input /2 );
    var output ='';
    
    //storing value to output from 1 to mid (first half of the result)
    for (var i = 0; i < input; i++) {
        for (var j = 1; j <= mid; j++) {
            output += j;
        }

        var k;
    //enforcing two  digit mid for an even input and one digit mid for an odd input
    //Store it to k index
        if (input % 2 === 0) {
            k = mid;
        } else {
            k = mid - 1;
        }
    //storing value to output from k to 1 (second half of the result)
        for (k; k >= 1; k--) {
            output += k;
        }
    
    //creating a new line
        output += '\n';
    }

    return output;

}


//Test Cases:
console.log(boxNUmber(5));
console.log('-------------');
console.log(boxNUmber(6));
console.log('-------------');
console.log(boxNUmber(7));

/*
12321
12321
12312
12321
12321
*/

/*
123321
123321
123321
123321
123321
123321
*/

/*
1234321
1234321
1234321
1234321
1234321
*/