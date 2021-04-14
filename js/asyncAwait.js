const coba = new Promise((resolve) => {
    resolve('Selesai');
});

console.log(coba);

const coba1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("selesai 1");
    }, 2000);
});

coba1.then(resp => console.log(resp));

// menggunakan async await

// 1 buat function
function cobaAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("selesai in function");
        }, 3000);
    });
}

let coba2 = cobaAsync();

coba2.then((a) => console.log(a));

// 
async function cobaAsync1() {
    let cob = await cobaAsync();
    console.log(cob);
}

cobaAsync1();

function asu() {
    return new Promise((resolve, reject) => {
        const time = 5999;
        if (time < 5000) {
            setTimeout(() => {
                resolve("ini selesai dari time");
            }, time);
        } else {
            setTimeout(() => {
                reject("ditolak dari time");
            }, 4999);
        }
    });
}

let asu2 = new Promise((resolve, reject) => {
    const time = 5999;
    if (time < 5000) {
        setTimeout(() => {
            resolve("ini selesai dari asu 2");
        }, time);
    } else {
        setTimeout(() => {
            reject("ditolak dari asu 2");
        }, 4999);
    }
});

// ini pake then and cathc
asu2.then((resp) => {
    console.log("then " + resp);
}).catch((e) => {
    console.log("cathc " + e);
});

// ini pake async and await
async function cobaAsynt2() {
    try {
        let cob = await asu();
        console.log(cob);
    } catch (error) {
        console.log(error);
    }
}

cobaAsynt2();