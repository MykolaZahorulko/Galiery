import {useEffect} from 'react';

const useScrollAnimation = (styles) => {
    useEffect(() => {
        const animItem = document.querySelector(`.${styles._anim_items}`);

        const animonScroll = () => {
            const pageYOffset = window.pageYOffset;
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart - 120;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight / animStart;
            }

            if (
                pageYOffset > animItemOffset - animItemPoint &&
                pageYOffset < animItemOffset + animItemHeight
            ) {
                animItem.classList.add(styles._anim_active);
            } else {
                if (!animItem.classList.contains(styles._anim_no_hide)) {
                    animItem.classList.remove(styles._anim_active);
                }
            }
        };

        const offset = (el) => {
            const rect = el.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
        };

        window.addEventListener('scroll', animonScroll);

        // Trigger the animation check on mount
        setTimeout(animonScroll, 1300);


        return () => {
            window.removeEventListener('scroll', animonScroll);
        };
    }, [styles._anim_items, styles._anim_active, styles._anim_no_hide]);
};

export default useScrollAnimation;
