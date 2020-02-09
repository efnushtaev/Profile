import React from 'react';
import classes from './../../Styles/modules/Content.module.scss';
import { Route } from 'react-router-dom';
import LandingsContainer from './Landings/LandingsContainer';
import Snippets from './Snippets/Snippets';
import Blog from './Blog/Blog';

let Content = () => {
    return (
        <div className={classes.container}>
            <Route path="/landings" render={() => <LandingsContainer />} />
            <Route path="/snippets" render={() => <Snippets />} />
            <Route path="/blog" render={() => <Blog />} />
        </div>
    )
}

export default Content