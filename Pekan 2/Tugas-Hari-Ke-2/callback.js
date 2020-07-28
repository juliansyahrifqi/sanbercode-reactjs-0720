function readBooks(time, book, callback) {
    console.log(`Saya membaca ${book.name}`);
    setTimeout(function () {
        let sisaWaktu = 0;
        if (time > book.timeSpent) {
            sisaWaktu = time - book.timeSpent;
            console.log(`Saya sudah membaca buku ${book.name}, sisa waktu saya ${sisaWaktu}`);
            callback(sisaWaktu);
        } else {
            console.log('Waktu saya habis');
            callback(time);
        }
    }, book.timeSpent);
}

module.exports = readBooks;