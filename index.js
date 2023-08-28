alert("ciao, sono il sito creato da dj 2828");
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
    if (ok == 'si' || 'Si') {
        window.location = 'http://dj2828.github.io/sito/tutorial.html';
    }
    else{
        alert('ok');
    };
}
