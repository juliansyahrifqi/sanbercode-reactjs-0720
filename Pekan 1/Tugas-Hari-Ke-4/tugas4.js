// Soal No. 1
var i = 0;

console.log("LOOPING PERTAMA");
while (i <= 20) {
    console.log(i + " - " + " I love coding");
    i += 2;
}

var i = 20;

console.log("LOOPING KEDUA");
while (i >= 0) {
    console.log(i + " - " + 'I will become a front end developer');
    i -= 2;
}

// Soal No. 2
var i;
var hasil;

for (i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 2 == 1) {
        hasil = 'I love coding';
    } else if (i % 2 == 1) {
        hasil = 'Santai';
    } else if (i % 2 == 0) {
        hasil = 'Berkualitas';
    }

    console.log(i + " - " + hasil);
}

// Soal No. 3
var pagar = '';

for (var i = 1; i <= 7; i++) {
    console.log(pagar = pagar + '#');
}

// Soal No. 4
var kalimat = "saya sangat senang belajar javascript";

var arr = kalimat.split(" ");

console.log(arr);

// Soal No. 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah.sort();

for (var i = 0; i < 5; i++) {
    console.log(daftarBuah[i]);
}