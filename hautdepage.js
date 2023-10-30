const scrollUp = document.querySelector('.scroll-up');

scrollUp.addEventListener('click', () => {
    console.log("scroll up");
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'
    });
});

parallax_height();
$(window).scroll(function(){
    parallax_height();
});
$(window).resize(function(){
    parallax_height();
});