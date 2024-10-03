const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

            //animation Link
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                 link.style.anitmation = '';
                 } else {
                link.style.animation = 'navLinkFade 0.5s esase forwards $(index/7 + .03)s';
 
        }         
     });
     //burger animation
     burger.classList.toggle('toggle');
    });

}
navSlide();