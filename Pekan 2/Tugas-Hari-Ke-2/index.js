// Soal No. 1

var readBooks = require('./callback.js');

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
    },
    {
        name: 'Komik',
        timeSpent: 1000
    }
];

// Jawaban No. 1
// Nested if

readBooks(10000, books[0], function (sisaWaktu) {
    console.log(sisaWaktu);
    if (sisaWaktu != 0) {
        readBooks(sisaWaktu, books[1], function (sisaWaktu) {
            console.log(sisaWaktu);
            if (sisaWaktu != 0) {
                readBooks(sisaWaktu, books[2], function (sisaWaktu) {
                    console.log(sisaWaktu);
                    if (sisaWaktu != 0) {
                        readBooks(sisaWaktu, books[3], function (sisaWaktu) {
                            console.log(sisaWaktu);
                        });
                    }
                });
            }
        });
    }
});

// Jawaban No. 1
// Fungsi Rekursif

function rekursif(t, i) {
    readBooks(t, books[i], function (sisaWaktu) {
        console.log(sisaWaktu);
        if (sisaWaktu != 0) {
            if ((i + 1) < books.length) {
                rekursif(sisaWaktu, i + 1);
            } else {
                console.log('Selesai');
            }
        }
    });
}

rekursif(10000, 0);