// membuat object pada javascript
// 1. Object literal 

// property adalah nilai didalam object
// method adalah fungsi didalam object
// Problem nya adalah kurang efektif untuk object dalam jumlah banyak

let mhs = {
    nama: 'Deni Supriyatna',
    energi: 10,
    makan: function(nasi){
        this.energi = this.energi + nasi;
        console.log(`halo ${this.nama}, selamat makan`);
    }
}

// object literal
let mobil = {
    merk:"Honda",
    speed:0,
    topSpeed: 100,
    // membuat method
    jalan: function(percepatan){
        this.speed += percepatan;
        console.log('mobil jalan');
    },
    rem: function(brake){
        this.speed-=brake;
        console.log("mobil ngerem");
    }
}

// 2. membuat object dengan function declaration

// template object
function Mahasiswa(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi){
        this.energi += porsi;
        console.log(`Hallow ${this.nama}, selamat makan`);
    }

    mahasiswa.main = function (jam){
        this.energi-=jam;
        console.log(`Hallow ${this.nama}, selamat main`);
    }
    return mahasiswa;
}

// membuat object baru
let deni = Mahasiswa('Deni ace', 12);
let ace = Mahasiswa('ace', 9);

// object function declaration
function Mobil1(merk, speed, topSpeed){
    let mobil = {};
    mobil.merk = merk;
    mobil.speed = speed;
    mobil.topSpeed = topSpeed;

    mobil.jalan = function(percepatan){
        this.speed +=percepatan;
        console.log("ayo maju");
    }
    mobil.rem = function(brake){
        this.speed -= brake;
        console.log('ngerem');
    }
    return mobil;
}

let ferari = Mobil1('ferary', 0, 200);


// membuat object method untuk efisiensi 
const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Hallow ${this.nama}, selamat makan`);
    },
    main: function (jam){
        this.energi-=jam;
        console.log(`Hallow ${this.nama}, selamat main`);
    }
}

/**
 * object mahasiswa
 *  kekurangan object ini yaitu jika kita menambah function pada object method maka harus
 *  ditambah pula atau didaftarkan pada obect mahasiswa
 * @param {*} nama 
 * @param {*} energi 
 */
function MahasiswaBaru(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = methodMahasiswa.makan;
    mahasiswa.main = methodMahasiswa.main;
    return mahasiswa;
}

let mhsBaru1 = MahasiswaBaru('tatang', 19);

// object.create mirip seperti pewarisan pada java OOP
// pewarisan sifat2 dari parent
function MahasiswaObjCreate(nama, energi){
    let mahasiswa = Object.create(methodMahasiswa); // untuk menurunkan sifat dari parent
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let mhsObjCreate = MahasiswaObjCreate('nana', 100);

// 3. Object Constructor
// menggunakan keyword new

function Mahasiswa1(nama, energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
    }

    this.main = function(jam){
        this.energi -= jam;
    }
}

let deniAce = new Mahasiswa1('deni ace', 12);

// Object construktor
function Mobil2(merk, speed){
    this.merk = merk;
    this.speed = speed;

    this.maju = function(percepatan){
        this.speed += percepatan;
        console.log('maju');
    }
    this.mundur = function(permunduran){
        this.speed -= permunduran;
        console.log('mundur');
    }
}

let supra = new Mobil2('supra', 40);

// prototipe
// let this = Object.create(mhsProto.prototype); // dibelakang layar ini
function mhsProto(nama,enerty){
    this.nama = nama;
    this.energi = enerty;
}

mhsProto.prototype = function(){}