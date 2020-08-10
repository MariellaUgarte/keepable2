import React from 'react';
import RecoverIcon from './RecoverIcon';
import IconWrapper from './IconWrapper';

const Recover = props => {
    return (
        <IconWrapper onClick={props.onClick}>
            <RecoverIcon/>
        </IconWrapper>
    );
}

export default Recover