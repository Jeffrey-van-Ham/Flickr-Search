const meta = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_META':
            return {
                ...state,
                ...action.meta
            };
        default:
            return state;
    }
};

const initialState = {
    page: 0,
    perpage: 0,
    pages: 0,
    searchString: ''
};

export default meta;