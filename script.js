document.getElementById("oblicz").onclick = function() {Oblicz()};

function Oblicz() {
    var wysokosc = parseInt(document.getElementById("wysokosc").value);
    var srednica = parseInt(document.getElementById("srednica").value);

    var wynik = wysokosc * (srednica/2)*(srednica/2)*3.141592;
    var wynik = Math.floor(wynik);
    if(wynik < 1000000)
    document.getElementById("wynik").innerHTML = wynik.toString() + " cm^3";
    else
    document.getElementById("wynik").innerHTML = "za dużo :(";
}