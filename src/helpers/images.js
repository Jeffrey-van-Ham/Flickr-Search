import { IMAGE_URL } from '../constants/flickr';

export const getImageUrl = (image) => {
    if (image) {
        const { server, id, secret } = image;

        return IMAGE_URL + `${server}/${id}_${secret}.jpg`;
    }
    return '';
};