// Event listener untuk memastikan DOM telah dimuat
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a'); // Mengambil semua link di dalam navbar
    const content = document.getElementById('content'); // Elemen utama untuk menampilkan konten dinamis

    // Objek yang berisi konten untuk setiap bagian
    const sections = {
        home: `
            <section class="content-section home-content">
                <h2 class="center-text">Landasan Teori</h2>
                <div class="materials">
                    <div class="material">
                        <img src="images/docker-logo.png" alt="Docker Logo" class="material-logo">
                        <h3>Docker</h3>
                        <p>Docker adalah platform untuk menjalankan aplikasi dalam container, memastikan konsistensi di berbagai lingkungan.</p>
                    </div>
                    <div class="material">
                        <img src="images/azure-logo.png" alt="Microsoft Azure Logo" class="material-logo">
                        <h3>Microsoft Azure</h3>
                        <p>Azure adalah platform cloud yang menyediakan layanan komputasi, penyimpanan, dan jaringan secara global.</p>
                    </div>
                    <div class="material">
                        <img src="images/elastic-logo.png" alt="Elastic Stack Logo" class="material-logo">
                        <h3>Elastic Stack</h3>
                        <p>Elastic Stack adalah alat untuk pencarian, analitik, dan visualisasi data, terdiri dari Elasticsearch, Logstash, dan Kibana.</p>
                    </div>
                    <div class="material">
                        <img src="images/wrr-logo.png" alt="Weighted Round Robin Logo" class="material-logo">
                        <h3>Weighted Round Robin</h3>
                        <p>Algoritma ini mendistribusikan permintaan ke server berdasarkan bobot yang telah ditentukan.</p>
                    </div>
                    <div class="material">
                        <img src="images/wlc-logo.png" alt="Weighted Least Connection Logo" class="material-logo">
                        <h3>Weighted Least Connection</h3>
                        <p>Algoritma ini mengarahkan permintaan ke server dengan koneksi aktif paling sedikit, mempertimbangkan bobotnya.</p>
                    </div>
                </div>
            </section>
        `
    };

    // Menampilkan konten "Landasan Teori" secara default
    content.innerHTML = sections.home;

    // Menambahkan event listener untuk setiap link di navbar
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah perilaku default link
            const target = this.getAttribute('data-target'); // Mengambil target dari atribut data-target
            content.innerHTML = sections[target]; // Mengubah konten berdasarkan target
        });
    });
});
