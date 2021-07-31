var p = prompt("İsminizi yazınız.");
var isim = document.getElementById("myName");
isim.innerHTML = p;
var c = document.getElementById("myClock");
function tarih() {
    var d = new Date();
    var yıl = d.getFullYear();
    var ay = d.getMonth()+1;
    var gun = d.getDate();
    var saat = d.getHours();
    var dakika = d.getMinutes();
    var saniye = d.getSeconds();
    if(saniye<10){
        saniye="0"+ saniye;
    }
    if (dakika < 10) {
        dakika = "0" + dakika;
    }
    
    setTimeout(tarih,1000);
    var g =d.getDay();
    switch (g) {
        case 0:
          g = "Pazar";
          break;
        case 1:
          g = "Pazartesi";
          break;
        case 2:
           g = "Salı";
          break;
        case 3:
          g = "Çarşamba";
          break;
        case 4:
          g = " Perşembe";
          break;
        case 5:
          g = "Cuma";
          break;
        case 6:
          g = "Cumartesi";
      }
      c.innerHTML = gun + ":" + ay + ":" + yıl + " " + saat + ":" + dakika+":"+saniye+" "+g;
}
tarih();
