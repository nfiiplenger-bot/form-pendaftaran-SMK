document.addEventListener("DOMContentLoaded", function () {

    const formPendaftaran = document.getElementById("formPendaftaran");
    const inputNama = document.getElementById("nama");
    const inputPassword = document.getElementById("password");
    const errorPassword = document.getElementById("errorPassword");
    const selectJurusan = document.getElementById("jurusan");

    inputPassword.addEventListener("input", function () {
        const jumlahHuruf = inputPassword.value.length;

        if (jumlahHuruf > 0 && jumlahHuruf < 8) {
            errorPassword.textContent = "⚠️ Password kurang panjang (" + jumlahHuruf + "/8 karakter)";
            errorPassword.style.color = "#dc2626";
            inputPassword.style.borderColor = "#dc2626";
        } else if (jumlahHuruf >= 8) {
            errorPassword.textContent = "✅ Password sudah aman";
            errorPassword.style.color = "#16a34a";
            inputPassword.style.borderColor = "#16a34a";
        } else {
            errorPassword.textContent = "";
            inputPassword.style.borderColor = "#cbd5e1";
        }
    });

    formPendaftaran.addEventListener("submit", function (event) {

        if (inputPassword.value.length < 8) {
            alert("Gagal Mendaftar! Password wajib minimal 8 karakter.");
            event.preventDefault();
            inputPassword.focus();
            return;
        }

        const jurusanDipilih = selectJurusan.options[selectJurusan.selectedIndex].text;

        const yakin = confirm(
            "Cek kembali data pendaftaranmu:\n\n" +
            "Nama    : " + inputNama.value + "\n\n" +
            "Jurusan  : " + jurusanDipilih + "\n\n" +
            "Klik OK jika data sudah benar."
        );

        if (!yakin) {
            event.preventDefault();
        }
    });

    formPendaftaran.addEventListener("reset", function () {
        errorPassword.textContent = "";
        inputPassword.style.borderColor = "#cbd5e1";
    });

    const semuaKotak = document.querySelectorAll("input, select, textarea");

    semuaKotak.forEach(function (kotak) {

        kotak.addEventListener("focus", function () {
            if (kotak.type !== "radio" && kotak.type !== "checkbox") {
                kotak.style.transform = "scale(1.01)";
            }
        });

        kotak.addEventListener("blur", function () {
            kotak.style.transform = "scale(1)";
        });

    });

    // --- SCRIPT POPOVER PROFIL ---
    const btnProfil = document.getElementById("btnProfil");
    const profilePopover = document.getElementById("profilePopover");
    const profileContainer = document.querySelector(".profile-menu-container");

    btnProfil.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (profilePopover.style.display === "block") {
            profilePopover.style.display = "none";
        } else {
            profilePopover.style.display = "block";
        }
    });

    document.addEventListener("click", function (event) {
        if (!profileContainer.contains(event.target)) {
            profilePopover.style.display = "none";
        }
    });

});