var nav = document.querySelector("nav");
var didScroll = false;

window.addEventListener('scroll', function () {
    if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
    }
});

function scrollPage() {
    var sy = scrollY();
    if (sy >= 300) {
        nav.classList.add("navbar-shrink");
    }
    else {
        nav.classList.remove("navbar-shrink");
    }
    didScroll = false;
}

function scrollY() {
    return window.pageYOffset || document.documentElement.scrollTop;
}
