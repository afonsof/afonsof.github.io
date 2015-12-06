document.onscroll = function (a, b, c) {

    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var nav = document.getElementsByTagName('nav')[0];
    if (top > 100) {
        nav.className = 'shrink';
    }
    else {
        nav.className = '';
    }
}