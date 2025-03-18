function prosesNama() {
    const namaInput = document.getElementById('namaInput').value;
    const hasilDiv = document.getElementById('hasil');

    const namaArray = namaInput.split(/\s+/).filter(nama => nama);

    const jumlahKata = namaArray.length;
    const jumlahHuruf = namaArray.reduce((total, nama) => total + nama.length, 0);

    const kebalikan = namaArray.map(nama => nama.split('').reverse().join('')).join(' ');

    let jumlahVokal = 0;
    let jumlahKonsonan = 0;

    const vokal = 'aeiouAEIOU';
    const konsonan = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

    namaArray.forEach(nama => {
        for (let char of nama) {
            if (vokal.includes(char)) {
                jumlahVokal++;
            } else if (konsonan.includes(char)) {
                jumlahKonsonan++;
            }
        }
    });


    hasilDiv.innerHTML = `
        <h2>Hasil Pengolahan</h2>
        <p><strong>Jumlah Kata:</strong> ${jumlahKata}</p>
        <p><strong>Jumlah Huruf:</strong> ${jumlahHuruf}</p>
        <p><strong>Kebalikan Nama:</strong> ${kebalikan}</p>
        <p><strong>Jumlah Vokal:</strong> ${jumlahVokal}</p>
        <p><strong>Jumlah Konsonan:</strong> ${jumlahKonsonan}</p>
    `;
}