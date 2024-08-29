// ini javascript
//Javacript for responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//Javacript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0;
const slideInterval = 3000; // Durasi waktu dalam milidetik (3 detik)

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
    currentSlide = i; // Update slide saat tombol diklik
    resetAutoSlide(); // Reset interval saat pengguna melakukan slide manual
  });
});

const autoSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  sliderNav(currentSlide);
};

let autoSlideInterval = setInterval(autoSlide, slideInterval);

const resetAutoSlide = () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, slideInterval);
};

// menampilkan nama sambutan
function replaceName() {
  let name = prompt("Siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

function validateform() {
  // Ambil elemen form dan elemen output
  const form = document.forms["message-form"];
  const outputNama = document.getElementById("sender-nama");
  const outputJenisKelamin = document.getElementById("sender-jenis-kelamin");
  const outputPesan = document.getElementById("sender-pesan");

  // Ambil nilai dari form
  const nama = form["nama"].value.trim();
  const jenisKelamin = form["jenis-kelamin"].value.trim();
  const pesan = form["pesan"].value.trim();

  // Validasi: pastikan semua field terisi
  if (!nama  || !jenisKelamin || !pesan) {
    alert("Semua field harus diisi!");
    return false;
  }

  // Tampilkan nilai di output
  outputNama.textContent = nama;
  outputJenisKelamin.textContent = jenisKelamin;
  outputPesan.textContent = pesan;

  // Mencegah form dari submit default
  return false;
}
