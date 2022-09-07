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

        case 'REQUEST_SUCCESS':
            return {
                ...state,
                isLoading: false,
                results: action.payload
            }

        case 'REQUEST_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
}