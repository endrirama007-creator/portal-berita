// FUNGSI TOMBOL BACA SELENGKAPNYA
const tombolBaca = document.querySelectorAll('.tombol-baca');
tombolBaca.forEach(tombol => {
  tombol.addEventListener('click', function() {
    const isiLengkap = this.previousElementSibling;
    if (isiLengkap.style.display === 'block') {
      isiLengkap.style.display = 'none';
      this.textContent = 'Baca Selengkapnya';
    } else {
      isiLengkap.style.display = 'block';
      this.textContent = 'Tutup';
    }
  });
});

// FUNGSI DARK MODE
const tombolTema = document.getElementById('tombolTema');
if(localStorage.getItem('tema') === 'gelap') {
  document.body.classList.add('dark');
  tombolTema.classList.remove('fa-solid fa-moon');
  tombolTema.classList.add('fa-solid fa-sun');
}

tombolTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    tombolTema.classList.remove('fa-solid fa-moon');
    tombolTema.classList.add('fa-solid fa-sun');
    localStorage.setItem('tema', 'gelap');
  } else {
    tombolTema.classList.remove('fa-solid fa-sun');
    tombolTema.classList.add('fa-solid fa-moon');
    localStorage.setItem('tema', 'terang');
  }
});

// NOTIFIKASI BERGANTI
const daftarNotif = [
  { judul: "📢 Berita Utama", isi: "Pemerintah umumkan program bantuan sosial baru." },
  { judul: "⚡ Teknologi", isi: "AI mulai diterapkan dalam pelayanan publik." },
  { judul: "🏃 Olahraga", isi: "Timnas Indonesia bersiap hadapi turnamen Asia." },
  { judul: "💡 Ekonomi", isi: "UMKM lokal makin dikenal di pasar internasional." },
  { judul: "🎬 Hiburan", isi: "Film Indonesia raih penghargaan di luar negeri." },
  { judul: "🏥 Kesehatan", isi: "Cek kesehatan gratis mulai berjalan di seluruh wilayah." },
  { judul: "🌱 Lingkungan", isi: "Gerakan tanam 1 juta pohon dimulai di Jawa Timur." },
  { judul: "🚆 Transportasi", isi: "Moda Raya Surabaya siap beroperasi penuh Juli nanti." }
];

const kotakNotif = document.getElementById('kotakNotif');
const judulNotif = document.getElementById('judulNotif');
const isiNotif = document.getElementById('isiNotif');
let urutan = 0;

function tampilkanNotif() {
  const data = daftarNotif[urutan];
  judulNotif.textContent = data.judul;
  isiNotif.textContent = data.isi;

  kotakNotif.classList.add('show');
  setTimeout(() => kotakNotif.classList.remove('show'), 4000);
  urutan = (urutan + 1) % daftarNotif.length;
}

setTimeout(tampilkanNotif, 1500);
setInterval(tampilkanNotif, 5000);

