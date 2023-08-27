var cosa = window.prompt("che link ti serve?");

if (cosa == "") {
    window.location = "http://dj2828.github.io/sito/tutorial.html";
}
else {
    document.getElementById("o").innerHTML = "ok cerco" + " " + cosa ;
}

setTimeout(function() {
    if (cosa == "2fa") {
        window.location = "https://www.epicgames.com/account/password?#2fa-signup";
    }
    if (cosa == '.py' ) {
        window.location = 'https://www.python.org/downloads/';
    }
    if (cosa == 'rec' || 'Rec'){
        window.location = 'http://dj2828.github.io/sito/script/prova%20php.html';
    }
    if (cosa == 'admin' || 'Admin'){
        window.location = 'http://dj2828.github.io/sito/script/admin.html';
    }







}, 4000)



