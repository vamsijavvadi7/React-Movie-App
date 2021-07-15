import { PropTypes } from 'prop-types';
import React from 'react'
import {Wrapper,Content} from './Grid.styles';

function Grid({header,children}) {
    return (
        
        <Wrapper>

            <h1>
                {header}
            </h1>
            <Content>
                {children}
            </Content>

        </Wrapper>
        
        )
}
Grid.prototypes={

    header:PropTypes.string
}


export default Grid
