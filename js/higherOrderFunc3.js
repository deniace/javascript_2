// ambil semua element video
const liJudul = document.getElementsByTagName('li');
// console.log(liJudul.length);

// pilih yang hanya javascript lanjutan
for (let i = 0; i < liJudul.length; i++) {
    if (liJudul[i].value ) {
        console.log("A");
    }    
}

// ambil masing masing durasi video
console.log(liJudul[1].getAttributeNames("data-duration").innerText); 

// console.log(liJudul);

// console.log(liJudul[1].innerHTML);

// console.log(liJudul[1].innerText);

// const playlistJSL = liJudul.filter(function(a){
//     a.innerText == "JAVASCRIPT LANJUTAN";
// });

// console.log(playlistJSL);

// const liJudul1 = document.q`

// ubah durasi jadi int, ubah menit jadi detik 

// jumlahkan semua detik

// ubah formatnya menjadi jam, menit, detik

// simpan kedalam DOM
const spanJumlahVideo = document.querySelector('.jumlah-video');
const spanTotalDurasi = document.querySelector('.total-durasi');

spanJumlahVideo.innerText = 2;
spanTotalDurasi.innerText = "20:30";