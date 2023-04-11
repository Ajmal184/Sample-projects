
//slider

$(document).ready(function(){   
        $('#project-slider').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            smartSpeed:1000,
            margin:24,
            dots:false,
            navText:['PREV','NEXT'],
            responsive:{
                0:{
                   items:1,
                   nav:false,
                   margin:0,
                },
                768:{
                    items:2,
                    
                },
                1140:{
                    items:2,
                    center:true, 
                    dots:true

                }
            }
        })        
});

//counter

let valueDisplays = document.querySelectorAll('.display-4');
let interval = 100;

valueDisplays.forEach((valueDisplay) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function(){
        startValue +=1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter)
        }
    },duration)
})

//text animation

var typed = new Typed(".auto-input",{
    strings: ["Poster...","Menu-card...","Web..."],
    typeSpeed:70,
    backSpeed:50,
    loop:true

})

//scroll reveal

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}