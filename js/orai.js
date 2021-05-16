/*
Gaunamas savaites krituliu kiekis milimetrais.
Jei visa savaite visiskai nelyjo, graziname: "Sausra",
Jei krituliu ne daugiau nei 50mm: "Ganetinai sausa savaite"
Jei krituliu kiekis ne daugiau 200mm, tai: "Lietinga savaite"
Jei krituliu kiekis virs 1000mm, tai "Barsukas turetu sedeti namie"
Visais kitais atvejais: "Labai daug lietaus"
*/

const a = [0, 0, 0, 0, 0, 0, 0];
const b = [0, 0, 10, 5, 7, 0, 0];
const c = [50, 0, 10, 5, 7, 40, 15];
const d = [100, 200, 300, 400, 500, 600, 700];
const e = [100, 100, 100, 100, 100, 100, 100];



function lietus(list) {
    let kiekis = 0;
    for (let i = 0; i < list.length; i++) {
       kiekis += list[i];
    }
    if (kiekis === 0) {
        return `${kiekis}, 'Sausra'`;
    }
    if (kiekis <= 50) {
        return `${kiekis}, 'Ganetinai sausa savaite'`;
    }
    if (kiekis <= 200) {
        return `${kiekis}, 'Lietinga savaite'`;
    }
    if (kiekis > 1000) {
        return `${kiekis}, 'Barsukas turetu sedeti namie'`;
    }
    
    return `${kiekis}, 'Labai daug lietaus'`;
   
}

console.log(lietus(a));
console.log(lietus(b));
console.log(lietus(c));
console.log(lietus(d));
console.log(lietus(e));