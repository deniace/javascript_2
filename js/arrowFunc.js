// Deni Supriyatna / Deni Ace 
// denisupriyatna01@gmail.com

// arrow function ada alh bentuk yang lebih ringkas untuk membuat function

let tampilNama = function(nama){
    alert(" halo "+nama);
}

tampilNama("DENI");

let tampilNama1 = (nama)=>{
    alert(`hellow ${nama}`);
}

tampilNama1("ace");

const tampilNama2 = (nama)=>{return `hellow ${nama}`;}

console.log(tampilNama2('logg'));

// 2 parameter
const tampilNama3 = (nama, waktu)=>{
    return `selamat ${waktu}, ${nama}`;
}

console.log(tampilNama3("deni ace", 'pagi'));

// 1 parameter (implisit return)
const tampilNama4 = nama => `hallow ${nama}`;
console.log(tampilNama4('dracula'));

// jika tidak ada parameter nya maka wajib menuliskan kurung biasa
const tampilNama5 = () => 'Hellow wordl';
console.log(tampilNama5());