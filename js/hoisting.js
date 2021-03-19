// execution context dan hoisting & scope

// console.log(nama);
// var nama = "deni ace";
// console.log(nama);



// var umur = '30';
// console.log(sayHellow());

// function sayHellow(){
//     return `hallo nama saya ${nama}, umur saya ${umur}`;
// }

// function membuat local execution context
// yang di dalam nya terdapat creation dan execution context
// window 
// arguments
// hoisting

// scope itu mancari ke definisi variable terdekat

// var nama = "deni ace";
// var username ='deni_ace';
// function cetakUr(username){
//     var instagramUrl = 'https://instagram.com/';
//     return instagramUrl + username;
// };
// console.log(cetakUr(username));


// function a(){
//     console.log('ini a');
    
//     function b(){
//         console.log('ini b');
    
//         function c(){
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();


// argument 
// jika sebuah fungsi di kirimi parametaer tapi di fungsinya tidak ada maka akan di tampung di variable argument

// var aa = "deni ace";

// function cobaArgument(){
//     console.log(arguments);
//     var iniVarDiArgument = "var a dari var";
//     return iniVarDiArgument + aa;
// }

// console.log(cobaArgument('deni test', 'tests'));

// latihan hoisting 

function satu(){
    var nama = 'Deni ace ace';
    console.log(nama);
}

function dua(){
    console.log(nama);
};

console.log(nama);
var nama = 'erik';
satu();
dua('dodi');
console.log(nama);