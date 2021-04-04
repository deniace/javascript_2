// spread opreator notasi berbentuk titik tiga (...)
// fungsinya adalah memecah iterable menjadi single element

// contoh memecah aray dan string
const string1 = "deni ace";
const array1 = ['deni', 'ace', 'susu'];
const array2 = ["ade", "irma", "nasution"];

console.log(string1);
console.log(...string1);
console.log(array1);
console.log(...array1);

// contoh menggabungkan array

// pakai concat
const arrayGabung1 = array1.concat(array2);
console.log("pakai concat");
console.log(arrayGabung1);

// pakai spread operator
const arrayGabung2 = [...array1, ...array2];
console.log("pakei spread operator");
console.log(arrayGabung2);

// bisa juga menambahkan ditengah
const arrayGabung3 = [...array1, "lala", ...array2];
console.log("ini ditambah di tengan");
console.log(arrayGabung3);

// mencopy array
console.log("mencopy aray");
const mhs = [...array1]
console.log(array1);
mhs[0] = "fahar";
console.log(mhs);


//
const liMhs = document.querySelectorAll('li');
console.log(liMhs);

// mengambil text content dari li
const mhs1 = [];
// menggunakan for
console.log("pake for");
for (let i = 0; i < liMhs.length; i++) {
    mhs1.push(liMhs[i].textContent);
}
console.log(mhs1);

// mengambil text content dari li menggunakan map

console.log("pake map");
const mhs2 = [...liMhs].map(l => l.textContent);
console.log(mhs2);

const mhs3 = [...liMhs];
console.log(mhs3);

const nama = document.querySelector(".nama");
console.log(nama);

const namex = [...nama.textContent].map(n => `<span>${n}</span>`).join('');
console.log(namex);

nama.innerHTML = namex;