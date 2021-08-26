import React, { Fragment } from 'react';
import './HotRecipes.css';

import { Link } from 'react-router-dom';
import Icon from '../iconComponent/Icon';

const HotRecipes = () => {
    return (
        <Fragment>
            <div className="main-hot-recipes--header">
                <h1>Hot Recipes</h1>
                <Link to="/" className="link">
                    <p>More</p> <Icon name="next" width="27" height="27" color="#FFF" className="icon" />
                </Link>
            </div>
        </Fragment>
    );
}

export default HotRecipes;