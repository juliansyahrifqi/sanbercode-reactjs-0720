// Soal No. 1

let luasLingkaran = (r) => {
    const pi = Math.PI;
    let luas = pi * r * r;

    return luas;
};

let kelilingLingkaran = (r) => {
    const pi = Math.PI;
    let keliling = 2 * pi * r;

    return keliling;
};

console.log(luasLingkaran(7));
console.log(kelilingLingkaran(7));

// Soal No. 2

let kalimat = "";

let tambahKata = (a, b, c, d, e) => {
    kalimat = `${a} ${b} ${c} ${d} ${e}`;
};

tambahKata("Saya", "adalah", "seorang", "frontend", "developer");

console.log(kalimat);

// Soal No. 3

class Book {
    constructor(name, totalPage, price) {
        this.name = name;
        this.totalPage = totalPage;
        this.price = price;
    }

    setName() {
        this.name = name;
    }

    setTotalPage() {
        this.totalPage = totalPage;
    }

    setPrice() {
        this.price = price;
    }
}

class Komik extends Book {
    constructor(name, totalPage, price, isColorful) {
        super(name, totalPage, price);
        this.isColorful = isColorful;
    }
}

buku = new Book("Matematika Diskrit", 400, 65000);
komik = new Komik("Tsubasa", 200, 4000, true);

console.log(buku);
console.log(komik);