import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imageActions from '../../actions/images';
import './Header.scss'

const Header = ({ isLoading, imageActions }) => {

    const [search, setSearch] = useState('');

    const handleChange = event => {
        const { target } = event;

        setSearch(target.value);
    };

    const handleSearch = event => {
        event.preventDefault();

        return imageActions.searchImages(search, 1, true);
    };

    return (
        <header>
            <h1>Search Flickr!</h1>
            <form onSubmit={handleSearch}>
                <input
                    value={search}
                    onChange={handleChange}
                    type="text"
                />
                <button type="submit" disabled={isLoading || search.trim().length === 0}>Search</button>
            </form>
        </header>
    );
};

const mapStateToProps = state => ({
   isLoading: state.status.isLoading
});

const mapDispatchToProps = dispatch => ({
    imageActions: bindActionCreators(imageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);