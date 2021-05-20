var zahl=1;
var guthaben=1200;
var gesamtKosten=0;





function hinzufuegen(produkt, preis)
{
    var kostenDiv =document.getElementById("gesamtKosten");
    document.getElementById("warenkorb").innerHTML+= ' <div>'+ zahl +'.' +' '+ produkt + ' , '+ preis + ' €,' + '</div>'; 

    kostenDiv.innerHTML= "Guthaben: " + gesamtKosten + "€";

    zahl++;
}

function kaufen()
{

}