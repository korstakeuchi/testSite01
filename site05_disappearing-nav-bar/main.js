const header = document.querySelector('header');

let prevScrollPos = window.pageYOffset;


window.onscroll = function () {

    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        header.classList.remove("scroll");
    }
    else {
        header.classList.add("scroll");
    }
    
    prevScrollPos = currentScrollPos;
    
};