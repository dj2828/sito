alert("questa pagina ti permette di trovare un numero casuale");

var n1 = window.prompt("metti il numero");
var n2 = window.prompt("metti il numero");
var risultato;

risultato = Math.random (n1 , n2) * 10;

function a () {
    alert (risultato);
}
