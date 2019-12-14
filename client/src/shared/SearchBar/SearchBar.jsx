import React from 'react';
import './search-bar.css';
import marvelAPI from '../../services/marvel-api';
import Character from '../Character/Character';
import Loader from '../Loader/Loader';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            result: {},
            message: '',
            loading: false,
        }
    }

    changeHandler = (event) => {
        const query = event.target.value;
        this.setState({ query, message: '', loading: false }) // why do I need the loading
    }

    submitSearch = (e) => {
        e.preventDefault();
        let query = this.state.query;
        if (!query) {
            this.setState({ query, result: {}, message: '' });
        }
        else {
            setTimeout(this.setState({ query, message: '', loading: true },
                () => {
                    marvelAPI.characters
                        .findByName(query)
                        .then(res => {
                            res.data.length !== 0 ?
                                this.setState({ result: res, loading: false }) :
                                this.setState({ result: {}, message: 'Not found', loading: false }); // render errors here
                        })
                        .fail(console.err)
                        .done();
                }), 1000)
        }
    }

    renderSearchResult = () => {
        const { result } = this.state; // check for message?
        if (Object.keys(result).length && result.data.length) {
            const characterInfo = result.data[0];
            return <Character {...characterInfo} />
        }
        if(this.state.message){
            return <h2 className="not-found">No results found!</h2>
        }
    }

    render() {
        return <div>
            <form action="" className="search-bar">
                <input type="text" placeholder="(ex. Hulk, Spider-man, Iron man)" onChange={this.changeHandler} />
                <button type="submit" onClick={this.submitSearch}>Search</button>
            </form>
            {this.state.loading ? <Loader /> : this.renderSearchResult()}
        </div>
    };
}

export default SearchBar;