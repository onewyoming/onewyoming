// for  https://www.hackerrank.com/challenges/js10-loops/problem 
'use strict';
mine();

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s: string): void {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let myConsonants = [];
    for (var i = 0; i < s.length; i++) {
        // console.log(s[i]);
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
        else {
            myConsonants.push(s[i]);
        }
    };
    myConsonants.forEach(function (element) {
        console.log(element);
    });
}

function mine(): void {
    const s = "javascriptloops";
    vowelsAndConsonants(s);
}