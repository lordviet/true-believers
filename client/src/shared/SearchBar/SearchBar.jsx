import React from 'react';
import './search-bar.css';
import marvelAPI from '../../services/marvel-api';
import Character from './Character/Character'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            result: {},
            message: '',
            loading: false
        }
    }

    changeHandler = (event) => {
        const query = event.target.value;
        this.setState({ query, message: '', loading: true }) // why do I need the loading
    }

    submitSearch = () => {
        let query = this.state.query;
        if (!query) {
            this.setState({ query, result: {}, message: '' });
        }
        else {
            this.setState({ query, message: '', loading: true },
                () => {
                    marvelAPI.characters
                        .findByName(query)
                        .then(res => {
                            res.data.length !== 0 ?
                                this.setState({ result: res }) :
                                this.setState({ result: {}, message: 'Not found' }); // render errors here
                        })
                        .fail(console.err)
                        .done();
                });
        }
    }

    renderSearchResult = () => {
        const { result } = this.state; // check for message?

        if (Object.keys(result).length) {
            const characterInfo = result.data[0];
            return <Character {...characterInfo}/>
        }
    }

    render() {
        return <div>
            <form action="" className="search-bar">
                <input type="text" placeholder="(ex. Hulk, Spider-man, Iron man)" onChange={this.changeHandler} />
                <button type="button" onClick={this.submitSearch}>Search</button>
            </form>
            {this.renderSearchResult()}
        </div>
    };
}

export default SearchBar;