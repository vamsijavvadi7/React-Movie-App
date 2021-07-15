import { PropTypes } from 'prop-types';
import React from 'react'



import {Wrapper} from './Button.styles';

function Button({text,callback}) {
    return (
    <Wrapper type='button' onClick={callback}  >

        {text}
    </Wrapper>
    )
}


Button.propTypes={

    text:PropTypes.string,
    callback:PropTypes.func
}
export default Button
