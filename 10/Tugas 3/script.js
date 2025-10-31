function submitForm(){
    var nama = document.pendaftaran.nama.value;
    var alamat = document.pendaftaran.alamat.value;
    var sekolah = document.pendaftaran.sekolah.value;
    document.pendaftaran.onama.value = nama;
    document.pendaftaran.oalamat.value = alamat;
    document.pendaftaran.osekolah.value = sekolah;
    var ket = "";
    var ket1 = "";
    if (pendaftaran.jurusan1.checked == true){
        ket1 += "Teknik Informatika";
    }
    if (pendaftaran.jurusan2.checked == true){
        ket1 += "Manajemen Informatika";
    }

    document.pendaftaran.ojurusan.value = '' + ket + ket1;
    var ket="";
        if (pendaftaran.jenjang.value == "Diploma"){
            ket = "Diploma";
        } else {
            ket = "Sarjana";
        } document.pendaftaran.ojenjang.value = '' + ket;
    }