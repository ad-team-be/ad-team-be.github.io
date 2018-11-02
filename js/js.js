window.sr = ScrollReveal(config);

sr.reveal('.reveal');                           //Affichage syncro
sr.reveal('.Ireveal', { duration: 2000 }, 50); //Affichage pas syncro

var config = {
  scale:0.8,
  mobile:true,
  reset:true,
  viewFactor:0.3
}

$(document).on('click', '.SLow', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
