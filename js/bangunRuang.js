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