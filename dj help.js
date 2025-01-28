function help() {
    // Ottieni il nome dall'input dell'utente
    const userName = document.getElementById('userName').value;
    const why = document.getElementById('why').value;
    const dove = document.getElementById('dove').value;

    // Verifica che l'input non sia vuoto
    if (!userName || !why) {
        alert('Per favore inserisci un nome e/o probblema');
        return; // Esce dalla funzione se l'input è vuoto
    }

    // Dati da inviare al webhook
    const data = {
        content: '<@685136676984586260> '+userName+' // `'+why+'` // '+dove
    }
    invio(data);
}
function kick(){
    const userName = document.getElementById('userName').value;

    if (!userName) {
        alert('Per favore inserisci un nome');
        return; // Esce dalla funzione se l'input è vuoto
    }

    const data = {
        content: '<@685136676984586260> `'+userName+'` ha chiesto aiuto per il kick'
    }
    invio(data);
}

function invio(data){
    fetch(process.env.NEXT_PUBLIC_DS_WEB, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            // alert('inviato con successo!');
        } else {
            alert('Errore nell\'invio del webhook. Status: ' + response.status);
        }
    })
    .catch(error => {
        console.error('Errore:', error);
        alert('Errore di rete durante l\'invio del webhook.');
    })
}