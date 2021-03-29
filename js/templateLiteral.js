// template literal adalah string literal yang memungkinkan adanya expresion didalam nya
// MDN web Doc

// 3 cara membuat string 
// 1. menggunakan '' (kutip 1)
// 2. menggunakan "" (kutip 2)
// 3. menggunakan `` (back tic)

// contoh
let kutip1 = 'Deni Ace';
let kutip2 = "Deni Ace";
let backtick = `Deni ace`;

// backtick bisa digunakan untuk menulis string 1 baris, multi baris, bisa memasukan ekspresion (embedded expresion),
// bisa membuat tag template

// contoh 
let baris1 = `ini baris 1`;
let multiBaris = 
`ini multi baris 1
ini multi baris 2
ini multi baris 3`;

let embededExpresion = `ini tulisan ${kutip1} ini tulisan lagi`;
let tagTemplate =`ini string ${kutip2}, tag template`;

// contoh multibaris / multiline String
let multiLine1 = 'ini multiline \n ini line 2';
let multiLine2 = `ini line 1
ini line 2`;


// contoh multiline string (HTML Fragment)

const mhs = {
    nama : "Deni Ace",
    umur : 30,
    nrp : "1234",
    email : 'Deni S @gmail.com'
};

let el = '';
el += '<div class="mhs">';
el += '<h2>'+ mhs.nama + '</h2>';
el += '<span class="nrp">' + mhs.nrp + '</span>'
el += '</div>';

let el2 = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el2);
const app = document.getElementById('app');
app.innerHTML = el;
app.innerHTML = el2;

// contoh embeded expresion
console.log(`Halo nama saya ${mhs.nama}`);

// contoh expresion interpolation
let a = 10;
let b = 5;
// pake kutip 1
console.log('jika a = ' + a + ' dan b = ' + b + ' maka hasil penjumlahakn nya adalah ' + (a + b) + '. bukan ' + (2 * b + a));
// jika pake backtick
console.log(`jika a = ${a} dan b = ${b} maka hasil penjumlahannya adalah ${a+b}. bukan ${2*b+a}`);

// contoh embeded 
console.log(`${alert('hallow ')}`);

// contoh menggunakan tenary operator
let x = 10;
console.log(`${x % 2 == 0 ? "genap":"ganjil"}`);
console.log(`${(x == 10 ? "betul":"salah")}`);

// contoh html fragment
const el3 = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span>${mhs.nrp}</span>
</div>`;

console.log(el3);