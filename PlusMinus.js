'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countPositives(values){
    let res = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] > 0) {
            res++;
        }
    }

    return res;
}

function countNegatives(values){
    let res = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] < 0) {
            res++;
        }
    }

    return res;
}

function countZeros(values){
    let res = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] == 0) {
            res++;
        }
    }

    return res;
}

function plusMinus(arr) {
    let totalNums = arr.length;
    let totalPostives = countPositives(arr);
    let totalNegatives = countNegatives(arr);
    let totalZeros = countZeros(arr);
    
    let positiveRatio = (totalPostives / totalNums).toFixed(6);
    let negativeRatio = (totalNegatives / totalNums).toFixed(6);
    let zeroRatio = (totalZeros / totalNums).toFixed(6);
    
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
