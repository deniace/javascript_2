// rest parameter 
// merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// rest parametr di tempatkan di akhir parameter biasa
// contoh
function myFunc(a, b, ...rest) {
    return `a = ${a}, b = ${b}, rest = ${rest}`;
}

function myFunct1(a, b) {
    return a;
}

function myFunc2(...rest) {
    return rest;
    // rest parameter menampung nilai yang bentuk nya menjadi array
};

function myFunc3() {
    return arguments;
    // arguments menampung nilai tapi bentuknya arguments bukan array
    // bisa di ubah jadi array
    // return Array.from(arguments);
    // return [...arguments];
}


console.log(myFunc(1, 2, 3, 4, 5, 6, 7));
console.log(myFunc2(1, 2, 3, 4, 5, 6, 7));
console.log(myFunc3(1, 2, 3, 4, 5, 6, 7));

// jumlahkan
function jumlah(...angka) {
    let jml = 0;
    // pake for
    for (let i = 0; i < angka.length; i++) {
        jml += angka[i];
    }
    return jml;
}

function jumlah1(...angka) {
    // pake reduce
    return angka.reduce((total, nilai) => {
        return total + nilai;
    });
}

function jumlah2(...angka) {
    // pake for of
    let jml = 0;
    for (ang of angka) {
        jml += ang;
    }
    return jml;
}
console.log(jumlah(1, 2, 3, 4, 5, 6));
console.log(jumlah1(1, 2, 3, 4, 5, 6));
console.log(jumlah2(1, 2, 3, 4, 5, 6));

const kelompok1 = ["deni", "ace", "supri", 'yatna', 'ana'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);


// Object destruncturing 
let team = {
    pm: "deni",
    fe1: "aa",
    fe2: "ee",
    be: "oo",
    devOps: "do"
};

const {
    pm,
    ...myTeam
} = team;

console.log(pm);
console.log(myTeam);

// filtering
function myFilter(fi, ...args) {
    let a = args.filter(v => typeof v === fi);
    let b = [];

    return a;
}

console.log(myFilter('number', 1, 3, "oo", 11, false, true));