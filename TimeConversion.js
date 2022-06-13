'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(tms) {
    tms = tms.toString();

    let changedHour = '';

    let lastprt = tms.slice(-2);

    let timeBrkDown = tms.split(':');

    let hour = parseInt(timeBrkDown[0]);
    let mint = timeBrkDown[1];
    let secnd = timeBrkDown[2].substring(0,2);

    if (lastprt == 'AM' && hour == 12) {
        changedHour = '00';
    } else if (lastprt == 'AM' && (hour >= 1 && hour <= 11)) {
        changedHour = hour.toString();
    } else if (lastprt == 'PM' && hour == 12) {
        changedHour = hour.toString();
    } else if (lastprt == 'PM' && (hour >= 1 && hour < 12)) {
        changedHour = (12 + hour).toString();
    }

    if (changedHour.length < 2) {
        changedHour = '0' + changedHour;
    }

    return (changedHour + ':' + mint + ':' + secnd);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
