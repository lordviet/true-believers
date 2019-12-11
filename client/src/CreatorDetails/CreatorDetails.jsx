import React from 'react';
import marvelAPI from '../services/marvel-api';
import Container from '../shared/Container/Container';
import Loader from '../shared/Loader/Loader';

class ComicDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creator: {},
            message: '',
            loading: true
        }
    }

    componentDidMount() {
        const creatorId = this.props.location.state.id;
        this.setState({ message: '', loading: true, comics: null }, () => {
            marvelAPI.creators
                .find(creatorId)
                .then(creator => this.setState({ creator: creator.data, loading: false }))
                .fail(err => this.setState({ message: err, loading: false }))
                .done();
        });

    }

    renderSearchResult = () => {
        const { creator } = this.state; // check for message?
        console.log(creator);
        if (Object.keys(creator).length) {
            const creatorInfo = creator[0]
            // console.log(comicInfo);
            return <Container {...creatorInfo} />
        }
    }

    render() {
        return <section className="creator-details">
            {this.state.loading ? <Loader/> : this.renderSearchResult()}
        </section>
    }
}

export default ComicDetails;