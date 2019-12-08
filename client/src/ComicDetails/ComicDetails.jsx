import React from 'react';
import './comic-details.css';
import marvelAPI from '../services/marvel-api';

class ComicDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comic: {},
            message: '',
            loading: false
        }
    }

    componentDidMount() {
        const comicId = this.props.location.state.comicId;
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
            console.log(comicInfo);
            // return <Character {...characterInfo} />
            // this.setState({ characterInfo })
        }
    }

    render(){
        return <div className ="comic-details">
            <img src='' alt="cover of comic book"/>
            <div className="comic-details-info">
                <h2>Comic name</h2>
                <p>If description put it here</p>
                <ul className="main-characters"></ul>
                <ul className="writers"></ul>
                <div className="useful-link">Purchase here</div>
                {this.renderSearchResult()}
            </div>
        </div>
    }
}

export default ComicDetails;