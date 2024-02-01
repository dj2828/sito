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


function trio(a){
  let trioc = getCookie('trioc');
  if (trioc == '1'){
    window.location = a;
  }
  else{
    var trio = window.prompt('come si dice che ore sono? in triese');
    if (trio == 'sbarda cum' || trio == 'Sbarda cum') {
      let date = new Date();
      date.setTime(date.getTime() + 60*1000);
      let expires = "expires="+ date.toUTCString();
      document.cookie = "trioc=1; " + expires + "; path=/";
      window.location = a;
    }
    else{
      alert('no.');
    }
  }
}
