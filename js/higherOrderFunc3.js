// ambil semua element video
const liJudul = document.getElementsByTagName('li');
// console.log(liJudul.length);
const videos = Array.from( document.querySelectorAll('[data-duration]'));
// pilih yang hanya javascript lanjutan
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil masing masing durasi video
.map(item => item.dataset.duration)

// ambil durasi, ubah jadi int / float , menit ubah jadi detik
.map(waktu => {
    // 10:30 => [10, 30]
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// jumlahkan semua detik
.reduce((total, detik) => total + detik);

// ubah format nya jadi jam, menit, detik 
const jam = Math.floor(jsLanjut / 3600);
let sisaDetik = jsLanjut - (jam * 3600);

const menit = Math.floor(sisaDetik/60);
const detik = sisaDetik - (menit * 60);

const jumlahVideio = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

// simpan kedalam DOM
const spanJumlahVideo = document.querySelector('.jumlah-video');
const spanTotalDurasi = document.querySelector('.total-durasi');

spanJumlahVideo.textContent = `${jumlahVideio} video`;
// spanJumlahVideo.innerText = 2;
spanTotalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;;
// spanTotalDurasi.innerText = "20:30";



















// for (let i = 0; i < liJudul.length; i++) {
//     if (liJudul[i].value ) {
//         console.log("A");
//     }    
// }

// ambil masing masing durasi video
// console.log(liJudul[1].getAttributeNames("data-duration").innerText); 

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
