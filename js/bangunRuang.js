// mengambol element root
const root = document.getElementById('root');

// membuat element H1
const h1 = document.createElement('h1');
const textH1 = document.createTextNode('Latihan Bangun ruang');
h1.appendChild(textH1);
root.appendChild(h1);

// membuat h2 segitiga
const h2SegiTiga = document.createElement('h2');
const textH2Segitiga = document.createTextNode('Segitiga');
h2SegiTiga.appendChild(textH2Segitiga);
root.appendChild(h2SegiTiga);

// membuat label input
const label = document.createElement('label');
label.setAttribute('for','panjang')
const textLabel = document.createTextNode('Masukan panjang');
label.appendChild(textLabel);
root.appendChild(label);

// membuat input panjang
const inputPanjang = document.createElement('input');
inputPanjang.setAttribute('type',"number");
inputPanjang.setAttribute('name',"panjang");
inputPanjang.id = 'panjang';
root.appendChild(inputPanjang);

// membuat br   
root.appendChild(document.createElement('br'));

// membuat label input alas
const labelInputAlas = document.createElement('label');
labelInputAlas.setAttribute('for', 'alas');
const textLabelInputAlas = document.createTextNode('Masukan Alas');
labelInputAlas.appendChild(textLabelInputAlas);
root.appendChild(labelInputAlas);

// membuat input alas
const inputAlas = document.createElement('input');
inputAlas.setAttribute('type', 'number');
inputAlas.setAttribute('name', 'alas')
inputAlas.id = 'alas';
root.appendChild(inputAlas);

// membuat br 
root.appendChild(document.createElement('br'));

// membuat tombol hitung
const buttonHitung = document.createElement('button');
const textBtnHitung = document.createTextNode('hitung');
buttonHitung.id = 'hitung';
buttonHitung.appendChild(textBtnHitung);
root.appendChild(buttonHitung);

root.appendChild(document.createElement('br'));
// membuat div hasil
const divHasil = document.createElement('div');
root.appendChild(divHasil);


// membuat event pada tombol hitung
buttonHitung.addEventListener('click', function(){
    let p = inputPanjang.value;
    let a = inputAlas.value;
    let luas = p * a / 2;
    divHasil.innerHTML = "<p>Luas segitiga dengan panjang " + p + " dan alas " + a + " adalah = " + luas + "</p>";
});

// membuat h2 persegi panjang
const h2PersegiPanjang = document.createElement('h2');
const textH2PersegiPanjang = document.createTextNode('Persegi Panjang');
h2PersegiPanjang.appendChild(textH2PersegiPanjang);

root.appendChild(h2PersegiPanjang);

// bikin label panjang
const labelPanjangPersegi = document.createElement('label');
labelPanjangPersegi.setAttribute('for', 'panjangPersegi');
const textLabelPanjangPersegi = document.createTextNode('Masukan Panjang');
labelPanjangPersegi.appendChild(textLabelPanjangPersegi);
root.appendChild(labelPanjangPersegi)

// bikin input element
const inputPanjangPersegi = document.createElement('input');
inputPanjangPersegi.setAttribute('type', 'number');
inputPanjangPersegi.setAttribute('name', 'panjang');
inputPanjangPersegi.id = "panjangPersegi";
root.appendChild(inputPanjangPersegi);

// membuat br
root.appendChild(document.createElement('br'));

// bikin label lebar
const labelLebarPersegi = document.createElement('label');
labelLebarPersegi.setAttribute('for', 'lebarPersegi');
const textLabelLebarPersegi = document.createTextNode('Lebar Persegi');
labelLebarPersegi.appendChild(textLabelLebarPersegi);
root.appendChild(labelLebarPersegi);

// bikin input
const inputLebarPersegi = document.createElement('input');
inputLebarPersegi.setAttribute('type', 'number');
inputLebarPersegi.id  = "inputLebarPersegi";
root.appendChild(inputLebarPersegi);

// create br
root.appendChild(document.createElement('br'));

// btn hitung
const btnHitungPersegi = document.createElement('button');
const textBtnHitungPersegi = document.createTextNode('Hitung');
btnHitungPersegi.appendChild(textBtnHitungPersegi);
root.appendChild(btnHitungPersegi);

// membuat div hsil
const hasilPersegi = document.createElement('div');
root.appendChild(hasilPersegi);

btnHitungPersegi.addEventListener('click', function(){ 
    let p = inputPanjangPersegi.value;
    let l = inputLebarPersegi.value;
    let luasPErsegi = p * l;
    hasilPersegi.innerHTML = `luas dari peresgi panjang adalah ${luasPErsegi}`;
});