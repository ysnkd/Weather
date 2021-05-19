var sehirButon = document.getElementById('sehirBtn');
var sehirText = document.getElementById('sehirTxt');
const info = document.getElementById('info');

sehirButon.addEventListener('click', function () {
    HavaDurumuGetir(sehirText.value);
})

function HavaDurumuGetir(city)
{
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=09632203c901d820121c90566c720bfa')
    .then(response => response.json())
            .then(data => { console.log(data)


            })

    

}
