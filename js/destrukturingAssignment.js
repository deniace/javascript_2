// Destrukturing assigmnet 

// kita dapat memecah struktur dari asigment array dan object
// contoh array
const deni = ["halo", "nama", "saya", "deni ace", "lah"];
// element dalam aray dipetakan ke variable
let [nol,satu,dua,tiga] = deni;

// jika ingin skip maka dikosongkan
// let [salam, , , nama] = deni;
// console.log(salam);
// console.log(nama);

// swap variable, menukar isi dariv ariable
console.log(satu);
console.log(dua);
[satu, dua] = [dua, satu];
console.log(dua);
console.log(satu);

//  dijadikan return value pada function

function coba(){
    return [1,2,3];
}

const cobaA = coba();
console.log(cobaA);
const [a,b,c,d] = coba();
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// destrukturing menggunakan rest parameter
const aa = [1,2,3,4,5];
const [ab, ac, ad] = aa;
console.log(ab);

const [restA, ...values] = aa;
console.log(restA);
console.log(values);


// destrukturing object

const mhs = {
    nama:"deni",
    umur : 31
}

// nama variable harus sama dengan nama isi object
console.log(mhs.nama);

const {nama, umur} = mhs;
console.log(nama);
console.log(umur);

// destrukturing object tanpa deklarasi

({nama1, umur1} = {
    nama1: "deni",
    umur1: 21
});

console.log(nama1);

// jika inging nama nya berbeda maka seperti ini
const {nama: n, umur: u} = mhs;
console.log(n);
console.log(u); 


// memberikan nilai default 
const mobil = {
    merk: "Honda",
    roda: 2,
    cc: 12
};

// menambah nilai default ke cc
const {merk, roda, cc = "100"} = mobil;
console.log(cc); 

// bisa di gabung 
const motor = {
    warna:"merah",
    ban:"hitam"
};

const {warna:w, ban:ba, stang:s = "jepir"} = motor;
console.log(w);

// atau bisa juga pakai rest parameter (...)
const manusia = {
    hidung :"ada",
    mata : "ada 2",
    gigi: "lengkap"
};

const {hidung,...man} =manusia;
console.log(man);


// bisa juga dijadikan parametet, jadi dipecah terlebihdahulu
 function cobaFunc({hidung, mata}){
     return mata;
 }

 console.log(cobaFunc(manusia));