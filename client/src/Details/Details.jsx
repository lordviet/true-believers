import React from 'react';
import marvelAPI from '../services/marvel-api';
import Container from '../shared/Container/Container';
import Character from '../shared/Character/Character';
import Loader from '../shared/Loader/Loader';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            message: '',
            loading: true
        }
    }

    componentDidMount() {
        const id = this.props.location.state.id;
        this.setState({ message: '', loading: true, comics: null }, () => {
            marvelAPI[this.props.criteria]
                .find(id)
                .then(res => this.setState({ result: res.data, loading: false }))
                .fail(err => this.setState({ message: err, loading: false }))
                .done();
        });

    }

    renderSearchResult = () => {
        const { result } = this.state; // check for message?
        if (Object.keys(result).length) {
            const info = result[0]
            return this.props.criteria === 'characters' ? <Character {...info}/> : <Container {...info} />;
        }
    }

    render() {
        return <section>
            {this.state.loading ? <Loader/> : this.renderSearchResult()}
        </section>
    }
}

export default Details;