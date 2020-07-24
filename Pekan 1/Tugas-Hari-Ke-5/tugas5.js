// Soal No. 1

function halo() {
    return "Halo Sanbers";
}

console.log(halo());


// Soal No. 2

function kalikan(num1, num2) {
    return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);


// Soal No. 3

function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}

var name = "Rifqi Pratama";
var age = 20;
var address = "Komp. Viku A4 No. 26 Bandung";
var hobby = "Main Gitar";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);