/*
1. Menyusun Barisan Bintang

Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

Skeleton Code

var rows1; // input the number of rows

// do loops to display asterisks in the console.
Output

jika rows1 = 5

*
*
*
*
*
*/

function angka(input){
    var deret;
    for (var y = 0; y < input; y++){
        deret = '*'
        console.log(deret)
        }
    }
angka(5)


/*
2. Menyusun Barisan Bintang Dengan Nested Looping

Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

Skeleton Code

var rows2; // input the number of rows

// do loops to display asterisks in the console.
Output

jika rows2 = 5

*****
*****
*****
*****
*****
*/

function angka(input){
    var deret;
    for (var a = 0; a < input; a++){
        deret = '******'
        console.log(deret)
        }
    } 
angka(5)

/*
3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

Skeleton Code

var rows3; // input the number of rows

// do loops to display asterisks in the console.
Output

jika rows3 = 5

*
**
***
****
*****
*/

function angka(input)
for (var y =1; y <= input ; y++) {
  var kolom='';
  for(var x =1 ; x <= y; x++)
  {
    kolom = kolom +'*';
  }
  console.log(kolom);
}
angka(5)