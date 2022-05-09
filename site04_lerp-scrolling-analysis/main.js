let current = 0,
    target = 0,
    ease = 0.06,
    
    windowWidth, containerHeight, imageHeight, skewDiff,
    
    container = document.querySelector('.container'),
    images = Array.from(document.querySelectorAll('.img-wrap'));


images.forEach((image, idx) =>{
    image.style.backgroundImage = `url(./images/${idx + 1}.jpeg)`;
})





function lerp(start, end, t){
    return start * (1-t) + end * t;
}
function setTransform(el, transform){
    el.style.transform = transform;
}





function setupAnimation(){

    // Setting up scroll
    containerHeight = container.getBoundingClientRect().height;
    document.body.style.height = `${containerHeight}px`;
    smoothScroll();



    // For parallax effect
    imageHeight = containerHeight / images.length;

}

function smoothScroll(){

    // For smooth scrolling
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2));
    target = window.scrollY;

    setTransform(container, `translateY(${-current}px)`);

    requestAnimationFrame(smoothScroll);



    // For parallax effect
    updateImages()    

}

function updateImages(){

    // For parallax effect
    let ratio = current / imageHeight;
    let intersectionRatioIndex, intersectionRatioValue;

    images.forEach((image, idx) =>{
        intersectionRatioIndex = idx;
        intersectionRatioValue = ratio - intersectionRatioIndex;
        setTransform(image, `translateY(${intersectionRatioValue * 40}px)`);
    })

    // console.log(current);
    // console.log(imageHeight);
    // console.log(ratio);
    // console.log(intersectionRatioValue);
    // console.log((intersectionRatioValue * 70)+'px');
}





setupAnimation();