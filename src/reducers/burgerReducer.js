const initialState = {
    isBurgerOpen: false,
};

const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_BURGER_MENU':
            return {
                ...state,
                isBurgerOpen: !state.isBurgerOpen,
            };
        default:
            return state;
    }
};

export default burgerReducer;