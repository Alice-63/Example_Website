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
    var wk = document.getElementById("warenkorbNEU");

    if(getComputedStyle(wk, null).display == "none")
    {
        wk.style.display="block";
    }
  
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


        reset();



    }
    else
    {
        var meldung = document.getElementById("meldung");
        meldung.style.backgroundColor="red"   
        meldung.innerHTML=" Sie haben nicht genügend Geld"
    }
}

function warenkorbShow ()
{
    var wk = document.getElementById("warenkorbNEU");

    if(getComputedStyle(wk, null).display == "none")
    {
        wk.style.display="block";
    }
    else
    {
        wk.style.display="none";
    }
}

function reset()
{
    
    gesamtKosten=0;
    document.getElementById("gesamtKosten").innerHTML="Gesamt: 0";

    zahl=1;
    document.getElementById("warenkorb").innerHTML=""
}