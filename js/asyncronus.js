// javascript is a single-threaded, non-blocking, asyncronous and concurent language

console.log("satu");
console.log("dua");
console.log("tiga");

function kalikan(a, b) {
    return a * b;
}

function hitungLuas(sisi) {
    return kalikan(sisi, sisi);
}

function cetakLuasKotak(sisi) {
    const luas = hitungLuas(sisi);
    console.log(luas);
}

cetakLuasKotak(5);

console.log("satu");
setTimeout(
    function () {
        console.log('dua');
    }, 0
);
console.log("tiga");