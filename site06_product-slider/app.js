const   slider = document.querySelector('.slider-inner'),
        progressBar = document.querySelector('.prog-bar-inner');

let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', (e) => {
    console.log(getScrollPercentage());
    progressBar.style.width = `${getScrollPercentage()}%`
})


// For mouse drag cursor
slider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider.style.cursor = 'grabbing';
})
slider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'grab';
})
slider.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'grabbing';
})
// For grabbing and dragging
slider.addEventListener('mousemove', (e) => {
    if(sliderGrabbed){
        slider.parentElement.scrollLeft -= e.movementX;
    }
})
// For mousescroll on horizontal scroll
slider.addEventListener('wheel', (e) => {
    e.preventDefault();
    slider.parentElement.scrollLeft += e.deltaY;
})




// For scroll percentage
function getScrollPercentage(){
    return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100)
}
