// alert("ciao, sono il sito creato da dj 2828");

console.log('Ei! Ma ru sei un Hacker...');

// alert("ricarica SEMPRE ogni pagina, o premi Ctrl + F5");
// alert("AVVERTENZA IMOPORTANTE: clicca su AVVERTENZA");

// var NomeGiocatore = window.prompt("metti il tuo nome");

// if (NomeGiocatore == "") {
//     var a = 1;
// }

// if (a == 1 ) {
//  alert("a causa del tuo nome non potremo farti entrare. caricamento in corso...");
//  window.location = "http://dj2828.github.io/sito";

// }

// else {
//    document.getElementById("benvenuto").innerHTML = "benvenuto" + (" ") + NomeGiocatore ;
// }

function tutorial () {
    var ok = window.prompt('sei sicuro?');
    if (ok == 'si') {
        window.open('http://dj2828.github.io/sito/tutorial.html');
    }
    else{
        alert('ok');
    };
}

// kookie
function getCookie(nome) {
    let cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(nome + '=') == 0) {
        return cookie.substring(nome.length + 1, cookie.length);
      }
    }
    return "";
}

let inf = getCookie('inf');
if (inf == '0' || inf == null){
    let bnv = getCookie('bnv');
    if (bnv == '1'){
    
    }
    else{
        let date = new Date();
        date.setTime(date.getTime() + 60*1000);
        let expires = "expires="+ date.toUTCString();
        document.cookie = "bnv=1; " + expires + "; path=/";
    
        alert("ciao, sono il sito creato da dj 2828");
    }
}
else{

}

const infinito = new Date('January 1, 3000 01:01:01 GMT');
let infinitogiusto = "expires="+ infinito.toUTCString();

function togli() {
    // let inf = getCookie('inf');
    
    if (inf == '0'){
        document.cookie = "inf=1; " + infinitogiusto + "; path=/";
        console.log('cookie messo per il: ' + infinito);
        alert("fatto, ricliccalo per riattivarlo");
    }
    else{
        document.cookie = "inf=0; " + infinitogiusto + "; path=/";
        console.log('tolto');
        alert("fatto, ricliccalo per disattivarlo");
    }
}



// url shortner
const params = new URLSearchParams(location.search);
const l = params.get("l");
const b = params.get("b");

const redirectMap = {
    'g': "https://google.com/",

    // tutorial
    "2fa": "https://www.epicgames.com/account/password?#2fa-signup",
    ".py": "https://www.python.org/downloads/",
    "rec": "http://dj2828.ga/script/prova%20php.html",
    'admin': 'http://dj2828.ga/script/admin.html',
    'pc': 'https://dj2828.github.io/sito/PC!!!.html',
    '1c1': 'https://dj2828.github.io/1C1',
    'server': 'https://github.com/dj2828/sito/releases/download/mod_vanilla_2/mod-server.py'
};

if (redirectMap[l]) {
    window.location.replace(redirectMap[l]);
} else if (b) {
    alert("link non trovato");
    window.location.replace("https://dj2828.github.io/sito/tutorial.html");
}