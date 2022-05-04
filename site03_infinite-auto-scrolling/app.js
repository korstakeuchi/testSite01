const   scrollable = document.querySelector('.scrollable'),
        content = document.querySelector('.content'),
        imgSections = [...document.querySelectorAll('.img-section')],
        images = [...document.querySelectorAll('.img')],
        
        wraps = [...document.querySelectorAll('.wrap')],
        menuTog = document.querySelector('.menu-tog'),
        menu = document.querySelector('.menu'),
        menuWraps = [...document.querySelectorAll('.menu-wrap')];

images.forEach((image, idx) => {
    image.style.backgroundImage = `url(./images/${idx + 1}.jpeg)`
})


// Set scroll dimensions.
function init(){
    document.body.style.height = `${content.getBoundingClientRect().height}px`;
}


window.addEventListener('resize', init);
menuTog.addEventListener('click', toggleMenu);


function displayWraps(){
    // For displaying wraps
    
    wraps.forEach((wrap, idx) => {
        setTimeout(() => {
            wrap.classList.add('active');
        }, idx * 50)
    })
}


// ==================== TOGGLE MENU ====================
function toggleMenu(){
    // For toggling (on the top right side)
    
    if(menu.classList.contains('active')){
        menuTog.classList.remove('active');
        toggleMenuWraps(false);
        setTimeout(() => {
            menu.classList.remove('active');
        }, 300)
        setTimeout(() => {
            toggleWraps(true);
        }, 300)
    }else{
        menuTog.classList.add('active');
        toggleWraps(false);
        setTimeout(() => {
            menu.classList.add('active');
        }, 300)
        setTimeout(() => {
            toggleMenuWraps(true);
        }, 300)
    }
}



function toggleWraps(active){
    wraps.forEach(wrap => {
        toggleWrap(wrap, active);
    })
}
function toggleMenuWraps(active){
    menuWraps.forEach(wrap => {
        toggleWrap(wrap, active);
    })
}
function toggleWrap(wrap, active){
    setTimeout(() => {
        if(active){
            wrap.classList.add('active');
        }
        else{
            wrap.classList.remove('active');
        }
    })
}






displayWraps();
init()