document.addEventListener('DOMContentLoaded', () => {
    var cosa = window.prompt("che link ti serve?");

    document.getElementById('o').innerText = 'CERCO: ' + cosa;

    setTimeout(function() { 
        window.location.replace("/?b=true&l=" + cosa);
    }, 2000)
});