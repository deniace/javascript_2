// Deni Supriyatna / Deni Ace 
// denisupriyatna01@gmail.com

// Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope)
// di dalam function tersebut (MDN)

// Closure adalah sebuah function ketika memiliki akses ke parent nya,
// meskipun parent scope nya sudah selesai di eksekusi (w3school)

// Closure adalah sebuah funtion dikembalikan oleh function yang lain ,
// yang memiliki akses kelingkungan saat ia diciptakan (Code Fellow)

// closure adalah sebuah function yang sebelumnya sudah memiliki data,
// hasil dari function yang lain (Techsith)

// latihan Closure

function init(){
    let nama = "deni";
    let umur = 30;
    function tampilNama(){
        // let nama = "ace"; 
        console.log(nama);
        console.log(umur);
    }
    console.dir(tampilNama);
    // tampilNama();
}

init();

function init2(){
    let nama = "deni2";
    function tampilNama(){
        console.log(nama);
    }
    return tampilNama;


}
let paggilNama2 = init2();
paggilNama2();

function init3(){
    return function(nama){
        console.log(nama);
    }
}

let panggilNama3 = init3();
panggilNama3("Deni Ace 3");
panggilNama3("Deni Ace 3 a");