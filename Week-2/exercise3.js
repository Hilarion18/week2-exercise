var nama = 'Palsu';
var peran = 'Tabib';

if (nama == null && peran == null)  
{
  console.log('nama dan peran harus diisi!')
}
else if (peran == null)
{
   console.log('Hello ' + nama + ' pilih peranmu untuk bermain game')
}
else if (peran == 'Ksatria')
{
  console.log('Selamat datang di Dunia Proxytia, ' + nama)
  console.log('Halo '+ peran +' '+ nama +  ' kamu dapat menyerang dengan senjatamu!')
}
else if (peran == 'Tabib')
{
  console.log('Selamat datang di Dunia Proxytia, ' + nama)
  console.log('Halo '+ peran +' '+ nama + ' kamu akan membantu temanmu yang terluka.')
}
else if (peran == 'Penyihir')
{
  console.log('Selamat datang di Dunia Proxytia, ' + nama)
  console.log('Halo '+ peran +'_'+ nama +  ' ciptakan keajaiban yang membantu kemenanganmu!')
}