/*
reikia apskaiciuoti kam lygu duoto skaiciaus penkis kartus didesne reiksme, kuri pries tai buvo sumazinta 7 vienetais.

*/

const a = 9;
const b = 19;
const c = -5;
const d = -3.5;
const e = 4;
const f = 2000;

const xa = (a-7)*5;
const xb = (b-7)*5;
const xc = (c-7)*5;
const xd = (d-7)*5;
const xe = (e-7)*5;
const xf = (f-7)*5;

console.log(math(a));
console.log(math(b));
console.log(math(c));
console.log(math(d));
console.log(math(e));
console.log(math(f));

function math(number) {

    return (number-7)*5;
}