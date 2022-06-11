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

function getMinSum(arrNums) {
    let minSum = 0;
    for (let i = 0; i < (arrNums.length - 1); i++) {
        minSum += arrNums[i];
    }
    return minSum;
}

function getMaxSum(arrNums) {
    let maxSum = 0;
    for (let i = 1; i < arrNums.length; i++) {
        maxSum += arrNums[i];
    }
    return maxSum;
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let sortedArr = arr.sort();
    let minSum = getMinSum(sortedArr);
    let maxSum = getMaxSum(sortedArr);

    console.log(minSum + ' ' + maxSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
