import React from 'react';
import './comics.css';
import marvelAPI from '../../../services/marvel-api';

class ComicsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comics: null,
            message: '',
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ message: '', loading: true }, () => {
            marvelAPI.characters
                .comics(this.props.characterId)
                .then(list => this.setState({ comics: list.data }))
                .fail(err => this.setState({ message: err }))
                .done();
        });
    }

    render() {
        const { comics } = this.state;
        return (
            <div>
                {comics ? comics.map((comic) => console.log(comic)) : <p>Loading</p>}
            </div>)
    };
}

export default ComicsList;