let intro = document.querySelector('.intro'),
    logo = document.querySelector('.logo-header'),
    logoSpan = document.querySelectorAll('.logo');


window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, idx * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, idx * 50)
            })
        }, 2000);
        
        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300);
        
    })
})