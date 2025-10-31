function calculator(operasi) {
    var bil1 = parseFloat(document.getElementById("bil1").value);
    var bil2 = parseFloat(document.getElementById("bil2").value);
    var hasil;

    if (isNaN(bil1) || isNaN(bil2)) {
        alert("Mohon masukkan angka yang valid!");
        return;
    }

    if (operasi === "tambah") {
        hasil = bil1 + bil2;
        alert("Hasil Penjumlahan = " + bil1 + " + " + bil2 + " = " + hasil);
    } else if (operasi === "kurang") {
        hasil = bil1 - bil2;
        alert("Hasil Pengurangan = " + bil1 + " - " + bil2 + " = " + hasil);
    } else if (operasi === "kali") {
        hasil = bil1 * bil2;
        alert("Hasil Perkalian = " + bil1 + " * " + bil2 + " = " + hasil);
    } else if (operasi === "bagi") {
        hasil = bil1 / bil2;
        alert("Hasil Pembagian = " + bil1 + " / " + bil2 + " = " + hasil);
    }
}

function bersih() {
    document.getElementById("bil1").value = "";
    document.getElementById("bil2").value = "";
    document.getElementById("bil1").focus();
}