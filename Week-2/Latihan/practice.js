var password = 'a' // sudah benar apa tidak

// Huruf besar minimal 1
// Huruf kecil minimal 1
// Angka minimal 1

var hasNumber = false
var has5Length = false

var counter = 0
while ( counter < password.length ) {

  // PUNYA NOMOR ATAU TIDAK
  if ( password[counter] >= 0 ) {
    hasNumber = true
  }

  // APAKAH PANJANGNYA MINIMAL 5
  if ( password.length >= 5 ) {
    has5Length = true
  }

  counter = counter + 1
}

if ( hasNumber === true && has5Length === true ) {
  console.log('password sudah benar')
} else if ( hasNumber === true && has5Length === false) {
  console.log('panjang password masih kurang')
} else if ( hasNumber === false && has5Length === true ) {
  console.log('harus minimal ada 1 angka')
} else {
  console.log('password masih salah')
}