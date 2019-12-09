import React from 'react';
import './comic-details.css';
import marvelAPI from '../services/marvel-api';
import Container from '../shared/Container/Container'

class ComicDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comic: {},
            message: '',
            loading: false
        }
    }

    componentDidMount() {
        // comicId
        const comicId = this.props.location.state.id;
        this.setState({ message: '', loading: true, comics: null }, () => {
            marvelAPI.comics
                .find(comicId)
                .then(comic => this.setState({ comic: comic.data }))
                .fail(err => this.setState({ message: err }))
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
            {this.renderSearchResult()}
        </section>
    }
}

export default ComicDetails;