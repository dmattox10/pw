const initialState = {
    isLoading: false,
    results: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ENCODING_PASSWORD':
            return {
                ...state,
                isLoading: true
            }

        case 'SENDING_REQUEST':
            return {
                ...state,
                isLoading: true
            }

        default:
            return state
    }
}