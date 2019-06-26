import React from 'react';
import './Lightbox.scss';
import { getImageUrl } from '../../helpers/images';

const Lightbox = ({ image, onBackdropClick, onNextClick, onPrevClick, showNext, showPrev }) => {
    return (
       <div className={`lightbox-wrapper ${image ? 'visible' : ''}`}>
           {image && (
               <div className="image">
                   <div className="navigation clearfix">
                       {showPrev && (
                            <span className="prev" onClick={onPrevClick}>Prev</span>
                       )}
                       {showNext && (
                            <span className="next" onClick={onNextClick}>Next</span>
                       )}
                   </div>
                   <img
                       src={getImageUrl(image)}
                       alt={image.title}
                   />
                   {image.title && (
                       <div className="title">{image.title}</div>
                   )}
               </div>
           )}
           <div className="backdrop"  onClick={onBackdropClick} />
       </div>
    )
};

export default Lightbox;