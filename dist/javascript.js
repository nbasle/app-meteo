
let ville = "tokyo";
let url1 = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=acae29f95f69093786b2f99f13e629b0";
let url = "http://api.openweathermap.org/data/2.5/weather?q="+ville+"&APPID=acae29f95f69093786b2f99f13e629b0&units=metric";


let button = document.querySelector('#changer');
button.addEventListener('click', () => {
    ville = prompt("Veuillez saisir le nom de la ville");
    console.log('Ville saisie: ', ville);
   
    rafraichirAffichage(ville);
})

const  rafraichirAffichage =(villeChoisie) => {
    url = "http://api.openweathermap.org/data/2.5/weather?q="+villeChoisie+"&APPID=acae29f95f69093786b2f99f13e629b0&units=metric";
    let requete = new XMLHttpRequest();
    requete.open('GET',url);
    
    requete.responseType = 'json';
    requete.send();
    
    requete.onload = function () {
        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200) {
                let reponse = requete.response;
                console.log(reponse);
                let temperatureResp = reponse.main.temp;
                console.log(temperatureResp);
                document.querySelector('#temperature_label').textContent = temperatureResp;
                console.log('Valeur de ville: ',villeChoisie)
                document.querySelector('#ville').textContent = villeChoisie;
            } else {
                alert(" Une erreur est survenue, merci de reesayer plus tard.");
            }
        }
    }
}

rafraichirAffichage(ville);


