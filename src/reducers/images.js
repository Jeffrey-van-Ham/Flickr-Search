const images = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.images;
        case 'ADD_IMAGES':
            return [
                ...state,
                ...action.images
            ];
        case 'CLEAR_IMAGES':
            return [];
        default:
            return state;
    }
};

export default images;