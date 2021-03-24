// Deni Supriyatna / Deni Ace 
// denisupriyatna01@gmail.com
// latihan higher order function


// adaha function yang beroprasi pada function yang lain. baik digunakan sebagai argumen maupun return value
// eloquentjavascript.net


function kerjakanTugas(matakuliah, selesai){
    console.log("telah selesai mengerjakan tugas "+matakuliah);
    selesai();
}

function selesai(){
    alert("selamat");
}

kerjakanTugas("MTK", selesai);

setTimeout(function() {
    console.log("timeout");
}, 1000);

let total = 0, count = 1;

while (count <= 10) {
    console.log(total);
    total += count;
    count++;
}

console.log(total);

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

repeatLog(3);