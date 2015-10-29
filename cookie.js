// Get and set cookies
//
// Cookies.set('key', 'content');
// Cookies.get('key');
//
// Uses session cookies by default. 
// Change Cookies.session to false to use permanent cookies
//
// Cookies.session = false;
// Cookies.set('key', 'remember this');

var Cookies = { 
    on: document.cookie,
    
    get: function(key) {
        var x = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return x ? x[2] : null;
    },

    set: function(key, content) {      
        document.cookie = key + '=' + content + ';expires=' + Cookies.expires();
    },

    session: true,

    expires: function(){
        if (Cookies.session) {
            return 0; 
        } else {
            var d = new Date();
            d.setTime(d.getTime() + 9 * 365*24*60*60*1000); 
            return d.toUTCString();
        }
    }
};
