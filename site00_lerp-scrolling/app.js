let current = 0;
let target = 0;
let ease = 0.06;

let windowWidth, containerHeight, imageHeight, skewDiff;

let container = document.querySelector('.container');
let images = Array.from(document.querySelectorAll('.img_wrap'));


images.forEach((image, idx) =>{
    image.style.backgroundImage = `url(./images/${idx + 1}.jpeg)`
})


function lerp(start, end, t){
    return start * (1 - t) + end * t;
}


function setTransform(el, transform){
    el.style.transform = transform;
}


function setupAnimation(){
    windowWidth = window.innerWidth;
    containerHeight = container.getBoundingClientRect().height;
    imageHeight = containerHeight / (windowWidth > 760 ? images.length / 2 : images.length); /* */

    document.body.style.height = `${containerHeight}px`;
    smoothScroll();

    // setting up for scroll or somethin.
}


function smoothScroll(){
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2));
    target = window.scrollY;

    skewDiff = (target - current) * .015;

    setTransform(container, `translateY(${-current}px) skewY(${skewDiff}deg)`);
    
    updateImages();
    // updateImages must be in the smoothScroll() function probably because of the current or something. I still don't know lol.
    requestAnimationFrame(smoothScroll);
}


function updateImages(){
    let ratio = current / imageHeight;
    let intersectionRatioIndex, intersectionRatioValue;

    images.forEach((image, idx) =>{
        intersectionRatioIndex = windowWidth > 760 ? parseInt(idx / 2) : idx;
        intersectionRatioValue = ratio - intersectionRatioIndex;
        setTransform(image, `translateY(${intersectionRatioValue * 70}px)`);
    })
}


setupAnimation()