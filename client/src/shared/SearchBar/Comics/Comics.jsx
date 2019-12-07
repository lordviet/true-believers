import React from 'react';
import './comics.css';
import marvelAPI from '../../../services/marvel-api';
import Comic from './Comic/Comic';

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
        this.setState({ message: '', loading: true, comics: null }, () => {
            marvelAPI.characters
                .comics(this.props.characterId, 10, 10)
                .then(list => this.setState({ comics: list.data }))
                .fail(err => this.setState({ message: err }))
                .done();
        });

    }


    componentDidUpdate(prevProps) {
        if (this.props.characterId !== prevProps.characterId) {
            this.setState({ message: '', loading: true, comics: null }, () => {
                marvelAPI.characters
                    .comics(this.props.characterId, 10, 10)
                    .then(list => this.setState({ comics: list.data }))
                    .fail(err => this.setState({ message: err }))
                    .done();
            });
        }
    }
    
    render() {
        const { comics } = this.state;
        return (
            <div className="comics">
                {comics ? comics.map((comic) => <Comic key={comic.id} {...comic} />) : <p>Loading</p>}
            </div>)
    };
}

export default ComicsList;