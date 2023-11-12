import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurgerMenu} from "../actions/toggleBurgerMenu.js";

const useHeaderBurger = (menuBurgerRef) => {
    const isBurgerOpen = useSelector((state) => state.burger.isBurgerOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isBurgerOpen) return;

        document.body.style.overflow = isBurgerOpen ? 'hidden' : 'auto';

        const handleClick = (e) => {
            if (!menuBurgerRef.current) return;
            if (!menuBurgerRef.current.contains(e.target)) {
                dispatch(toggleBurgerMenu());
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleClick);
        };
    }, [isBurgerOpen, dispatch])

    return isBurgerOpen
}

export default useHeaderBurger