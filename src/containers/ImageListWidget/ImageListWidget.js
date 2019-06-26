import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imageActions from '../../actions/images';
import ImageList from '../../components/ImageList/ImageList';
import Lightbox from '../../components/Lightbox/Lightbox';
import Loader from '../../components/Loader/Loader';
import throttle from 'lodash/throttle';

class ImageListWidget extends React.Component {

    state = {
        selectedImage: undefined
    };

    componentDidMount() {
        window.addEventListener('scroll', throttle(this.lazyLoadImages, 500));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', throttle(this.lazyLoadImages, 500));
    }

    lazyLoadImages = () => {
        if (document.documentElement.offsetHeight - (window.innerHeight + document.documentElement.scrollTop) < 1000) {
            const { status, meta, imageActions } = this.props;

            if (status.isLoading || status.isError || meta.page === meta.pages) return;

            return imageActions.searchImages(meta.searchString, meta.page + 1);
        }
    };

    selectImage = image => {
        this.setState({ selectedImage: image })
    };

    selectPrevImage = () => {
        const { images } = this.props;
        const { selectedImage } = this.state;

        this.selectImage(images[images.indexOf(selectedImage)-1]);
    };

    selectNextImage = () => {
        const { images } = this.props;
        const { selectedImage } = this.state;

        this.selectImage(images[images.indexOf(selectedImage)+1]);
    };

    render() {
        const { images, status } = this.props;
        const { selectedImage } = this.state;

        return (
            <>
                <ImageList
                    images={images}
                    selectImage={this.selectImage}
                />
                <Lightbox
                    image={selectedImage}
                    onBackdropClick={() => this.selectImage(undefined)}
                    onNextClick={this.selectNextImage}
                    onPrevClick={this.selectPrevImage}
                    showNext={!!images[images.indexOf(selectedImage)+1]}
                    showPrev={!!images[images.indexOf(selectedImage)-1]}
                />
                <Loader
                    isVisible={status.isLoading}
                />
                {status.isError && (
                    <h2>Oh oh! Sorry about that! =(</h2>
                )}
            </>
        )
    }
}

const mapStateToProps = state => ({
    images: state.images,
    status: state.status,
    meta: state.meta
});

const mapDispatchToProps = dispatch => ({
    imageActions: bindActionCreators(imageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageListWidget);