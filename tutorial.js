var cosa = window.prompt("che link ti serve?");

document.getElementById('o').innerText = 'CERCO: ' + cosa;

var linkd = {
    "2fa": "https://www.epicgames.com/account/password?#2fa-signup",
    ".py": "https://www.python.org/downloads/",
    "rec": "http://dj2828.ga/script/prova%20php.html",
    'admin': 'http://dj2828.ga/script/admin.html',
    'pc': 'https://dj2828.github.io/sito/PC!!!.html',
    '1c1': 'https://dj2828.github.io/1C1',
    'server': 'https://github.com/dj2828/sito/releases/download/mod_vanilla_2/mod-server.py'
};


setTimeout(function() { 
    var link = linkd[cosa];
    if (link != undefined){
        window.open(link, '_self');
    }
    else{
        alert("link non trovato");
        window.location = "https://dj2828.github.io/sito/tutorial.html";
    }
}, 2000)