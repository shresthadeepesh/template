window.onscroll = function() {removeLogo()};
var logo = document.getElementById('logo');
var sticky = logo.offsetTop;

function removeLogo() {
    if(window.pageYOffset >= sticky) {
        logo.classList.add("hidden");
    }
    else {
        logo.classList.remove("hidden");
    }
}

AOS.init();

//for counter
jQuery(document).ready(function($){
    $('.counts').counterUp({
    delay: 10,
    time: 1000
});
});


// for scrolling
$("a[href^='#']").click(function(e) {
e.preventDefault();

var position = $($(this).attr("href")).offset().top;

$("body, html").animate({
scrollTop: position
} /* speed */ );
});