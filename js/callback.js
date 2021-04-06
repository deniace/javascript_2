// callback
// callback adalah function yang dikirimkan sebagai parameter di fungsi yang lain
// function yang di eksekusi setelah function lain dijalankan

// syncronus callback

// function halo(nama) {
//     alert(`hallo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     let nama = prompt("masukan nama");
//     callback(nama);
// }

// tampilkanPesan(halo);
// // bisa pake arrow function
// tampilkanPesan(nama => alert(`hallo ${nama}`));

const mhs = [{
    "nama": "deni",
    "nrp": "123",
    "email": "deni@mail.com",
    "jurusan": "TI",
    "idDosen": 1,
}, {
    "nama": "susu",
    "nrp": "456",
    "email": "susu@mail.com",
    "jurusan": "SI",
    "idDosen": 2,
}, {
    "nama": "lala",
    "nrp": "789",
    "email": "lala@mail.com",
    "jurusan": "KA",
    "idDosen": 3,
}];

console.log("mulai");
mhs.forEach(m => {
    for (let i = 0; i < 1000000; i++) {
        let date = new Date();
    }
    console.log(m.nama)
});
console.log("selesai");