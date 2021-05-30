animationsScrol('anim-scrol');
function animationsScrol(animClass) {
    const animScrol = document.querySelectorAll(`.${animClass}`);
    if (animScrol.length > 0){
        window.addEventListener('scroll', checkscrol);
        function checkscrol() {
            for(let index = 0; index < animScrol.length; index++){
                const animElem = animScrol[index];
                const animElemHeight = animElem.offsetHeight;
                const animElemOffset = offset(animElem).top;
                animStart = 4;
                animTrigger = window.innerHeight - animElemHeight / animStart;
                if(animElemHeight > window.innerHeight){
                    animTrigger = window.innerHeight - window.innerHeight / animStart;
                }
                if(pageYOffset > animElemOffset - animTrigger){
                    animElem.classList.add(`${animClass}--active`);
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
        setTimeout(() => {
            checkscrol();
        }, 300);
    }
}

