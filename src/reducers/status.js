const status = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return {
                isLoading: true,
                isSuccess: false,
                isError: false
            };
        case 'SET_IS_SUCCESS':
            return {
                isLoading: false,
                isSuccess: true,
                isError: false
            };
        case 'SET_IS_ERROR':
            return {
                isLoading: false,
                isSuccess: false,
                isError: true
            };
        default:
            return state;
    }
};

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false
};

export default status;