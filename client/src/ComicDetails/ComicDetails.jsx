import React from 'react';
import './comic-details.css';
import marvelAPI from '../services/marvel-api';
import Container from '../shared/Container/Container';
import Loader from '../shared/Loader/Loader';

class ComicDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comic: {},
            message: '',
            loading: true
        }
    }

    componentDidMount() {
        // comicId
        const comicId = this.props.location.state.id;
        this.setState({ message: '', loading: true, comics: null }, () => {
            marvelAPI.comics
                .find(comicId)
                .then(comic => this.setState({ comic: comic.data, loading: false }))
                .fail(err => this.setState({ message: err, loading: false }))
                .done();
        });

    }

    renderSearchResult = () => {
        const { comic } = this.state; // check for message?
        if (Object.keys(comic).length) {
            const comicInfo = comic[0]
            // console.log(comicInfo);
            return <Container {...comicInfo} />
        }
    }

    render() {
        return <section className="comic-details">
            {this.state.loading ? <Loader/> : this.renderSearchResult()}
        </section>
    }
}

export default ComicDetails;