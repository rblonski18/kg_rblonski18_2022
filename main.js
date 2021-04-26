
// receive command line arguments
var cliArgs = process.argv.slice(2);

// initialize dictionary for numbers to their respective words
var dict = {
    '1': "One",
    '2': "Two",
    '3': "Three",
    '4': "Four",
    '5': "Five",
    '6': "Six",
    '7': "Seven",
    '8': "Eight", 
    '9': "Nine", 
    '0': "Zero" 
}

// initialize return string
let result = "";

// iterate through command line arguments
for(let i = 0; i < cliArgs.length; i++) {

    //initialize current string to store phonetic string
    let currentString = "";
    
    // split string into array of characters
    let arg = cliArgs[i].split("");

    // iterate through characters in each number 
    for(let j = 0; j < arg.length; j++) {

        // grab current digit 
        let currChar = arg[j];

        // append corresponding entry in the dictionary
        currentString += dict[currChar];
    }
    // append currentString onto resulting string
    result += currentString;

    // account for comma formatting
    if(i < cliArgs.length-1) {
        result += ",";
    }

}

// return
console.log(result);