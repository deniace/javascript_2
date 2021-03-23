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


// map array
let arrayMahasiswa = ["deni", "ace", "toboki"];

// maping jumlah huruf
let jumlahHuruf = arrayMahasiswa.map(function(nama){
    return nama.length;
});

console.log(jumlahHuruf);

// deni
let jumlahHuruf2 = arrayMahasiswa.map((nama)=>{
    return nama.length;
});
console.log(jumlahHuruf2);

// dari sandika
// implisit return
let jumlahHuruf3 = arrayMahasiswa.map(nama => nama.length);

console.log(jumlahHuruf3);

// mengembalikan atau mereturn object
// menggunakan tambahan () pada {}
// jika mengembalikan object yang nilainya sama dengan property nya tulis 1 saja
let jumlahHuruf4 = arrayMahasiswa.map(nama => ({nama, jmlHuruf:nama.length}));

console.log(jumlahHuruf4);
console.table(jumlahHuruf4);


// konsep this pada arrow function

// construktor function
const Mahasiwaa = function(){
    this.nama = "deni ace";
    this.umur = 30;
    // console.log(this);
    this.sayHellow = function(){
        console.log(`hallow nama saya ${this.nama}, umur saya ${this.umur} tahun`);
    };
}

let mhs = new Mahasiwaa();

// arrow function 
// tidak semua consturctor function bisa diubah jadi arrow function
const MahasiswaArrow = function(){
    this.nama = "deni ace";
    this.umur = 30;
    // method bisa di ubah jadi arrow function
    this.sayHellow = function(){
        console.log(`Hallow nama saya ${this.nama}, umur saya ${this.umur} tahun`);
    };
    this.sayHellow1 = ()=>{console.log(`Hallow nama saya ${this.nama}, umur saya ${this.umur} tahun 1`);}
};

let mhsArrow = new MahasiswaArrow();

// arrow function tidak memiliki konsep this
const mhs2 = {
    nama:"Deni ACe",
    umur:30,
    sayHellow: ()=>{
        console.log(this);
    }
}

// // contoh method langsung jalan 
// const Mahasiswa1 = function(){
//     this.nama = "deni ace";
//     this.umur = 30;
//     this.sayHellow = function(){
//         console.log(`hallo ${this.nama}, umur saya ${this.umur} tahun`);
//     }

//     // agar tidak terjadi hoisting maka gungakan arrow function
//     setInterval(()=>{
//         console.log(this.umur++);
//     },500);
// }

// let mhs3 = new Mahasiswa1();


const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let size = "size";
    let caption = "caption";
    
    if (this.classList.contains(size)){
        // menukar isi 
        [size, caption] = [caption, size];
    }
    this.classList.toggle(size);
    setTimeout(() => {
        this.classList.toggle(caption);
    }, 600);
});