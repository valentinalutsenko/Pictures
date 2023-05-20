const scroll = (upSelector) => {
    const upElem = document.querySelector(upSelector)
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.style.opacity = 1;
        } else if (document.documentElement.scrollTop < 1600) {
            upElem.style.opacity = 0;
        }
    });


    const element = document.documentElement,
          body = document.body;

    const calcScroll = () => {
        upElem.addEventListener('click', function (event) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (this.hach !== '') {
                event.preventDefault();
                let hachElem = document.querySelector(this.hach),
                    hachElemTop = 0;

                while (hachElemTop.offsetParent) {
                    hachElemTop += hachElemTop.offsetTop;
                    hachElem = hachElem.offsetParent;
                }

                hachElemTop = Math.round(hachElemTop);
                smoothScroll(scrollTop, hachElemTop, this.hach);

            }

        });
    }

    const smoothScroll = (from, to, hach) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;

        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function() {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (
                prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ) {
                clearInterval(move)
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hach);

            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);   
    };

    calcScroll();
};

export default scroll;