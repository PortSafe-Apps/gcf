const inputFotoObservasi = document.getElementById('fotoObservasi');
const imgHasilFotoObservasi = document.getElementById('hasilFotoObservasi');

function ambilFotoObservasi() {
    const fileInput = inputFotoObservasi.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        const fotoObservasiBase64 = reader.result;
        imgHasilFotoObservasi.src = URL.createObjectURL(fileInput);
        simpanFotoObservasi(fotoObservasiBase64);

        document.getElementById('hasilFotoObservasi').src = fotoObservasiBase64;
    };

    if (fileInput) {
        reader.readAsDataURL(fileInput);
    }
}

document.getElementById('fotoObservasi').addEventListener('change', ambilFotoObservasi);

const inputFotoPerbaikan = document.getElementById('fotoPerbaikan');
const imgHasilFotoPerbaikan = document.getElementById('hasilFotoPerbaikan');

function ambilFotoPerbaikan() {
    const fileInput = inputFotoPerbaikan.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        const fotoPerbaikanBase64 = reader.result;
        imgHasilFotoPerbaikan.src = URL.createObjectURL(fileInput);
        simpanFotoPerbaikan(fotoPerbaikanBase64);
    };

    if (fileInput) {
        reader.readAsDataURL(fileInput);
    }
}
document.getElementById('fotoPerbaikan').addEventListener('change', ambilFotoPerbaikan);
