var sceltaUtente;

function cliccatoCarta () {
    sceltaUtente = "carta";
    alert ("hai scelto" + " " + sceltaUtente);
}
function cliccatoForbice () {
    sceltaUtente = "forbice";
    alert ("hai scelto" + " " + sceltaUtente);
}
function cliccatoSasso () {
    sceltaUtente = "sasso";
    alert ("hai scelto" + " " + sceltaUtente);
}
function bottoneSegreto () {
    sceltaUtente = "segreto";
    alert ("hai scelto" + " " + sceltaUtente);
}


function verdetto () {
    document.getElementById("carta").style.display = "none";
    document.getElementById("forbice").style.display = "none";
    document.getElementById("sasso").style.display = "none";
    document.getElementById("tasto").style.display = "none";
    document.getElementById("bottone segreto").style.display = "none";
    var sceltapc;
    if (sceltaUtente == "carta") {
        sceltapc = "forbice";
    }
    if (sceltaUtente == "forbice") {
        sceltapc = "sasso";
    }
    if (sceltaUtente == "sasso") {
        sceltapc = "carta";
    }
    if (sceltaUtente == "segreto") {
        sceltapc = "a";
    }

    if (sceltapc == "a") {
        document.getElementById("fai la tua").innerHTML = "hai vinttttttttttttttttttoooooooooooooooo";
    }
    else {
        document.getElementById("fai la tua").innerHTML = "hai persoooooooooooooooooooooo. il concorrente ha scelto" + " " + sceltapc + " " + ", tu hai scelto" +" " + sceltaUtente;
    }
}   

