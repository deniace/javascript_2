// for ..of
// creates a loop iterating over iterable object
// bisa mengulang atau menelusuri object2 yang iterable
// macam macam iteable object 
// String, array, arguments/nodelist, typedarray, map, sed dan user defined iterable

// array
const mhs = ['deni', 'ace', 'susu'];

// for
console.log("for ========================");
for (let i = 0; i < mhs.length; i++) {
    console.log(mhs[i]);
}

console.log("for each ===========================");
// for each
mhs.forEach(m => console.log(m));

mhs.forEach(function (params) {
    console.log(`ini foreach pake function ${params}`);
});

mhs.forEach(function (a) {
    return console.log(`coba foreach lagi ${a}`);
});

// mengambil index dari foreach 
mhs.forEach(function (m, index) {
    return console.log(`ini foreach pake index, nama ${m} index ke ${index}`);
});

mhs.forEach((m, i) => {
    console.log(`ini pake index ${i} mahasiswa ${m}`);
});


console.log("for of ==============================");

for (const m of mhs) {
    console.log(m);
}

for (let mahasiswa of mhs) {
    console.log("ini coba for of lagi " + mahasiswa);
}
for (mahasiswa of mhs) {
    console.log("ini coba for of lagi " + mahasiswa);
}

// for of string
const negara = "indonesia";
for (neg of negara) {
    console.log(neg);
}

// for of tidak ada index nya bisa di akalin dengan method entries()
for (m of mhs.entries()) {
    console.log(m);
}

// bisa langsung di destructuring
for ([i, m] of mhs.entries()) {
    console.log(`index ke ${i} mhs ${m}`);
}

// nodelist
const liNama = document.querySelectorAll(".nama");
console.log(liNama);

// coba pake foreach
liNama.forEach(nama => console.log("linama " + nama.textContent));

// coba pake for of
for (nama of liNama) {
    console.log(nama.innerHTML);
}

for (n of liNama) {
    console.log(n);
}

// arguments 
console.log("arguments ==================================");

// misalnya ada fungsi 
function jumlah() {
    // ketika tidak ada argument nya maka nilai yang dikirim ke function akan tertampung di argument
    console.log(arguments);
    let total = 0;
    for (a of arguments) {
        console.log(a);
        total += a;
    }
    return total;
}

console.log(jumlah(1, 2, 3, 4, 5));


// for ..in
// creates a loop only iterating over enumerable 

console.log("for ..in ========================================");
let mobil = {
    nama: "kijang",
    merk: "inova",
    tahun: 2015
}

for (m in mobil) {
    // key dari object
    console.log(m);
    // isi/value dari object
    console.log(mobil[m]);
    // key dan value
    console.log(`key = ${m}, value = ${mobil[m]}`);
}
console.log(mobil.nama);