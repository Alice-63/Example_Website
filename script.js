var zahl=1;
var guthaben=1200;
var gesamtKosten=0;





function hinzufuegen(produkt, preis)
{
    var kostenDiv =document.getElementById("gesamtKosten");
    document.getElementById("warenkorb").innerHTML+= ' <div>'+ zahl +'.' +' '+ produkt + ' , '+ preis + ' €,' + '</div>'; 
    gesamtKosten += preis;

    kostenDiv.innerHTML= "Gesamt Kosten: " + gesamtKosten + "€";

    zahl++;
}

function kaufen()
{
    if (guthaben>= gesamtKosten)
    {
        var meldung = document.getElementById("meldung");
        meldung.style.backgroundColor="green"   
        meldung.innerHTML=" Sie haben den Artikel gekauft!"
        guthaben -= gesamtKosten;
        document.getElementById("guthaben").innerHTML= "Guthaben:"+ "<b>" + guthaben + " €" + "</b>"
    
        gesamtKosten=0;
        document.getElementById("gesamtKosten").innerHTML="Gesamt: 0";

        zahl=1;
        document.getElementById("warenkorb").innerHTML=""

    }
    else
    {
        var meldung = document.getElementById("meldung");
        meldung.style.backgroundColor="red"   
        meldung.innerHTML=" Sie haben nicht genügend Geld"
    }
}