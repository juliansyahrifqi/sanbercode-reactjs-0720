// Soal No. 2

var readBooksPromise = require('./promise.js');
const readBooks = require('./callback.js');

var books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    }
];

// Jawaban No. 2
// Nested If

function readBook() {
    readBooksPromise(10000, books[0])
        .then(function (sisaWaktu) {
            console.log(sisaWaktu);
            if (sisaWaktu != 0) {
                readBooksPromise(sisaWaktu, books[1])
                    .then(function (sisaWaktu) {
                        console.log(sisaWaktu);
                        if (sisaWaktu != 0) {
                            readBooksPromise(sisaWaktu, books[2])
                                .then(function (sisaWaktu) {
                                    console.log(sisaWaktu);
                                })
                        }
                    })
            }
        })
}

readBook();

// Jawaban 2
// Fungsi Rekursif

function rekursif(t, i) {
    readBooksPromise(t, books[i])
        .then(function (sisaWaktu) {
            console.log(sisaWaktu);
            if (sisaWaktu != 0) {
                if ((i + 1) < books.length) {
                    rekursif(sisaWaktu, i + 1)
                } else {
                    console.log('Selesai');
                }
            }
        })
}

rekursif(10000, 0);