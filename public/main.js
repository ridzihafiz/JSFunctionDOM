// run `node index.js` in the terminal
// console.log(`Hello Node.js v${process.versions.node}!`);

console.info('JS Connected');

// DRY dont repeat yourself
// void = tidak me return sesuatu dan langsung di tampilkan di console

// ======================================================== //
function cetakNama() {
  console.info('JS Function');
  console.log('Ridzi');
}
/**
 * Menangkap element HTML button dengan id = btnCetakNama
 * dengan menggunakan variable yg sama dengan id HTML
 */
let btnCetakNama = document.getElementById('btnCetakNama');
// console.info(btnCetakNama)

// Tambahkan function cetakNama ke button cetak nama
btnCetakNama.addEventListener('click', function () {
  cetakNama();
});
// ======================================================== //


/**
 * PARAMETER PADA FUNCTION
 * keyword function + func name + (params1, params2) + {...perintah2}
 * function cetakDataSiswa dibuat untuk testing print ke CONSOLE BROWSER (inspect)
 */
function cetakDataSiswa(username, email, nis) {
  // console.info('Nama Siswa : ', username);
  // console.info('email : ', email);
  // console.info('NIS : ', nis);

  let formatText = `
  =================================
  Nama Siswa    : ${username}
  Email         : ${email}
  NIS           : ${nis}
  =================================
  `;

  console.info(formatText);
}

/** 
 * Menampilkan data ke element HTML (tidak di console lagi)
 * tampilkan data ke element HTML dengan id = listSiswa
*/
function renderToHtml(username, email, nis) {
  // Tangkap element div#listSiswa
  let listSiswa = document.getElementById('listSiswa');

  // inner HTML
  listSiswa.innerHTML += `
  <pre>
  =================================
  Nama Siswa    : ${username}
  Email         : ${email}
  NIS           : ${nis}
  =================================
  </pre>
  `;
}

// Memanggil function(arguments1, arguments2, ...)
// cetakDataSiswa('Ridzi', 'rid@gmail.com', 123);
// cetakDataSiswa('hafiz', 'haf@gmail.com', 465);

// Tangkap element btnTambahSiswa
let btnTambahSiswa = document.getElementById('btnTambahSiswa');

// function untuk ambil input dari prompt
function inputDataSiswa() {
  // ambil input dari prompt
  let username = prompt('Masukkan Nama Siswa : ');
  let email = prompt('Masukkan Email Siswa : ');
  let nis = prompt('Masukkan NIS Siswa : ');

  cetakDataSiswa(username, email, nis);

  renderToHtml(username, email, nis);
}

// Menambahkan event listener ke btnTambahSiswa
btnTambahSiswa.addEventListener('click', function () {
  inputDataSiswa();
});
