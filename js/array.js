let array1 = ["1","2","3"];

const root = document.getElementById('root');

const div1 = document.createElement('div');

    for (let i = 0; i < array1.length; i++) {
        const elementP = document.createElement('p');
        let text = ` Ini document ke ${i}`
        const textP = document.createTextNode(text);
        elementP.append(textP);
        root.appendChild(elementP);
        
    }

// menambah array pada index ke 3
array1[3] = "ini array index ke 3";

console.log(array1);

// ngepush array / nambah array di index terakhir
array1.push("lalala");

console.log(array1);

for (let i = 0; i < array1.length; i++) {
    // const element = array[1];
    console.log(array1[i]);
    
}

// menghapus array terakhir
array1.pop();

for (let i = 0; i < array1.length; i++) {
    // const element = array[i];
    console.log(i, array1[i]);   
}

// menghapus array, index ke 3 
delete array1[3];
console.log(array1);

array2 = ['tata', 'tete', 'toto','titi', 'tutu'];

console.log('sebelum di hapus');
console.log(array2);

// menghapus array dari depan
array2.shift();

console.log('sesudah di hapus dari depan');
console.log(array2);