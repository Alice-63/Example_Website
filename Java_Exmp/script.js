


// var tc=876;

// if(tc<=365)
// {
//     alert('1.yil Bakimi')
// }
// else if(tc>365 && tc<=365*2)
// {
//  alert('2.Yil Bakimi')
// }
// else if(tc>365*2 && tc<=365*3)
// {
//  alert('3.Yil Bakimi')
// }

var result=prompt('Who is there');


if(result=='ali')
{
    document.getElementById('deger').innerHTML="Hosgeldin Ali";
}
else if(result=='Admin')
{
    var password=prompt('Enter your password: ');
    if(password==1234)
    {
        var pass2=prompt('Second password?')

        if(pass2==123)
        {
            document.getElementById('deger').innerHTML="sifre dogruAdmin";
        }
        else
        {
            document.getElementById('deger').innerHTML="Sifre YanlisAdmin";
        }
    }
    else
    {
        document.getElementById('deger').innerHTML="Sifre Yanlis!";
    }

}
else
{

    document.getElementById('deger').innerHTML="I don't know you";}


