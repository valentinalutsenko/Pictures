const sliders = (slider, dir, prev, next) => {

    let sliderIndex = 1;
    let paused = false;

    const items = document.querySelectorAll(slider);


    function showSlides(n)  {
        if (n > items.length) {
            sliderIndex = 1;
        }

        if (n < 1) {
            sliderIndex = items.length;
        }

        items.forEach((item) => {
            item.classList.add('animated'); 
            item.style.display = 'none';
        });

        items[sliderIndex - 1].style.display = 'block';
        
    }

    showSlides(sliderIndex);

    function plussSlides(n) {
        showSlides(sliderIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plussSlides(-1);
            items[sliderIndex - 1].classList.remove('slideInLeft');
            items[sliderIndex - 1].classList.add('slideInRight');

        });

        nextBtn.addEventListener('click', () => {
            plussSlides(1);
            items[sliderIndex - 1].classList.remove('slideInRight');
            items[sliderIndex - 1].classList.add('slideInLeft');
        });

    } catch(e) {}

    function activeAnimation(n) {
        if (dir === 'vertical') {
            paused = setInterval(function() {
                plussSlides(1);
                items[sliderIndex - 1].classList.add('slideInDown');
    
            }, 3000);
        } else {
            paused = setInterval(function() {
                plussSlides(1);
                items[sliderIndex - 1].classList.remove('slideInRight');
                items[sliderIndex - 1].classList.add('slideInLeft');
    
            }, 3000);
        }
    }
    activeAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activeAnimation();
    });
};


export default sliders;