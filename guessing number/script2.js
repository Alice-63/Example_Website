
var zahl= Math.floor(Math.random()*10+1);

function raten()
{
    var input = document.getElementById("input");
    var span =document.getElementById("span");
    var eingegeben=parseInt(input.value);

    if(eingegeben==zahl)
    {
        span.innerHTML="Richtig!";
    }
 else if (eingegeben<zahl)
 {
     span.innerHTML="zu wenig!";
 }
else{
    span.innerHTML="zu viel";
}

}

console.log(zahl);