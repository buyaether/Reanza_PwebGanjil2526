var nama, harga, jumlah, total;
    nama = prompt('Nama Barang'), '';
    harga = prompt('Harga Barang'), '';
    jumlah = prompt('Jumlah yang dibeli'), '';
    total = harga * jumlah;

    document.writeln('<table border="1">');
    document.writeln('<tr>')
    document.writeln('<th>Nama Barang</th><th>Harga Barang</th><th>Jumlah Beli</th><th>Sub Total</th>');
    document.writeln('</tr>')
    document.writeln('<tr>');
    document.writeln('<td>' + nama + '</td><td>' + harga + '</td><td>' + jumlah + '</td><td>' + total + '</td>');
    document.writeln('</tr>');
    document.writeln('<tr>');
    document.writeln('<td colspan="4">Reanza zahran zelmifa</td>');
    document.writeln('</tr>');
    document.writeln('</table>');