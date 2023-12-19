// Function to extract the token from cookies
function getTokenFromCookies(cookieName) {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === cookieName) {
      return value;
    }
  }
  return null;
}

async function getUserWithToken() {
  const token = getTokenFromCookies("Login");

  if (!token) {
    Swal.fire({
      icon: "warning",
      title: "Authentication Error",
      text: "Kamu Belum Login!",
    }).then(() => {
      window.location.href = "https://portsafe-apps.github.io/";
    });
    return;
  }

  const targetURL =
    "https://asia-southeast2-ordinal-stone-389604.cloudfunctions.net/getUser";

  const myHeaders = new Headers();
  myHeaders.append("Login", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(targetURL, requestOptions);
    const data = await response.json();

    if (data.status === true) {
      displayUserDataForm(data.data);
      displayUserDataProfile(data.data);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to display user data in the form
function displayUserDataForm(userData) {
  const namaPengawasInput = document.getElementById("namaPengawas");
  const jabatanPengawasInput = document.getElementById("jabatanPengawas");

  if (userData && userData.length > 0) {
    const user = userData[0];
    namaPengawasInput.value = user.nama;
    jabatanPengawasInput.value = user.jabatan;
  } else {
    namaPengawasInput.value = "No user data found";
    jabatanPengawasInput.value = "";
  }
}

// Function to display user data in the user-info div with IDs
function displayUserDataProfile(userData) {
  const namaProfil = document.getElementById("nama-profil");
  const jabatanProfil = document.getElementById("Jabatan-profil");

  if (userData && userData.length > 0) {
      const user = userData[0];
      namaProfil.textContent = user.nama;
      jabatanProfil.textContent = user.jabatan;
  } else {
      namaProfil.textContent = 'No user data found';
      jabatanProfil.textContent = '';
  }
}


getUserWithToken();
