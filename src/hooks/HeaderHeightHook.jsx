import {useEffect, useState} from 'react'
import {useDispatch} from "react-redux"
import {setHeaderHeight} from "../actions/headerAction.js";
const useHeaderHeight = (headerClassName) => {
    const [headerMenuHeight, setHeaderMenuHeight] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setHeaderHeight(headerMenuHeight))
    }, [headerMenuHeight, dispatch])

    useEffect(() => {
        const updateHeaderHeight = () => {
            const headerElement = document.querySelector(`.${headerClassName}`);
            if (headerElement) {
                setHeaderMenuHeight(headerElement.clientHeight)
            }
        }

        updateHeaderHeight();

        window.addEventListener('resize', updateHeaderHeight)

        return () => {
            window.removeEventListener('resize', updateHeaderHeight)
        }
    }, [headerClassName])

    return headerMenuHeight;
};

export default useHeaderHeight;
