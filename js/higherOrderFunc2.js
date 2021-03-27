// Deni Supriyatna / Deni Ace 
// denisupriyatna01@gmail.com

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
console.log(angka);
// mencari angka yang lebih besar dari 3 menggunakan for
var angka3 = [];
// const newAngka = []; // const array bisa di isi 
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3){
        angka3.push(angka[i]);
    }
}

console.log(angka3);

// mencari angka lebih besar dari 3 menggunakan filter
const angka3filter = angka.filter(function (a) {
    return a >= 3;
});

// memakai arrow function
const angka3arrow = angka.filter(a => a >= 3);

console.log(angka3filter);
console.log(angka3arrow);

// map
const angkaMap = angka.map(a => a * 3);
console.log(angkaMap);

// reduce
// jumlahkan semua angka di dalam array
// parameter ke 2 bisa di isi angka awal
const angkaR = angka.reduce((acumulator, current)=>{
    return acumulator + current;
});

console.log(angkaR);

// method chaining
// menggabungkan beberapa method
const hasil = angka.filter(a => a > 5) // 8,9,9
    .map(a => a * 3)
    .reduce((acc, cur)=>{
        return acc + cur;
    });

console.log(hasil);
console.log(angka);