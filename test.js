
let tms = process.argv.slice(2);

tms = tms[0];

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

console.log(changedHour + ':' + mint + ':' + secnd);