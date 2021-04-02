// destructuring function

// misalnya ada function yang return nya aray
function jumlahKali(a, b) {
    return [a + b, a * b];
}

// cara biasa
let jmlKali = jumlahKali(2, 3);
console.log(jmlKali);

let jumlah = jumlahKali(2, 3)[0];
// let kali = jumlahKali(2, 3)[1];
// console.log(jumlah, kali);

const [jml, kl] = jumlahKali(2, 4);
console.log(jml, kl);


function kalkulasi(a, b) {
    return [a + b, a - b, a * b, a / b];
}

// ditambah dengan default value
// const [tambah = 'tidak ada', kurang = 'tidak ada', kali1 = 'tidak ada', bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(bagi);

// untuk urutan yang tidak berpengaruh gunakan object

function kalkulasi1(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

let {
    bagi,
    kali,
    kurang,
    tambah
} = kalkulasi1(2, 4);

console.log(bagi);

// destructur function argument

let mhs = {
    nama: "deni ace",
    umur: 21,
    email: "denisupriyatna@gmail.com",
    nilai: {
        tugas: 75,
        uts: 80,
        uas: 90
    }
};

// tidak menggunakan destrukturng
function cetakNama(nama, umur) {
    return `halo nama saya ${nama}, dan saya berumur ${umur} tahun`;
}

console.log(cetakNama(mhs.nama, mhs.umur));

// menggunakan destructuring 
function cetakNama1({
    nama,
    umur
}) {
    return `halo nama saya ${nama}, dan saya berumur ${umur} tahun`;
}

console.log(cetakNama1(mhs));

// destructuring bersarang
function cetakNama2({
    nama,
    umur,
    nilai: {
        tugas,
        uts,
        uas
    }
}) {
    return `halo nama saya adalah ${nama}, dan umur saya adalah ${umur}, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakNama2(mhs));