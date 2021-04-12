// mengambil data menggunakan ajax jquery
// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=243b9ca0&s=avenger",
//     success: response => console.log(response)
// });

// mengambil data mengginakan vanila javascript
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.status == 200) {
//         if (xhr.readyState == 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open("get", "http://www.omdbapi.com/?apikey=243b9ca0&s=avenger");

// xhr.send();

// fetch
// fetch("http://www.omdbapi.com/?apikey=243b9ca0&s=avenger")
//     .then(response => response.json())
//     .then(response => console.log(response));

// promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event asyncronus dimasa yang akan datang
// janji = (terpenuhi / ingkar janji)
// states = (fullfilled / rejected / pending)
// callback = (resolve / reject / finally)
// aksi = (then / catch)
// contoh 1

let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve("janji telah ditepati");
    } else {
        reject("ingkar janji");
    }
});

janji1
    .then(
        response => console.log("oke ! " + response)
    ).catch(
        response => console.log("not oke " + response)
    );

const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve("janji ditepati setelah 2 detik");
        }, 2000);
    } else {
        setTimeout(() => {
            reject("ingkar janji setelah 2 detik");
        }, 2000);
    }
});


console.log("mulai");
console.log(janji2.then(resp => console.log(resp)).catch(resp => console.log(resp)));
console.log("selesai");


const janji3 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve("ditepati janji 3");
        }, 2000);
    } else {
        setTimeout(() => {
            reject("di tolak janji 3");
        }, 2000);
    }
});

console.log(janji3.finally((e) => {
    console.log("sudah selesai")
}).then(resp => console.log(resp)).catch(e => console.log(e)));


const janji4a = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve([{
                judul: "lagi",
                pengarang: "iwan",
                harga: "2500"
            }]);
        }, 3000);
    } else {
        setTimeout(() => {
            reject([{
                kota: 'jakarta',
                suhu: "30 derajat"
            }]);
        }, 3000);
    }
});

const janji5 = new Promise(function (resolve, reject) {
    if (ditepati) {
        setTimeout(() => {
            resolve([{
                judul: "lagi",
                pengarang: "iwan",
                harga: "2500"
            }]);
        }, 3000);
    } else {
        setTimeout(() => {
            reject([{
                kota: 'jakarta',
                suhu: "30 derajat"
            }]);
        }, 3000);
    }
});

console.log("janji 4");
console.log("janji all");
Promise.all([janji3, janji4a, janji5])
    .finally(() => {
        console.log("sudah selesai");
    })
    .then(r => {
        console.log("ini dari promise all");
        console.log(r);
    })
    .catch(e => console.log(e));

function test(a, b) {
    setTimeout(() => {
        b("asu");
    }, 2000);
}
const janji6 = new Promise(test);
janji6.then(r => console.log("ini then " + r))
    .catch(function (e) {
        console.log("ini catch " + e);
    });

console.log(janji5.then(r => {
    console.log("ini janji 5 paling bawah");
    console.log(r)
}).catch(
    e => console.log(e)
));


const film = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve([{
                judul_film: "dara dara patah",
                tahun: "2019"
            }]);
        }, 2000);
    } else {
        reject("tidak ada film");
    }
});

const cuaca = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve([{
            kota: "jakarta",
            suhu: 20
        }]);
    } else {
        reject("salah");
    }
});

Promise.all([film, cuaca])
    .then(function (r) {
        console.log(r)
    });
Promise.all([film, cuaca]).then(
    (response) => {
        const [film, cuaca] = response;
        console.log("ini dari dalem promise bawah");
        console.log(film);
        console.log(cuaca);
    }
);