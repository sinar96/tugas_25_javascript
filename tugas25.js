function deretAngka() {
    var angka0 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya : ", angka0.toString());
    
    var angka1 = angka0.sort();
    console.log("Ascending : ", angka1.toString());

    var angka2 = angka0.reverse();
    console.log("Descending : ", angka2.toString());

    let angka3 = angka0.filter(angka0 => {
        return angka0 > 10;});
    console.log("Filter > 10 : ", angka3.toString());


}
deretAngka();