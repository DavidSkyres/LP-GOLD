lazzyLoad('lazyload-img');
function lazzyLoad(imgClass) {
    const imgItems = document.querySelectorAll(`.${imgClass}`);
    if (imgItems.length > 0){
        window.addEventListener('scroll', checkscrol);
        function checkscrol() {
            if (imgItems.length > 0){
                for(let index = 0; index < imgItems.length; index++){
                    if(!imgItems[index].classList.contains('LL--loaded')){
                    const imgElem = imgItems[index];
                    const imgElemHeight = imgElem.offsetHeight;
                    const imgElemOffset = offset(imgElem).top;
                    loadTrigger = window.innerHeight + imgElemHeight;
                    if(pageYOffset > imgElemOffset - loadTrigger){
                        imgElem.srcset = imgElem.src;
                        imgElem.classList.add('LL--loaded');
                    }
                }
            }
        }
    }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
            scrpllTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrpllTop,
            }
        }
        checkscrol();
    }
}