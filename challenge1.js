// include comments showing the **overall goal** in your own words, 
// your **pseudocode**, and your **final solution**. 

// Given an array of strings, print only the strings that have exactly 4 characters.

// array
// print only strings w 4 or more characters --> conditional
// for statement (loop) to look at every string in the array. 

var names = ["Louis", "Ann", "Sara", "Tommy", "Tom"];

for (var i = 0; i < names.length; i++) {
    if (names[i].length >= 4) {
        console.log(names[i])
    }
};

