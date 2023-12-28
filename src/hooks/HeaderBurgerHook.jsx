import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurgerMenu} from "../actions/toggleBurgerMenu.js";

const useHeaderBurger = (menuBurgerRef) => {
    const isBurgerOpen = useSelector((state) => state.burger.isBurgerOpen);
    const dispatch = useDispatch();

    useEffect(() => {

        if (!isBurgerOpen) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        const handleClick = (e) => {
            if (!menuBurgerRef.current) return;
            if (!menuBurgerRef.current.contains(e.target)) {
                dispatch(toggleBurgerMenu());
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener('click', handleClick);
        };
    }, [isBurgerOpen, dispatch]);

    return isBurgerOpen;
}

export default useHeaderBurger