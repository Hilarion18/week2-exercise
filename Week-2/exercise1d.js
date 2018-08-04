// Periksa Kuku
// Guru akan memeriksa kuku siswa-siswi sebanyak 40 orang
// Jika guru meneumkan siswa/siswi yang memiliki kuku panjang maka guru akan menghukum siswa/siswi tersebut
// Jika guru tidak meneumkan siswa/siswi yang memiliki kuku panjang maka guru akan memuji siswa/siswi tersebut

// Jumlah siswa yang memiliki kuku panjang
// var kukuPanjang= 2;
// jumlah siswa yang tidak memiliki kuku panjang
// var kukuTidakPanjang= 3;
// if (kukuPanjang) {
//    console.log('guru menghukum '+kukuPanjang+' murid tersebut')
// }
// else (kukuTidakPanjang {
//    console.log('guru memuji '+kukuTidakPanjang+' murid tersebut')
// }

STORE 'murid' with value 1
SET 'kuku' with string

WHILE 'murid' <= 40
    ADD 'murid' by 1
    IF 'kuku' equals to 'panjang'
        DISPLAY 'murid dihukum'
    ELSE 
        DISPLAY 'murid dipuji'
    ENDIF
END WHILE