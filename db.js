// Use localStorage with cookies fallback

var dB = { 
  interface: ["get", "set"] 
};

if (window.localStorage) {

    dB.getLocal = function(key) {
      return localStorage.getItem(key)
    }
  
    dB.setLocal = function(key, x) {
      localStorage.setItem(key, x)
    }
} 
if (document.cookie) {
  
    dB.getCookie = function(key) {
        var x = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return x ? x[2] : null;
    }

    dB.setCookie = function(key, x) {      
       var expires = new Date();
       expires.setTime(expires.getTime() + 9 * 365*24*60*60*1000); 
       document.cookie = key + '=' + x + ';expires=' + expires.toUTCString();
    }
}

dB.get = dB.getLocal || dB.getCookie;
dB.set = dB.setLocal || dB.setCookie;

window.db = dB;
