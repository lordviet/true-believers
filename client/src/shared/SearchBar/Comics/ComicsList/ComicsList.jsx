import React from 'react';
import './comics-list.css';
import marvelAPI from '../../../../services/marvel-api';
import Comic from '../Comic/Comic';
import Loader from '../../../Loader/Loader';


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
            setTimeout(
            this.setState({ message: '', loading: true, comics: null }, () => {
                marvelAPI.characters
                    .comics(this.props.characterId, 10, 10)
                    .then(list => this.setState({ comics: list.data }))
                    .fail(err => this.setState({ message: err }))
                    .done();
            }), 1000);
        }
    }
    
    render() {
        const { comics } = this.state;
        return (
            <div className="comics">
                {comics ? comics.map((comic) => <Comic key={comic.id} {...comic} />) : <Loader/>}
            </div>)
    };
}

export default ComicsList;