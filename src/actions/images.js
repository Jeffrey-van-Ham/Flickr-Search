import axios from 'axios';
import { SEARCH_URL} from '../constants/flickr';

export const searchImages = (searchString, page = 1, clear = false, perpage = 50) => dispatch => {
    dispatch({
        type: 'SET_IS_LOADING'
    });

    if (clear) {
        dispatch({
            type: 'CLEAR_IMAGES'
        });
    }

    return axios.get(SEARCH_URL + `&text=${searchString}&page=${page}&per_page=${perpage}`)
        .then(response => {
            const { page, pages, perpage, photo } = response.data.photos;

            dispatch({
                type: 'SET_META',
                meta: {
                    page,
                    pages,
                    perpage,
                    searchString
                }
            });

            dispatch({
                type: 'ADD_IMAGES',
                images: photo
            });

            dispatch({
                type: 'SET_IS_SUCCESS'
            });
        })
        .catch(error => {
            dispatch({
                type: 'SET_IS_ERROR',
                error
            });
        })
};