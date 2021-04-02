// 1. HTML Fragment
const mhs = {
    nama:"Deni supriyatna",
    umur: 31,
    nrp: "91911",
    email: "denisupriyatna01@gmail.com"
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
document.body.innerHTML= el;

// 2. looping
// mhs nya ada banyak
const mhs2 = [{
    nama:"Deni supriyatna1",
    umur: 31,
    nrp: "91911",
    email: "denisupriyatna01@gmail.com"
},{
    nama:"Deni supriyatna2",
    umur: 31,
    nrp: "91911",
    email: "denisupriyatna01@gmail.com"
},{
    nama:"Deni supriyatna3",
    umur: 31,
    nrp: "91911",
    email: "denisupriyatna01@gmail.com"
}];

const el2 = `<div class="mhs">
    ${mhs2.map(m => `<ul>
        <li>${m.nama}</li>
        <li>${m.nrp}</li>
    </ul>`).join("") }
</div>`;

document.body.innerHTML = el2;

let a = [1,2,3,4,5,6];
a.map(a => console.log(a));
a.map(function(aa){
    console.log(aa);
});


// 3. conditional (bisa pake tenary operator)

const lagu = {
    judul:"Lagu dalam hening",
    penyanyi: "Vidi",
    feat: "candil"
};

let el3 = `<div>
    <ul>
        <li>${lagu.judul}</li>
        <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})`:""}</li>
    </ul>
</div>`;

document.body.innerHTML = el3;

// 4 nested fragment
const mhs3 = {
    nama:"deni ace",
    semester: 12,
    matakuliah: [
        "matematika",
        "IMK",
        "B. Indonesia",
        "Komputer"
    ]
};

function tampilMatakuliah(matakuliah){
    return `
        <ol>
            ${matakuliah.map(matkul => `<li>${matkul}</li>`).join('')}
        </ol>
    `;
}
 
let el4 = `<div class="mhs">
    <h1>Nama = ${mhs3.nama}</h1>
    <p>Semester = ${mhs3.semester}</p>
    <h4>Mata Kuliah</h4>
    ${tampilMatakuliah(mhs3.matakuliah)}
</div>`;



document.body.innerHTML = el4;