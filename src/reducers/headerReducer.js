const initialState = {
    headerHeight: 105,
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HEADER_HEIGHT':
            return {
                ...state,
                headerHeight: action.payload,
            }
        default:
            return state
    }
}

export default headerReducer