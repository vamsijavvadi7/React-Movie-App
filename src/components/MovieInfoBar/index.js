import { PropTypes } from 'prop-types';
import React from 'react'

import {calcTime,convertMoney} from '../../helpers.js';
 
import {Wrapper,Content} from './MovieInfoBar.styles';

function MovieInfoBar({time,budget,revenue}) {
    return (
        <Wrapper>
<Content>

<div className='column'>

<p>Running Time:{calcTime(time)}</p>

</div>

<div className='column'>

<p>Budget:{convertMoney(budget)==='₹0'?'Not Available':convertMoney(budget)}</p>

</div>

<div className='column'>

<p>Revenue:{convertMoney(revenue)==='₹0'?'Not Available':convertMoney(revenue)}</p>

</div>


</Content>

        </Wrapper>
    )
}
MovieInfoBar.propTypes={

time:PropTypes.number,
budget:PropTypes.number,
revenue:PropTypes.number


}




export default MovieInfoBar
