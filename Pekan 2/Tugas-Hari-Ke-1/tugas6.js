//Soal No. 1
var objekDataPeserta = {
    nama: "Asep",
    "jenis kelamin": "Laki-laki",
    hobi: "Baca buku",
    "tahun lahir": 1992
};

console.log(objekDataPeserta);

// Soal No. 2

var buah = [{
        nama: "Strawberry",
        warna: "Merah",
        "ada bijinya": "Tidak",
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        "ada bijinya": "Ada",
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        "ada bijinya": "Ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        "ada bijinya": "Tidak",
        harga: 5000
    }
];

console.log(buah[0]);

// Soal No. 3

var dataFilm = [];

function tambahData(nama, durasi, genre, tahun) {
    var data = {
        "nama": nama,
        "durasi": durasi,
        "genre": genre,
        "tahun": tahun
    };

    dataFilm.push(data);
}

tambahData("Money Heist", "20 Menit", "Action", 2020);

console.log(dataFilm);

// Soal No. 4

// Release 0
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}

var sheep = new Animal("Shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// Release 1

class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
    }

    yell() {
        return "Auooo";
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
        this.cold_blooded = true;
    }

    jump() {
        return "Hop-hop";
    }
}

var sungokong = new Ape("Kera Sakti");

console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);
console.log(sungokong.yell());


var kodok = new Frog("Buduk");

console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);
console.log(kodok.jump());


// Soal No. 5

class Clock {

    constructor({
        template
    }) {
        this.template = template;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }
}

var clock = new Clock({
    template: 'h:m:s'
});
clock.start();