import React from 'react';
import Container from '../shared/Container/Container';

function Series(props) {
    props.changeBackground('search-bg');
    const series = props.location.state.series;
    return <div>
        {series.map(res => <Container key={res.id} {...res}/>)}
    </div>
}

export default Series;