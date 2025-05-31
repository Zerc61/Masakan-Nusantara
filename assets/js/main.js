document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessageElement = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form mengirim data ke server (reload halaman)

        // Ambil nilai dari input
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // --- INI BAGIAN PENTING ---
        // Untuk tugas sederhana, kita tentukan username dan password langsung di sini.
        // Gantilah "admin" dan "password123" dengan yang Anda inginkan.
        const validUsername = "admin";
        const validPassword = "1234";
        // --- AKHIR BAGIAN PENTING ---

        if (usernameInput === validUsername && passwordInput === validPassword) {
            // Jika username dan password cocok
            errorMessageElement.textContent = ''; // Kosongkan pesan error jika ada
            alert('Login berhasil! Mengarahkan ke dashboard...'); // Pesan sukses (opsional)
            window.location.href = '../open.html'; // Arahkan ke dashboard.html
        } else {
            // Jika username atau password salah
            errorMessageElement.textContent = 'Username atau password salah!';
            // Optional: Kosongkan field password agar pengguna bisa coba lagi
            document.getElementById('password').value = '';
        }
    });
});