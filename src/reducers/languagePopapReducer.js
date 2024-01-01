const initialState = {
    isLanguageChgActive: false,
};

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_LANGUAGE_MENU':
            return {
                ...state,
                isLanguageChgActive: !state.isLanguageChgActive,
            };
        default:
            return state;
    }
};

export default languageReducer;