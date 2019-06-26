import React from 'react';
import Image from '../Image/Image';
import './ImageList.scss';

const ImageList = ({ images, selectImage }) => {
    return (
        <div className="image-list clearfix">
            {images.map(image => (
                <Image
                    key={image.id}
                    image={image}
                    onClick={selectImage}
                />
            ))}
        </div>
    );
};

export default ImageList;