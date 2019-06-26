import React from 'react';
import { getImageUrl } from '../../helpers/images';

const Image = ({ image, onClick }) => {
    return (
        <div className="image-container" onClick={() => onClick(image)}>
            <div className="inner">
                <div
                    className="image"
                    style={{ backgroundImage: `url(${getImageUrl(image)})` }}
                />
                {image.title && (
                    <div className="title">{image.title}</div>
                )}
            </div>
        </div>
    )
};

export default Image;