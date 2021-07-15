import { PropTypes } from 'prop-types';
import React from 'react'

import { Link } from 'react-router-dom'
import {Wrapper,Content} from './BreadCrumb.styles';
function BreadCrumb ({movieTitle}) {
    return (
        <Wrapper>
<Content>

    <Link to='/'>
    <span>
        Home
    </span>
    </Link>
    <span>
        |
    </span>
    <span>

        {movieTitle}
    </span>

</Content>

        </Wrapper>
    )
}

BreadCrumb.propTypes={

    movieTitle:PropTypes.string
}


export default BreadCrumb; 
