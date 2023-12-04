const inputFotoObservasi = document.getElementById('fotoObservasi');
const imgHasilFotoObservasi = document.getElementById('hasilFotoObservasi');

function ambilFotoObservasi() {
    const fileInput = inputFotoObservasi.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        const fotoObservasiBase64 = reader.result;

        // Set the source of the image directly
        imgHasilFotoObservasi.src = fotoObservasiBase64;

        // You can use fotoObservasiBase64 in other ways (e.g., send to the server)
        console.log(fotoObservasiBase64);
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

        // Set the input value with the base64-encoded string
        inputFotoPerbaikan.value = fotoPerbaikanBase64;

        document.getElementById('hasilFotoPerbaikan').src = fotoPerbaikanBase64;
    };

    if (fileInput) {
        reader.readAsDataURL(fileInput);
    }
}

document.getElementById('fotoPerbaikan').addEventListener('change', ambilFotoPerbaikan);

