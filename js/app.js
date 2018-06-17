$(document).ready(function () {
    if(!window.getComputedStyle(document.body).mixBlendMode) {
        $('body').addClass('no-mix-blend-mode');
    }
});