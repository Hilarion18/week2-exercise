/*
1. Let's Form a Sentence

Problem

Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +. Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

Skeleton Code

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
Output

JavaScript is awesome and I love it!
*/
var word = 'JavaScript ';
var second = 'is ';
var third = 'awesome ';
var fourth = 'and ';
var fifth = 'I ';
var sixth = 'love ';
var seventh = 'it! ';
console.log(word+second+third+fourth+fifth+sixth+seventh)

/*
2. Index Accessing - 1 by 1

Problem

Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

Hints

Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata tersebut!

Skeleton Code

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord; // do your own!
var thirdWord; // do your own!
var fourthWord; // do your own!
var fifthWord; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
Output

First Word: wow
Second Word: JavaScript
Third Word: is
Fourth Word: so
Fifth Word: cool
*/

var sentence = 'wow JavaScript is so cool';
var firstWord = (sentence[0]+sentence[1]+sentence[2])
var secondWord =  (sentence[4]+sentence[5]+sentence[6]+sentence[7]+sentence[8]+sentence[9]+sentence[10]+sentence[11]+sentence[12]+sentence[13])
var thirdWord = (sentence[15]+sentence[16])
var fourthWord = (sentence[18]+sentence[19])
var fifthWord = (sentence[21]+sentence[22]+sentence[23]+sentence[24])

console.log('First Word: '+firstWord);
console.log('Second Word: '+secondWord);
console.log('Third Word: '+thirdWord);
console.log('Fourth Word: '+fourthWord);
console.log('Fifth Word: '+fifthWord);

/*
3. Breaking Sentence (Again) using Substring

Problem

Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

Skeleton Code

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3; // do your own!
var thirdWord3; // do your own!
var fourthWord3; // do your own!
var fifthWord3; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
Output

First Word: wow
Second Word: JavaScript
Third Word: is
Fourth Word: so
Fifth Word: cool
*/
var word3 = 'wow JavaScript is so cool';
var firstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17)
var fourthWord3 = word3.substring(18, 20)
var fifthWord3 = word3.substring(21, 25)

console.log('First Word: '+firstWord3);
console.log('Second Word: '+secondWord3);
console.log('Third Word: '+thirdWord3);
console.log('Fourth Word: '+fourthWord3);
console.log('Fifth Word: '+fifthWord3);

/*
4. Breaking Sentence (yet Again) and Count Each Length

Problem

Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

Skeleton Code

Buatlah variable-variable baru untuk menyimpan panjang string, dan ubah console dibawah untuk menampilkan nya.

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word.substring(0, 3);
var secondWord4; // do your own!
var thirdWord4; // do your own!
var fourthWord4; // do your own!
var fifthWord4; // do your own!

var firstWordLength = exampleFirstWord4.length;
// create new variables around here

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
Output

First Word: wow, with length: 3
Second Word: JavaScript, with length: 10
Third Word: is, with length: 2
Fourth Word: so, with length: 2
Fifth Word: cool, with length: 4
*/

var word3 = 'wow JavaScript is so cool';
var firstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17)
var fourthWord3 = word3.substring(18, 20)
var fifthWord3 = word3.substring(21, 25)

console.log('First Word: '+firstWord3+', with length: '+firstWord3.length);
console.log('Second Word: '+secondWord3+', with length: '+secondWord3.length);
console.log('Third Word: '+thirdWord3+', with length: '+thirdWord3.length);
console.log('Fourth Word: '+fourthWord3+', with length: '+fourthWord3.length);
console.log('Fifth Word: '+fifthWord3+', with length: '+fifthWord3.length);